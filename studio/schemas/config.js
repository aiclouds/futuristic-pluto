export default {
    "type": "document",
    "name": "config",
    "title": "Config",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "baseURL",
            "title": "Base URL",
            "description": "Hostname (and path) to the root",
            "validation": null
        },
        {
            "type": "string",
            "name": "languageCode",
            "title": "Language Code \"en\"",
            "validation": null
        },
        {
            "type": "string",
            "name": "theme",
            "title": "Theme Name",
            "validation": null
        },
        {
            "type": "object",
            "name": "taxonomies",
            "title": "Taxonomies",
            "description": "Site Taxonomies",
            "validation": null,
            "fields": [
                {
                    "type": "string",
                    "name": "tag",
                    "title": "Tag",
                    "validation": null
                }
            ]
        },
        {
            "type": "object",
            "name": "permalinks",
            "title": "Permalinks",
            "description": "Site Permalinks",
            "validation": null,
            "fields": [
                {
                    "type": "string",
                    "name": "post",
                    "title": "Post",
                    "validation": null
                }
            ]
        },
        {
            "type": "object",
            "name": "params",
            "title": "Params",
            "description": "Site Parameters",
            "validation": null,
            "fields": [
                {
                    "type": "string",
                    "name": "description",
                    "title": "Description",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "contentBackgroundColor",
                    "title": "Content Background Color",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "contentTextColor",
                    "title": "Content text Color",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "contentLinkColor",
                    "title": "Content Link Color",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "contentLinkHoverColor",
                    "title": "Content Link Hover Color",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "navbarBackgroundColor",
                    "title": "Navbar Background Color",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "navbarLinkColor",
                    "title": "Navbar Link Color",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "navbarLinkHoverColor",
                    "title": "Navbar Link Hover Color",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "wrapperMaxWidth",
                    "title": "Wrapper Max Width",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "customDateFormat",
                    "title": "Custom Date Format",
                    "validation": null
                },
                {
                    "type": "boolean",
                    "name": "customCodeStyle",
                    "title": "Custom Code Style",
                    "validation": null
                },
                {
                    "type": "boolean",
                    "name": "customBlockquoteStyle",
                    "title": "Custom Block Quote Style",
                    "validation": null
                },
                {
                    "type": "boolean",
                    "name": "showPostSummary",
                    "title": "Show Post Summary",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "googleAnalytics",
                    "title": "Google Analytics Code",
                    "validation": null
                },
                {
                    "type": "boolean",
                    "name": "cookieConsent",
                    "title": "Cookie Consent",
                    "validation": null
                },
                {
                    "type": "boolean",
                    "name": "includeBootstrapJs",
                    "title": "Include BootstrapJs",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "faviconSafariPinnedTabColor",
                    "title": "Favicon Safari Pinned Tab Color",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "faviconMsApplicationTileColor",
                    "title": "Favicon Ms Application Tile Color",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "faviconThemeColor",
                    "title": "Favicon Theme Color",
                    "validation": null
                }
            ]
        },
        {
            "type": "object",
            "name": "menu",
            "title": "Site Menu",
            "validation": null,
            "fields": [
                {
                    "type": "array",
                    "name": "nav",
                    "title": "Nav Menu",
                    "validation": null,
                    "of": [
                        {
                            "type": "object",
                            "fields": [
                                {
                                    "type": "string",
                                    "name": "name",
                                    "title": "Menu Name",
                                    "validation": null
                                },
                                {
                                    "type": "string",
                                    "name": "url",
                                    "title": "Menu Link",
                                    "validation": null
                                },
                                {
                                    "type": "number",
                                    "name": "weight",
                                    "title": "Order Weight",
                                    "validation": Rule => Rule.integer()
                                }
                            ],
                            "title": ""
                        }
                    ]
                }
            ]
        },
        {
            "type": "string",
            "name": "stackbit_file_path",
            "title": "Config File Path",
            "description": "The file path of the file that stores this data",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "exampleSite/config.toml"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "data"
                ]
            }
        }
    ],
    "singleInstance": true
}