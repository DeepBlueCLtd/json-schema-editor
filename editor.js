// -------- Editor class ---------------------------------------------------

// create a JSON Editor, elementId is the id in which to render the editor
function Editor(elementId) {
    this.jsonEditor = null;
    this.renderZone = document.getElementById(elementId);
}

// Destroy editor, and remove it from view
Editor.prototype.destroy = function() {
    if(this.jsonEditor) {
        this.jsonEditor.destroy();
        this.jsonEditor = null;
    }
}

// Recreate a new editor based on the given schema and start value
// If schema is undefined, the editor is not recreated, but only destroyed
Editor.prototype.updateSchema = function(schema, startval) {
    this.destroy();
    if(startval) {
        this.jsonEditor = new JSONEditor(this.renderZone, { schema: schema, startval: startval });
    }
    else {
        this.jsonEditor = new JSONEditor(this.renderZone, { schema: schema });
    }
}

// Validate JSON
Editor.prototype.validate = function() {
    return this.jsonEditor.validate();
}

// Get generated JSON
Editor.prototype.getJSON = function() {
    return this.jsonEditor.getValue();
}

Editor.prototype.setJSON = function(val) {
    this.jsonEditor.setValue(val);
}

// Check whether the JSON Editor is initialized
Editor.prototype.isInitialized = function() {
    return this.jsonEditor !== null;
}

// --------------- PreviewEditor subclass ------------------------------------

// create a JSON Editor that doesn't allow specifying additional properties,
// but only those specified in the schema can be set.
// elementId is the id in which to render the editor,
function PreviewEditor(elementId) {
    Editor.call(this, elementId);
}

// Inherit Editor methods
PreviewEditor.prototype = Object.create(Editor.prototype);

// After `PreviewEditor.prototype = Object.create(Editor.prototype)` instruction,
// PreviewEditor.prototype is a copy of Editor.prototype,
// so the `constructor` property of PreviewEditor.prototype is Editor,
// but a PreviewEditor object is created with the PreviewEditor constructor,
// so we override the `constructor` property of PreviewEditor.prototype to PreviewEditor
Object.defineProperty(PreviewEditor.prototype, 'constructor', {
    value: PreviewEditor,
    enumerable: false, // so that it does not appear in 'for in' loop
    writable: true
});

PreviewEditor.prototype.updateSchema = function(schema, startval) {
    if(startval) {
        this.destroy();
        this.jsonEditor = new JSONEditor(this.renderZone, {
            schema: schema,
            startval: startval,
            no_additional_properties: true
        });
    }
    else {
        // If no startval is provided, try to reuse, where possible, the old values
        var oldValue = undefined;
        if(this.isInitialized()) {
            oldValue = this.getJSON();
        }

        
        this.destroy();
        this.jsonEditor = new JSONEditor(this.renderZone, {
            schema: schema,
            no_additional_properties: true
        });

        // If there was a previous value, try keeping its values
        if(typeof oldValue !== 'undefined') {

            // Helper function to remove invalid entries from objects and arrays
            function removeKey(obj, path) {
                if(path.length === 0 || typeof obj === 'undefined') {
                    return; // The prop was not found, do nothing
                }
                else {
                    const prop = path.shift();
                    if(path.length === 0) {
                        // We found the deletion point
                        // The object may be an array, in that case,
                        // we remove the object from the array, instead of deleting it.
                        // Deleting an element of the array just sets that element to undefined,
                        // but doesn't remove it from the array
                        if(Array.isArray(obj)) {
                            // Be sure that the path element is a number
                            if(!isNaN(prop)) {
                                obj.splice(prop, 1);
                            }
                            else {
                                // Otherwise don't delete anything, but report the strange behavior
                                console.log("Invalid array index: ", prop);
                            }
                        }
                        else {
                            delete obj[prop];
                        }
                    }
                    else {
                        // Keep recursing
                        removeKey(obj[prop], path);
                    }
                }
            }

            // We go through all problematic properties and remove them,
            // only keeping properties whose value is still valid.
            var errors = this.jsonEditor.validate(oldValue);
            for(var error of errors) {
                var components = error.path.split('.').slice(1); // Pop 'root' from path
                if(error.property === 'additionalProperties') {
                    // Ignore additional properties errors.
                    // Superflous properties shall be deleted by JSONEditor itself.
                    continue;
                }
                if(components.length === 0) {
                    // The whole object must be invalidated
                    oldValue = undefined;
                    break;
                }
                else {
                    removeKey(oldValue, components);
                }
            }
            // Merge old and new values so that old valid values are kept
            var newValue = Object.assign(this.getJSON(), oldValue);
            this.setJSON(newValue);
        }
    }
}


// --------------- SchemaEditor subclass -------------------------------------

