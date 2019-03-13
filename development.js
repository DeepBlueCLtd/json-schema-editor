var jsonMetaSchema = `{
    "$ref": "#/definitions/object",
    "title": "object type",
    "definitions": {
        "string": {
            "required": [
                "type"
            ],
            "defaultProperties": [
                "type",
                "title"
            ],
            "additionalProperties": false,
            "title": "string type",
            "type": "object",
            "properties": {
                "$ref": {
                    "format": "uri",
                    "type": "string"
                },
                "default": {
                    "type": "string"
                },
                "format": {
                    "type": "string",
                    "enum": [
                        "color",
                        "date",
                        "datetime",
                        "datetime-local",
                        "email",
                        "month",
                        "number",
                        "range",
                        "tel",
                        "text",
                        "textarea",
                        "time",
                        "url",
                        "week",
                        "json",
                        "sql",
                        "xml",
                        "yaml"
                    ]
                },
                "$schema": {
                    "format": "uri",
                    "type": "string"
                },
                "id": {
                    "format": "uri",
                    "type": "string"
                },
                "title": {
                    "type": "string",
                    "propertyOrder": 1
                },
                "type": {
                    "options": {
                        "hidden": true
                    },
                    "type": "string",
                    "enum": [
                        "string"
                    ]
                },
                "enum": {
                    "format": "table",
                    "items": {
                        "title": "alternative",
                        "type": "string"
                    },
                    "type": "array"
                },
                "description": {
                    "type": "string"
                }
            }
        },
        "null": {
            "required": [
                "type"
            ],
            "defaultProperties": [
                "type",
                "title"
            ],
            "additionalProperties": false,
            "title": "null type",
            "type": "object",
            "properties": {
                "$ref": {
                    "format": "uri",
                    "type": "string"
                },
                "default": {
                    "type": "null"
                },
                "$schema": {
                    "format": "uri",
                    "type": "string"
                },
                "id": {
                    "format": "uri",
                    "type": "string"
                },
                "title": {
                    "type": "string",
                    "propertyOrder": 1
                },
                "type": {
                    "options": {
                        "hidden": true
                    },
                    "type": "string",
                    "enum": [
                        "null"
                    ]
                },
                "description": {
                    "type": "string"
                }
            }
        },
        "array": {
            "required": [
                "type"
            ],
            "defaultProperties": [
                "type",
                "items",
                "title"
            ],
            "additionalProperties": false,
            "title": "array type",
            "type": "object",
            "properties": {
                "$ref": {
                    "format": "uri",
                    "type": "string"
                },
                "default": {
                    "type": "array"
                },
                "format": {
                    "default": "table",
                    "type": "string",
                    "enum": [
                        "array",
                        "table",
                        "tabs",
                        "tabs-top",
                        "checkbox",
                        "select",
                        "categories"
                    ]
                },
                "items": {
                    "$ref": "#/definitions/schema"
                },
                "$schema": {
                    "format": "uri",
                    "type": "string"
                },
                "id": {
                    "format": "uri",
                    "type": "string"
                },
                "title": {
                    "type": "string",
                    "propertyOrder": 1
                },
                "type": {
                    "options": {
                        "hidden": true
                    },
                    "type": "string",
                    "enum": [
                        "array"
                    ]
                },
                "description": {
                    "type": "string"
                }
            }
        },
        "schema": {
            "default": {
                "type": "object"
            },
            "oneOf": [
                {
                    "$ref": "#/definitions/null",
                    "title": "null type"
                },
                {
                    "$ref": "#/definitions/boolean",
                    "title": "boolean type"
                },
                {
                    "$ref": "#/definitions/string",
                    "title": "string type"
                },
                {
                    "$ref": "#/definitions/integer",
                    "title": "integer type"
                },
                {
                    "$ref": "#/definitions/number",
                    "title": "number type"
                },
                {
                    "$ref": "#/definitions/object",
                    "title": "object type"
                },
                {
                    "$ref": "#/definitions/array",
                    "title": "array type"
                }
            ],
            "options": {
                "keep_oneof_values": false
            },
            "type": "object"
        },
        "boolean": {
            "required": [
                "type"
            ],
            "defaultProperties": [
                "type",
                "title"
            ],
            "additionalProperties": false,
            "title": "boolean type",
            "type": "object",
            "properties": {
                "$ref": {
                    "format": "uri",
                    "type": "string"
                },
                "default": {
                    "type": "boolean"
                },
                "format": {
                    "type": "string",
                    "enum": [
                        "select",
                        "checkbox"
                    ]
                },
                "$schema": {
                    "format": "uri",
                    "type": "string"
                },
                "id": {
                    "format": "uri",
                    "type": "string"
                },
                "title": {
                    "type": "string",
                    "propertyOrder": 1
                },
                "type": {
                    "options": {
                        "hidden": true
                    },
                    "type": "string",
                    "enum": [
                        "boolean"
                    ]
                },
                "description": {
                    "type": "string"
                }
            }
        },
        "object": {
            "required": [
                "type"
            ],
            "defaultProperties": [
                "type",
                "properties",
                "title"
            ],
            "additionalProperties": false,
            "title": "object type",
            "type": "object",
            "properties": {
                "$ref": {
                    "format": "uri",
                    "type": "string"
                },
                "default": {
                    "type": "object"
                },
                "format": {
                    "type": "string",
                    "enum": [
                        "grid"
                    ]
                },
                "required": {
                    "uniqueItems": true,
                    "format": "table",
                    "items": {
                        "title": "property",
                        "type": "string"
                    },
                    "type": "array"
                },
                "$schema": {
                    "format": "uri",
                    "type": "string"
                },
                "id": {
                    "format": "uri",
                    "type": "string"
                },
                "title": {
                    "type": "string",
                    "propertyOrder": 1
                },
                "type": {
                    "options": {
                        "hidden": true
                    },
                    "type": "string",
                    "enum": [
                        "object"
                    ]
                },
                "description": {
                    "type": "string"
                },
                "properties": {
                    "type": "object",
                    "patternProperties": {
                        ".*": {
                            "$ref": "#/definitions/propertySchema"
                        }
                    }
                }
            }
        },
        "number": {
            "required": [
                "type"
            ],
            "defaultProperties": [
                "type",
                "title"
            ],
            "additionalProperties": false,
            "title": "number type",
            "type": "object",
            "properties": {
                "$ref": {
                    "format": "uri",
                    "type": "string"
                },
                "maximum": {
                    "type": "number"
                },
                "default": {
                    "type": "number"
                },
                "minimum": {
                    "type": "number"
                },
                "$schema": {
                    "format": "uri",
                    "type": "string"
                },
                "id": {
                    "format": "uri",
                    "type": "string"
                },
                "title": {
                    "type": "string",
                    "propertyOrder": 1
                },
                "type": {
                    "options": {
                        "hidden": true
                    },
                    "type": "string",
                    "enum": [
                        "number"
                    ]
                },
                "enum": {
                    "format": "table",
                    "items": {
                        "title": "alternative",
                        "type": "number"
                    },
                    "type": "array"
                },
                "description": {
                    "type": "string"
                }
            }
        },
        "integer": {
            "required": [
                "type"
            ],
            "defaultProperties": [
                "type",
                "title"
            ],
            "additionalProperties": false,
            "title": "integer type",
            "type": "object",
            "properties": {
                "$ref": {
                    "format": "uri",
                    "type": "string"
                },
                "maximum": {
                    "type": "integer"
                },
                "default": {
                    "type": "integer"
                },
                "minimum": {
                    "type": "integer"
                },
                "$schema": {
                    "format": "uri",
                    "type": "string"
                },
                "id": {
                    "format": "uri",
                    "type": "string"
                },
                "title": {
                    "type": "string",
                    "propertyOrder": 1
                },
                "type": {
                    "options": {
                        "hidden": true
                    },
                    "type": "string",
                    "enum": [
                        "integer"
                    ]
                },
                "enum": {
                    "format": "table",
                    "items": {
                        "title": "alternative",
                        "type": "integer"
                    },
                    "type": "array"
                },
                "description": {
                    "type": "string"
                }
            }
        },
        "propertySchema": {
            "default": {
                "type": "object"
            },
            "oneOf": [
                {
                    "required": [
                        "type"
                    ],
                    "defaultProperties": [
                        "type"
                    ],
                    "additionalProperties": false,
                    "title": "null type",
                    "type": "object",
                    "properties": {
                        "$ref": {
                            "format": "uri",
                            "type": "string"
                        },
                        "default": {
                            "type": "null"
                        },
                        "$schema": {
                            "format": "uri",
                            "type": "string"
                        },
                        "id": {
                            "format": "uri",
                            "type": "string"
                        },
                        "type": {
                            "options": {
                                "hidden": true
                            },
                            "type": "string",
                            "enum": [
                                "null"
                            ]
                        },
                        "description": {
                            "type": "string"
                        }
                    }
                },
                {
                    "required": [
                        "type"
                    ],
                    "defaultProperties": [
                        "type"
                    ],
                    "additionalProperties": false,
                    "title": "boolean type",
                    "type": "object",
                    "properties": {
                        "$ref": {
                            "format": "uri",
                            "type": "string"
                        },
                        "default": {
                            "type": "boolean"
                        },
                        "format": {
                            "type": "string",
                            "enum": [
                                "select",
                                "checkbox"
                            ]
                        },
                        "$schema": {
                            "format": "uri",
                            "type": "string"
                        },
                        "id": {
                            "format": "uri",
                            "type": "string"
                        },
                        "type": {
                            "options": {
                                "hidden": true
                            },
                            "type": "string",
                            "enum": [
                                "boolean"
                            ]
                        },
                        "description": {
                            "type": "string"
                        }
                    }
                },
                {
                    "required": [
                        "type"
                    ],
                    "defaultProperties": [
                        "type"
                    ],
                    "additionalProperties": false,
                    "title": "string type",
                    "type": "object",
                    "properties": {
                        "$ref": {
                            "format": "uri",
                            "type": "string"
                        },
                        "default": {
                            "type": "string"
                        },
                        "format": {
                            "type": "string",
                            "enum": [
                                "color",
                                "date",
                                "datetime",
                                "datetime-local",
                                "email",
                                "month",
                                "number",
                                "range",
                                "tel",
                                "text",
                                "textarea",
                                "time",
                                "url",
                                "week",
                                "json",
                                "sql",
                                "xml",
                                "yaml"
                            ]
                        },
                        "$schema": {
                            "format": "uri",
                            "type": "string"
                        },
                        "id": {
                            "format": "uri",
                            "type": "string"
                        },
                        "type": {
                            "options": {
                                "hidden": true
                            },
                            "type": "string",
                            "enum": [
                                "string"
                            ]
                        },
                        "enum": {
                            "format": "table",
                            "items": {
                                "title": "alternative",
                                "type": "string"
                            },
                            "type": "array"
                        },
                        "description": {
                            "type": "string"
                        }
                    }
                },
                {
                    "required": [
                        "type"
                    ],
                    "defaultProperties": [
                        "type"
                    ],
                    "additionalProperties": false,
                    "title": "integer type",
                    "type": "object",
                    "properties": {
                        "$ref": {
                            "format": "uri",
                            "type": "string"
                        },
                        "maximum": {
                            "type": "integer"
                        },
                        "default": {
                            "type": "integer"
                        },
                        "minimum": {
                            "type": "integer"
                        },
                        "$schema": {
                            "format": "uri",
                            "type": "string"
                        },
                        "id": {
                            "format": "uri",
                            "type": "string"
                        },
                        "type": {
                            "options": {
                                "hidden": true
                            },
                            "type": "string",
                            "enum": [
                                "integer"
                            ]
                        },
                        "enum": {
                            "format": "table",
                            "items": {
                                "title": "alternative",
                                "type": "integer"
                            },
                            "type": "array"
                        },
                        "description": {
                            "type": "string"
                        }
                    }
                },
                {
                    "required": [
                        "type"
                    ],
                    "defaultProperties": [
                        "type"
                    ],
                    "additionalProperties": false,
                    "title": "number type",
                    "type": "object",
                    "properties": {
                        "$ref": {
                            "format": "uri",
                            "type": "string"
                        },
                        "maximum": {
                            "type": "number"
                        },
                        "default": {
                            "type": "number"
                        },
                        "minimum": {
                            "type": "number"
                        },
                        "$schema": {
                            "format": "uri",
                            "type": "string"
                        },
                        "id": {
                            "format": "uri",
                            "type": "string"
                        },
                        "type": {
                            "options": {
                                "hidden": true
                            },
                            "type": "string",
                            "enum": [
                                "number"
                            ]
                        },
                        "enum": {
                            "format": "table",
                            "items": {
                                "title": "alternative",
                                "type": "number"
                            },
                            "type": "array"
                        },
                        "description": {
                            "type": "string"
                        }
                    }
                },
                {
                    "required": [
                        "type"
                    ],
                    "defaultProperties": [
                        "type",
                        "properties"
                    ],
                    "additionalProperties": false,
                    "title": "object type",
                    "type": "object",
                    "properties": {
                        "$ref": {
                            "format": "uri",
                            "type": "string"
                        },
                        "default": {
                            "type": "object"
                        },
                        "format": {
                            "type": "string",
                            "enum": [
                                "grid"
                            ]
                        },
                        "required": {
                            "uniqueItems": true,
                            "format": "table",
                            "items": {
                                "title": "property",
                                "type": "string"
                            },
                            "type": "array"
                        },
                        "$schema": {
                            "format": "uri",
                            "type": "string"
                        },
                        "id": {
                            "format": "uri",
                            "type": "string"
                        },
                        "type": {
                            "options": {
                                "hidden": true
                            },
                            "type": "string",
                            "enum": [
                                "object"
                            ]
                        },
                        "description": {
                            "type": "string"
                        },
                        "properties": {
                            "type": "object",
                            "patternProperties": {
                                ".*": {
                                    "$ref": "#/definitions/propertySchema"
                                }
                            }
                        }
                    }
                },
                {
                    "required": [
                        "type"
                    ],
                    "defaultProperties": [
                        "type",
                        "items"
                    ],
                    "additionalProperties": false,
                    "title": "array type",
                    "type": "object",
                    "properties": {
                        "$ref": {
                            "format": "uri",
                            "type": "string"
                        },
                        "default": {
                            "type": "array"
                        },
                        "format": {
                            "default": "table",
                            "type": "string",
                            "enum": [
                                "array",
                                "table",
                                "tabs",
                                "tabs-top",
                                "checkbox",
                                "select",
                                "categories"
                            ]
                        },
                        "items": {
                            "$ref": "#/definitions/schema"
                        },
                        "$schema": {
                            "format": "uri",
                            "type": "string"
                        },
                        "id": {
                            "format": "uri",
                            "type": "string"
                        },
                        "type": {
                            "options": {
                                "hidden": true
                            },
                            "type": "string",
                            "enum": [
                                "array"
                            ]
                        },
                        "description": {
                            "type": "string"
                        }
                    }
                }
            ],
            "options": {
                "keep_oneof_values": false
            },
            "type": "object"
        }
    }
}
`;

