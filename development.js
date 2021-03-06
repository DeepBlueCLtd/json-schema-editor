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
                "maxLength": {
                    "type": "integer"
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
                "minLength": {
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
                "uniqueItems": {
                    "format": "checkbox",
                    "type": "boolean"
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
                "format": {
                    "type": "string",
                    "enum": [
                        "range",
                        "number"
                    ]
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
                {
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
                {
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
                        "maxLength": {
                            "type": "integer"
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
                        "minLength": {
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
                        "format": {
                            "type": "string",
                            "enum": [
                                "range",
                                "number"
                            ]
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
                {
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
                {
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
                {
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
                        "uniqueItems": {
                            "format": "checkbox",
                            "type": "boolean"
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

var schemaEditor = new SchemaEditor('schema-editor');
var editorPreview = new PreviewEditor('editor-preview');

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
                window.editorPreview.destroy();
                window.editorPreview.renderZone.innerHTML = '<p class="error-message">Invalid Schema.</p>';
            } else {
                window.editorPreview.renderZone.innerHTML = '';
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

