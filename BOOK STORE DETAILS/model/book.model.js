const mongoose = requrie('mongoose')

const bookschema = mongoose.Schema(
    {
        hema.org/draft-07/schema#",
        "type": "object",
        "title": "Basic Book Schema",
        "description": "Schema for representing basic book information",
        "properties": {
          "title": {
            "type": "string",
            "description": "The name of the book"
          },
          "publisher": {
            "type": "string",
            "description": "The name of the publisher"
          },
          "publication_date": {
            "type": "string",
            "format": "date",
            "description": "The publication date of the book in YYYY-MM-DD format"
          },
          "language": {
            "type": "string",
            "description": "The language of the book, typically in ISO 639-1 format",
            "example": "en"
          },
          "page_count": {
            "type": "integer",
            "description": "The number of pages in the book"
          },
          "availability": {
            "type": "boolean",
            "description": "Whether the book is currently available"
          }
        },
        "required": ["title", "publisher", "publication_date", "language", "page_count", "availability"],
        "additionalProperties": false
      }

)


  