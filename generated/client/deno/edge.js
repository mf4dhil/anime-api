const exports = {}
Object.defineProperty(exports, "__esModule", { value: true });

import {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  findSync
} from '.././runtime/edge-esm.js'

const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.12.0
 * Query Engine version: 659ef412370fa3b41cd7bf6e94587c1dfb7f67e7
 */
Prisma.prismaVersion = {
  client: "4.12.0",
  engine: "659ef412370fa3b41cd7bf6e94587c1dfb7f67e7"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


const dirname = '/'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.FilmScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  img: 'img',
  duration: 'duration',
  tipe: 'tipe',
  synopsis: 'synopsis',
  studioId: 'studioId'
});

exports.Prisma.GenreScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.StudioScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});


exports.Prisma.ModelName = makeEnum({
  Studio: 'Studio',
  Film: 'Film',
  Genre: 'Genre'
});

const compressedDMMF = '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='
const decompressedDMMF = decompressFromBase64(compressedDMMF)
// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(decompressedDMMF)
exports.Prisma.dmmf = JSON.parse(decompressedDMMF)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "D:\\fadhil\\deno-js\\oakjs\\web-film\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [
      "deno"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "..\\..\\.env",
    "schemaEnvPath": "..\\..\\.env"
  },
  "relativePath": "..\\..\\prisma",
  "clientVersion": "4.12.0",
  "engineVersion": "659ef412370fa3b41cd7bf6e94587c1dfb7f67e7",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "dataProxy": true
}
config.dirname = dirname
config.document = dmmf

config.inlineSchema = 'ZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAicG9zdGdyZXNxbCIKICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikKfQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgcHJldmlld0ZlYXR1cmVzID0gWyJkZW5vIl0KICBvdXRwdXQgICAgICAgICAgPSAiLi4vZ2VuZXJhdGVkL2NsaWVudCIKfQoKbW9kZWwgU3R1ZGlvIHsKICBpZCAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBuYW1lICAgICAgU3RyaW5nCiAgZmlsbXMgICAgIEZpbG1bXQogIGNyZWF0ZWRBdCBEYXRlVGltZSBAZGVmYXVsdChub3coKSkKfQoKbW9kZWwgRmlsbSB7CiAgaWQgICAgICAgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIHRpdGxlICAgIFN0cmluZwogIGltZyAgICAgIFN0cmluZwogIGR1cmF0aW9uIFN0cmluZwogIHRpcGUgICAgIFN0cmluZwogIHN5bm9wc2lzIFN0cmluZz8KICBzdHVkaW8gICBTdHVkaW8gIEByZWxhdGlvbihmaWVsZHM6IFtzdHVkaW9JZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgc3R1ZGlvSWQgSW50CiAgZ2VucmVzICAgR2VucmVbXQp9Cgptb2RlbCBHZW5yZSB7CiAgaWQgICAgSW50ICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgbmFtZSAgU3RyaW5nCiAgZmlsbXMgRmlsbVtdCn0K'
config.inlineSchemaHash = '1b952dd5ed487d1d4ae2f32237e3d5672781f56aa07cf0f3b8b5446486cd11c0'

config.inlineDatasources = {
  "db": {
    "url": {
      "fromEnvVar": "DATABASE_URL",
      "value": null
    }
  }
}

config.injectableEdgeEnv = {
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
}

config.edgeClientProtocol = "graphql";
if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)
export { exports as default, Prisma, PrismaClient }