// Setup the ACE editor
var metaSchema = ace.edit('meta-schema');
metaSchema.setTheme('ace/theme/monokai');
metaSchema.session.setMode('ace/mode/json');

// Set JSONEditor options
JSONEditor.defaults.options.iconlib = "fontawesome5";
JSONEditor.defaults.options.theme   = 'bootstrap4';

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

// -------------------------------------------------------------------------

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

// -------------------------------------------------------------------------


var schemaEditor = new SaveEditor('schema-editor', 'Save Schema as File', 'schema.json');
var editorPreview = new Editor('editor-preview');

function reloadEditors() {
    try {
        var newMetaSchema = JSON.parse(window.metaSchema.getValue());

        window.schemaEditor.updateSchema(newMetaSchema);
        window.editorPreview.destroy();

        // Make the editorPreview update in real time when the schemaEditor changes
        window.schemaEditor.jsonEditor.on('change', function() {
            // Update Preview Editor to use the new schema
            var errors = window.schemaEditor.validate();
            if(errors.length) {
                alert('Invalid schema');
            } else {
                // Feed the schema we defined in the schema editor into the preview editor
                window.editorPreview.updateSchema(window.schemaEditor.getJSON());
            }
        });

    } catch(err) {
        alert('Invalid json schema');
        console.log(err);
    }
}

function updateMetaSchema() {
    reloadEditors();
}


function updateBooleanOptions() {
    var options = document.getElementById('boolean-options').children;
    for(var i = 0; i < options.length; i++) {
        JSONEditor.defaults.options[options[i].value] = options[i].selected;
    }
}

// Setup
document.getElementById('boolean-options').addEventListener('change', function () {
    // Update boolean options for JSONEditor
    updateBooleanOptions();
    reloadEditors();
});

document.getElementById('object-layout').addEventListener('change', function () {
    // Update object layout setting for JSONEditor
    JSONEditor.defaults.options.object_layout = this.value;
    reloadEditors();
});

// At startup use the json metaschema
metaSchema.setValue(jsonMetaSchema);
metaSchema.session.getSelection().clearSelection();
metaSchema.resize();

updateMetaSchema();