// create a JSON Editor for a JSON Schema, it adds a save button
// to save the Schema to a file, and also
// makes the 'Properties' buttons distinguishable to avoid confusion between
// schema properties and object properties.
// elementId is the id in which to render the editor,
function SchemaEditor(elementId) {
    Editor.call(this, elementId);

    // Check whether the node is a properties button for an object,
    // and not for the schema of an object named properties
    var isObjectPropertiesButton = function(node) {
        // Does the path end in '.properties'?
        if(node.matches('div[data-schemapath$=".properties"] > h3 > div > button.json-editor-btntype-properties')) { 
            var containingDiv = node.parentElement.parentElement.parentElement;
            var span = containingDiv.querySelector('h3 > span');

            // Is it an object properties or a property named properties?
            if(span && span.innerText === 'properties') { 
                return true;
            }
        }
        return false;
    };

    this.observer = new MutationObserver(function(mutationsList, observer) {
        for(var mutation of mutationsList) {
            mutation.addedNodes.forEach(function(node) {
                if(node.nodeType == 1) {
                    if(isObjectPropertiesButton(node)) {
                        node.querySelector('span').innerText = 'Add/Remove';
                    }
                    else if(node.matches('button.json-editor-btntype-properties')) {
                        // For other properties buttons, remove the 'Properties' label,
                        // and use a cog as icon
                        var icon = node.querySelector('i');
                        icon.classList.remove('fa-pen');
                        icon.classList.add('fa-cog');

                        var span = node.querySelector('span');
                        span.innerText = '';
                    }
                }
            });
        }
    });

    this.observer.observe(this.renderZone, { childList: true, subtree: true });
}

// Inherit Editor methods
SchemaEditor.prototype = Object.create(Editor.prototype);

// After `SchemaEditor.prototype = Object.create(Editor.prototype)` instruction,
// SchemaEditor.prototype is a copy of Editor.prototype,
// so the `constructor` property of SchemaEditor.prototype is Editor,
// but a SchemaEditor object is created with the SchemaEditor constructor,
// so we override the `constructor` property of SchemaEditor.prototype to SchemaEditor
Object.defineProperty(SchemaEditor.prototype, 'constructor', {
    value: SchemaEditor,
    enumerable: false, // so that it does not appear in 'for in' loop
    writable: true
});

// Override the updateSchema function
SchemaEditor.prototype.updateSchema = function(schema, startval) {
    this.destroy();

    // Add extra validation logic for integer schemas that use the `range` format.
    // For integer schemas that use the `range` format we require that minimum and maximum properties are set, too.
    var range_integer_validator = function(schema, value, path) {
        var errors = [];
        if(value !== null && value.type === 'integer' && value.format === 'range') {
            if(typeof value.minimum === 'undefined' || typeof value.maximum === 'undefined') {
                errors.push({
                    path: path,
                    property: 'format',
                    message: 'The range format requires that you specify both minimum and maximum properties, too.'
                });
            }
        }
        return errors;
    };

    // Check that if minimum and maximum are specified, minimum <= maximum
    var min_max_consistence_validator = function(schema, value, path) {
        var errors = [];
        if(value !== null && (value.type === 'integer' || value.type === 'number')) {
            if(typeof value.minimum !== 'undefined' && typeof value.minimum !== 'undefined' && value.minimum > value.maximum) {
                errors.push({
                    path: path,
                    property: 'maximum',
                    message: 'The maximum value must be greater than or equal than the minimum value.'
                });
            }
        }
        return errors;
    };

    if(startval) {
        // Recreate the JSON-Editor
        this.jsonEditor = new JSONEditor(this.renderZone, {
            schema: schema,
            startval: startval,
            custom_validators: [ range_integer_validator, min_max_consistence_validator ]
        });
    }
    else {
        // Recreate the JSON-Editor
        this.jsonEditor = new JSONEditor(this.renderZone, {
            schema: schema,
            custom_validators: [ range_integer_validator, min_max_consistence_validator ]
        });
    }


    // Add a save button
    var filename = 'schema.json';
    var saveButtonLabel = 'Save';
    
    this.jsonEditor.on('ready', function() {
        var button = this.root.getButton(saveButtonLabel, 'save', saveButtonLabel);
        var button_holder = this.root.theme.getHeaderButtonHolder();
        button_holder.appendChild(button);
        this.root.header.parentNode.insertBefore(button_holder, this.root.header.nextSibling);

        var jsonEditor = this;
        button.addEventListener('click', function(e) {
            e.preventDefault();
            var contents = jsonEditor.getValue();
            var blob = new Blob([JSON.stringify(contents, null, 2)], {
                type: "application/json;charset=utf-8"
            });

            if(window.navigator && window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveOrOpenBlob(blob, filename);
            }
            else {
                var a = document.createElement('a');
                a.download = filename;
                a.href = URL.createObjectURL(blob);
                a.dataset.downloadurl = ['text/plain', a.download, a.href].join(':');

                a.dispatchEvent(new MouseEvent('click', {
                    'view': window,
                    'bubbles': true,
                    'cancelable': false
                }));
            }
        }, false);
    });
}

