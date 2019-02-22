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
            "type": "object",
            "properties": {
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
            "type": "object",
            "properties": {
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
        "array": {
            "required": [
                "type"
            ],
            "defaultProperties": [
                "type",
                "title",
                "items"
            ],
            "additionalProperties": false,
            "type": "object",
            "properties": {
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
            "type": "object",
            "properties": {
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
        "object": {
            "required": [
                "type"
            ],
            "defaultProperties": [
                "type",
                "title",
                "properties"
            ],
            "additionalProperties": false,
            "type": "object",
            "properties": {
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
                            "$ref": "#/definitions/schema"
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
            "type": "object",
            "properties": {
                "default": {
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
            "type": "object",
            "properties": {
                "default": {
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
                        "type": "integer"
                    },
                    "type": "array"
                },
                "description": {
                    "type": "string"
                }
            }
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

var metaEditor = {
    jsonEditor: null,
    element: document.getElementById('meta-schema-editor')
};

var previewEditor = {
    jsonEditor: null,
    element: document.getElementById('preview-editor')
};

// Recreate the editor to use the new schema
function invalidateEditor(editor) {
    if(editor.jsonEditor) {
        editor.jsonEditor.destroy();
        editor.jsonEditor = null;
    }
}

function updateEditor(editor, schema) {
    invalidateEditor(editor);
    editor.jsonEditor = new JSONEditor(editor.element, { schema: schema});
}


function updateMetaSchema() {
    try {
        var metaSchema = JSON.parse(window.metaSchema.getValue());
        updateEditor(window.metaEditor, metaSchema);
        invalidateEditor(window.previewEditor);
    } catch(err) {
        alert('Invalid json schema');
    }
}

function updatePreviewEditor() {
    var errors = window.metaEditor.jsonEditor.validate();
    if(errors.length) {
        alert('Invalid schema');
    } else {
        updateEditor(previewEditor, window.metaEditor.jsonEditor.getValue());
    }
}

// Setup
// At startup use the json metaschema
metaSchema.setValue(jsonMetaSchema);
updateMetaSchema();
