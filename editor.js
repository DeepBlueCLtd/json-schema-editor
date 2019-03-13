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
Editor.prototype.updateSchema = function(schema) {
    this.destroy();
    this.jsonEditor = new JSONEditor(this.renderZone, { schema: schema });
}

// Validate JSON
Editor.prototype.validate = function() {
    return this.jsonEditor.validate();
}

// Get generated JSON
Editor.prototype.getJSON = function() {
    return this.jsonEditor.getValue();
}

// --------------- SaveEditor subclass -------------------------------------

// create a JSON Editor with a save button to save JSON to a file,
// elementId is the id in which to render the editor,
// saveButtonLabel is the label to but in the save button.
// filename is the name to assign to the file to save.
function SaveEditor(elementId, saveButtonLabel, filename) {
    Editor.call(this, elementId);
    this.saveButtonLabel = saveButtonLabel;
    this.filename = filename;
}

// Inherit Editor methods
SaveEditor.prototype = Object.create(Editor.prototype);

// After `SaveEditor.prototype = Object.create(Editor.prototype)` instruction,
// SaveEditor.prototype is a copy of Editor.prototype,
// so the `constructor` property of SaveEditor.prototype is Editor,
// but a SaveEditor object is created with the SaveEditor constructor,
// so we override the `constructor` property of SaveEditor.prototype to SaveEditor
Object.defineProperty(SaveEditor.prototype, 'constructor', {
    value: SaveEditor,
    enumerable: false, // so that it does not appear in 'for in' loop
    writable: true
});

// Override the updateSchema function
SaveEditor.prototype.updateSchema = function(schema) {
    // Call parent method
    Editor.prototype.updateSchema.call(this, schema);

    // Add a save button
    var filename = this.filename;
    var saveButtonLabel = this.saveButtonLabel;
    
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

