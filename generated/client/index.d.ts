
/**
 * Client
**/

import * as runtime from './runtime/data-proxy';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model Studio
 * 
 */
export type Studio = {
  id: number
  name: string
  createdAt: Date
}

/**
 * Model Film
 * 
 */
export type Film = {
  id: number
  title: string
  img: string
  duration: string
  tipe: string
  synopsis: string | null
  studioId: number
}

/**
 * Model Genre
 * 
 */
export type Genre = {
  id: number
  name: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Studios
 * const studios = await prisma.studio.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Studios
   * const studios = await prisma.studio.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.studio`: Exposes CRUD operations for the **Studio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Studios
    * const studios = await prisma.studio.findMany()
    * ```
    */
  get studio(): Prisma.StudioDelegate<GlobalReject>;

  /**
   * `prisma.film`: Exposes CRUD operations for the **Film** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Films
    * const films = await prisma.film.findMany()
    * ```
    */
  get film(): Prisma.FilmDelegate<GlobalReject>;

  /**
   * `prisma.genre`: Exposes CRUD operations for the **Genre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genre.findMany()
    * ```
    */
  get genre(): Prisma.GenreDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.12.0
   * Query Engine version: 659ef412370fa3b41cd7bf6e94587c1dfb7f67e7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Studio: 'Studio',
    Film: 'Film',
    Genre: 'Genre'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type StudioCountOutputType
   */


  export type StudioCountOutputType = {
    films: number
  }

  export type StudioCountOutputTypeSelect = {
    films?: boolean
  }

  export type StudioCountOutputTypeGetPayload<S extends boolean | null | undefined | StudioCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? StudioCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (StudioCountOutputTypeArgs)
    ? StudioCountOutputType 
    : S extends { select: any } & (StudioCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof StudioCountOutputType ? StudioCountOutputType[P] : never
  } 
      : StudioCountOutputType




  // Custom InputTypes

  /**
   * StudioCountOutputType without action
   */
  export type StudioCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the StudioCountOutputType
     */
    select?: StudioCountOutputTypeSelect | null
  }



  /**
   * Count Type FilmCountOutputType
   */


  export type FilmCountOutputType = {
    genres: number
  }

  export type FilmCountOutputTypeSelect = {
    genres?: boolean
  }

  export type FilmCountOutputTypeGetPayload<S extends boolean | null | undefined | FilmCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? FilmCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (FilmCountOutputTypeArgs)
    ? FilmCountOutputType 
    : S extends { select: any } & (FilmCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof FilmCountOutputType ? FilmCountOutputType[P] : never
  } 
      : FilmCountOutputType




  // Custom InputTypes

  /**
   * FilmCountOutputType without action
   */
  export type FilmCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the FilmCountOutputType
     */
    select?: FilmCountOutputTypeSelect | null
  }



  /**
   * Count Type GenreCountOutputType
   */


  export type GenreCountOutputType = {
    films: number
  }

  export type GenreCountOutputTypeSelect = {
    films?: boolean
  }

  export type GenreCountOutputTypeGetPayload<S extends boolean | null | undefined | GenreCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? GenreCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (GenreCountOutputTypeArgs)
    ? GenreCountOutputType 
    : S extends { select: any } & (GenreCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof GenreCountOutputType ? GenreCountOutputType[P] : never
  } 
      : GenreCountOutputType




  // Custom InputTypes

  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the GenreCountOutputType
     */
    select?: GenreCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Studio
   */


  export type AggregateStudio = {
    _count: StudioCountAggregateOutputType | null
    _avg: StudioAvgAggregateOutputType | null
    _sum: StudioSumAggregateOutputType | null
    _min: StudioMinAggregateOutputType | null
    _max: StudioMaxAggregateOutputType | null
  }

  export type StudioAvgAggregateOutputType = {
    id: number | null
  }

  export type StudioSumAggregateOutputType = {
    id: number | null
  }

  export type StudioMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type StudioMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type StudioCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type StudioAvgAggregateInputType = {
    id?: true
  }

  export type StudioSumAggregateInputType = {
    id?: true
  }

  export type StudioMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type StudioMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type StudioCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type StudioAggregateArgs = {
    /**
     * Filter which Studio to aggregate.
     */
    where?: StudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Studios to fetch.
     */
    orderBy?: Enumerable<StudioOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Studios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Studios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Studios
    **/
    _count?: true | StudioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudioMaxAggregateInputType
  }

  export type GetStudioAggregateType<T extends StudioAggregateArgs> = {
        [P in keyof T & keyof AggregateStudio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudio[P]>
      : GetScalarType<T[P], AggregateStudio[P]>
  }




  export type StudioGroupByArgs = {
    where?: StudioWhereInput
    orderBy?: Enumerable<StudioOrderByWithAggregationInput>
    by: StudioScalarFieldEnum[]
    having?: StudioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudioCountAggregateInputType | true
    _avg?: StudioAvgAggregateInputType
    _sum?: StudioSumAggregateInputType
    _min?: StudioMinAggregateInputType
    _max?: StudioMaxAggregateInputType
  }


  export type StudioGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    _count: StudioCountAggregateOutputType | null
    _avg: StudioAvgAggregateOutputType | null
    _sum: StudioSumAggregateOutputType | null
    _min: StudioMinAggregateOutputType | null
    _max: StudioMaxAggregateOutputType | null
  }

  type GetStudioGroupByPayload<T extends StudioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<StudioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudioGroupByOutputType[P]>
            : GetScalarType<T[P], StudioGroupByOutputType[P]>
        }
      >
    >


  export type StudioSelect = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    films?: boolean | Studio$filmsArgs
    _count?: boolean | StudioCountOutputTypeArgs
  }


  export type StudioInclude = {
    films?: boolean | Studio$filmsArgs
    _count?: boolean | StudioCountOutputTypeArgs
  }

  export type StudioGetPayload<S extends boolean | null | undefined | StudioArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Studio :
    S extends undefined ? never :
    S extends { include: any } & (StudioArgs | StudioFindManyArgs)
    ? Studio  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'films' ? Array < FilmGetPayload<S['include'][P]>>  :
        P extends '_count' ? StudioCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (StudioArgs | StudioFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'films' ? Array < FilmGetPayload<S['select'][P]>>  :
        P extends '_count' ? StudioCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Studio ? Studio[P] : never
  } 
      : Studio


  type StudioCountArgs = 
    Omit<StudioFindManyArgs, 'select' | 'include'> & {
      select?: StudioCountAggregateInputType | true
    }

  export interface StudioDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Studio that matches the filter.
     * @param {StudioFindUniqueArgs} args - Arguments to find a Studio
     * @example
     * // Get one Studio
     * const studio = await prisma.studio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StudioFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, StudioFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Studio'> extends True ? Prisma__StudioClient<StudioGetPayload<T>> : Prisma__StudioClient<StudioGetPayload<T> | null, null>

    /**
     * Find one Studio that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StudioFindUniqueOrThrowArgs} args - Arguments to find a Studio
     * @example
     * // Get one Studio
     * const studio = await prisma.studio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StudioFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, StudioFindUniqueOrThrowArgs>
    ): Prisma__StudioClient<StudioGetPayload<T>>

    /**
     * Find the first Studio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioFindFirstArgs} args - Arguments to find a Studio
     * @example
     * // Get one Studio
     * const studio = await prisma.studio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StudioFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, StudioFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Studio'> extends True ? Prisma__StudioClient<StudioGetPayload<T>> : Prisma__StudioClient<StudioGetPayload<T> | null, null>

    /**
     * Find the first Studio that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioFindFirstOrThrowArgs} args - Arguments to find a Studio
     * @example
     * // Get one Studio
     * const studio = await prisma.studio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StudioFindFirstOrThrowArgs>(
      args?: SelectSubset<T, StudioFindFirstOrThrowArgs>
    ): Prisma__StudioClient<StudioGetPayload<T>>

    /**
     * Find zero or more Studios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Studios
     * const studios = await prisma.studio.findMany()
     * 
     * // Get first 10 Studios
     * const studios = await prisma.studio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studioWithIdOnly = await prisma.studio.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StudioFindManyArgs>(
      args?: SelectSubset<T, StudioFindManyArgs>
    ): Prisma.PrismaPromise<Array<StudioGetPayload<T>>>

    /**
     * Create a Studio.
     * @param {StudioCreateArgs} args - Arguments to create a Studio.
     * @example
     * // Create one Studio
     * const Studio = await prisma.studio.create({
     *   data: {
     *     // ... data to create a Studio
     *   }
     * })
     * 
    **/
    create<T extends StudioCreateArgs>(
      args: SelectSubset<T, StudioCreateArgs>
    ): Prisma__StudioClient<StudioGetPayload<T>>

    /**
     * Create many Studios.
     *     @param {StudioCreateManyArgs} args - Arguments to create many Studios.
     *     @example
     *     // Create many Studios
     *     const studio = await prisma.studio.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StudioCreateManyArgs>(
      args?: SelectSubset<T, StudioCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Studio.
     * @param {StudioDeleteArgs} args - Arguments to delete one Studio.
     * @example
     * // Delete one Studio
     * const Studio = await prisma.studio.delete({
     *   where: {
     *     // ... filter to delete one Studio
     *   }
     * })
     * 
    **/
    delete<T extends StudioDeleteArgs>(
      args: SelectSubset<T, StudioDeleteArgs>
    ): Prisma__StudioClient<StudioGetPayload<T>>

    /**
     * Update one Studio.
     * @param {StudioUpdateArgs} args - Arguments to update one Studio.
     * @example
     * // Update one Studio
     * const studio = await prisma.studio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StudioUpdateArgs>(
      args: SelectSubset<T, StudioUpdateArgs>
    ): Prisma__StudioClient<StudioGetPayload<T>>

    /**
     * Delete zero or more Studios.
     * @param {StudioDeleteManyArgs} args - Arguments to filter Studios to delete.
     * @example
     * // Delete a few Studios
     * const { count } = await prisma.studio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StudioDeleteManyArgs>(
      args?: SelectSubset<T, StudioDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Studios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Studios
     * const studio = await prisma.studio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StudioUpdateManyArgs>(
      args: SelectSubset<T, StudioUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Studio.
     * @param {StudioUpsertArgs} args - Arguments to update or create a Studio.
     * @example
     * // Update or create a Studio
     * const studio = await prisma.studio.upsert({
     *   create: {
     *     // ... data to create a Studio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Studio we want to update
     *   }
     * })
    **/
    upsert<T extends StudioUpsertArgs>(
      args: SelectSubset<T, StudioUpsertArgs>
    ): Prisma__StudioClient<StudioGetPayload<T>>

    /**
     * Count the number of Studios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioCountArgs} args - Arguments to filter Studios to count.
     * @example
     * // Count the number of Studios
     * const count = await prisma.studio.count({
     *   where: {
     *     // ... the filter for the Studios we want to count
     *   }
     * })
    **/
    count<T extends StudioCountArgs>(
      args?: Subset<T, StudioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Studio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudioAggregateArgs>(args: Subset<T, StudioAggregateArgs>): Prisma.PrismaPromise<GetStudioAggregateType<T>>

    /**
     * Group by Studio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudioGroupByArgs['orderBy'] }
        : { orderBy?: StudioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Studio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__StudioClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    films<T extends Studio$filmsArgs= {}>(args?: Subset<T, Studio$filmsArgs>): Prisma.PrismaPromise<Array<FilmGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Studio base type for findUnique actions
   */
  export type StudioFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudioInclude | null
    /**
     * Filter, which Studio to fetch.
     */
    where: StudioWhereUniqueInput
  }

  /**
   * Studio findUnique
   */
  export interface StudioFindUniqueArgs extends StudioFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Studio findUniqueOrThrow
   */
  export type StudioFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudioInclude | null
    /**
     * Filter, which Studio to fetch.
     */
    where: StudioWhereUniqueInput
  }


  /**
   * Studio base type for findFirst actions
   */
  export type StudioFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudioInclude | null
    /**
     * Filter, which Studio to fetch.
     */
    where?: StudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Studios to fetch.
     */
    orderBy?: Enumerable<StudioOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Studios.
     */
    cursor?: StudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Studios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Studios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Studios.
     */
    distinct?: Enumerable<StudioScalarFieldEnum>
  }

  /**
   * Studio findFirst
   */
  export interface StudioFindFirstArgs extends StudioFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Studio findFirstOrThrow
   */
  export type StudioFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudioInclude | null
    /**
     * Filter, which Studio to fetch.
     */
    where?: StudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Studios to fetch.
     */
    orderBy?: Enumerable<StudioOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Studios.
     */
    cursor?: StudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Studios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Studios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Studios.
     */
    distinct?: Enumerable<StudioScalarFieldEnum>
  }


  /**
   * Studio findMany
   */
  export type StudioFindManyArgs = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudioInclude | null
    /**
     * Filter, which Studios to fetch.
     */
    where?: StudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Studios to fetch.
     */
    orderBy?: Enumerable<StudioOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Studios.
     */
    cursor?: StudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Studios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Studios.
     */
    skip?: number
    distinct?: Enumerable<StudioScalarFieldEnum>
  }


  /**
   * Studio create
   */
  export type StudioCreateArgs = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudioInclude | null
    /**
     * The data needed to create a Studio.
     */
    data: XOR<StudioCreateInput, StudioUncheckedCreateInput>
  }


  /**
   * Studio createMany
   */
  export type StudioCreateManyArgs = {
    /**
     * The data used to create many Studios.
     */
    data: Enumerable<StudioCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Studio update
   */
  export type StudioUpdateArgs = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudioInclude | null
    /**
     * The data needed to update a Studio.
     */
    data: XOR<StudioUpdateInput, StudioUncheckedUpdateInput>
    /**
     * Choose, which Studio to update.
     */
    where: StudioWhereUniqueInput
  }


  /**
   * Studio updateMany
   */
  export type StudioUpdateManyArgs = {
    /**
     * The data used to update Studios.
     */
    data: XOR<StudioUpdateManyMutationInput, StudioUncheckedUpdateManyInput>
    /**
     * Filter which Studios to update
     */
    where?: StudioWhereInput
  }


  /**
   * Studio upsert
   */
  export type StudioUpsertArgs = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudioInclude | null
    /**
     * The filter to search for the Studio to update in case it exists.
     */
    where: StudioWhereUniqueInput
    /**
     * In case the Studio found by the `where` argument doesn't exist, create a new Studio with this data.
     */
    create: XOR<StudioCreateInput, StudioUncheckedCreateInput>
    /**
     * In case the Studio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudioUpdateInput, StudioUncheckedUpdateInput>
  }


  /**
   * Studio delete
   */
  export type StudioDeleteArgs = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudioInclude | null
    /**
     * Filter which Studio to delete.
     */
    where: StudioWhereUniqueInput
  }


  /**
   * Studio deleteMany
   */
  export type StudioDeleteManyArgs = {
    /**
     * Filter which Studios to delete
     */
    where?: StudioWhereInput
  }


  /**
   * Studio.films
   */
  export type Studio$filmsArgs = {
    /**
     * Select specific fields to fetch from the Film
     */
    select?: FilmSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FilmInclude | null
    where?: FilmWhereInput
    orderBy?: Enumerable<FilmOrderByWithRelationInput>
    cursor?: FilmWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FilmScalarFieldEnum>
  }


  /**
   * Studio without action
   */
  export type StudioArgs = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudioInclude | null
  }



  /**
   * Model Film
   */


  export type AggregateFilm = {
    _count: FilmCountAggregateOutputType | null
    _avg: FilmAvgAggregateOutputType | null
    _sum: FilmSumAggregateOutputType | null
    _min: FilmMinAggregateOutputType | null
    _max: FilmMaxAggregateOutputType | null
  }

  export type FilmAvgAggregateOutputType = {
    id: number | null
    studioId: number | null
  }

  export type FilmSumAggregateOutputType = {
    id: number | null
    studioId: number | null
  }

  export type FilmMinAggregateOutputType = {
    id: number | null
    title: string | null
    img: string | null
    duration: string | null
    tipe: string | null
    synopsis: string | null
    studioId: number | null
  }

  export type FilmMaxAggregateOutputType = {
    id: number | null
    title: string | null
    img: string | null
    duration: string | null
    tipe: string | null
    synopsis: string | null
    studioId: number | null
  }

  export type FilmCountAggregateOutputType = {
    id: number
    title: number
    img: number
    duration: number
    tipe: number
    synopsis: number
    studioId: number
    _all: number
  }


  export type FilmAvgAggregateInputType = {
    id?: true
    studioId?: true
  }

  export type FilmSumAggregateInputType = {
    id?: true
    studioId?: true
  }

  export type FilmMinAggregateInputType = {
    id?: true
    title?: true
    img?: true
    duration?: true
    tipe?: true
    synopsis?: true
    studioId?: true
  }

  export type FilmMaxAggregateInputType = {
    id?: true
    title?: true
    img?: true
    duration?: true
    tipe?: true
    synopsis?: true
    studioId?: true
  }

  export type FilmCountAggregateInputType = {
    id?: true
    title?: true
    img?: true
    duration?: true
    tipe?: true
    synopsis?: true
    studioId?: true
    _all?: true
  }

  export type FilmAggregateArgs = {
    /**
     * Filter which Film to aggregate.
     */
    where?: FilmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Films to fetch.
     */
    orderBy?: Enumerable<FilmOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FilmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Films from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Films.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Films
    **/
    _count?: true | FilmCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FilmAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FilmSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FilmMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FilmMaxAggregateInputType
  }

  export type GetFilmAggregateType<T extends FilmAggregateArgs> = {
        [P in keyof T & keyof AggregateFilm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFilm[P]>
      : GetScalarType<T[P], AggregateFilm[P]>
  }




  export type FilmGroupByArgs = {
    where?: FilmWhereInput
    orderBy?: Enumerable<FilmOrderByWithAggregationInput>
    by: FilmScalarFieldEnum[]
    having?: FilmScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FilmCountAggregateInputType | true
    _avg?: FilmAvgAggregateInputType
    _sum?: FilmSumAggregateInputType
    _min?: FilmMinAggregateInputType
    _max?: FilmMaxAggregateInputType
  }


  export type FilmGroupByOutputType = {
    id: number
    title: string
    img: string
    duration: string
    tipe: string
    synopsis: string | null
    studioId: number
    _count: FilmCountAggregateOutputType | null
    _avg: FilmAvgAggregateOutputType | null
    _sum: FilmSumAggregateOutputType | null
    _min: FilmMinAggregateOutputType | null
    _max: FilmMaxAggregateOutputType | null
  }

  type GetFilmGroupByPayload<T extends FilmGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<FilmGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FilmGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FilmGroupByOutputType[P]>
            : GetScalarType<T[P], FilmGroupByOutputType[P]>
        }
      >
    >


  export type FilmSelect = {
    id?: boolean
    title?: boolean
    img?: boolean
    duration?: boolean
    tipe?: boolean
    synopsis?: boolean
    studioId?: boolean
    studio?: boolean | StudioArgs
    genres?: boolean | Film$genresArgs
    _count?: boolean | FilmCountOutputTypeArgs
  }


  export type FilmInclude = {
    studio?: boolean | StudioArgs
    genres?: boolean | Film$genresArgs
    _count?: boolean | FilmCountOutputTypeArgs
  }

  export type FilmGetPayload<S extends boolean | null | undefined | FilmArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Film :
    S extends undefined ? never :
    S extends { include: any } & (FilmArgs | FilmFindManyArgs)
    ? Film  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'studio' ? StudioGetPayload<S['include'][P]> :
        P extends 'genres' ? Array < GenreGetPayload<S['include'][P]>>  :
        P extends '_count' ? FilmCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (FilmArgs | FilmFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'studio' ? StudioGetPayload<S['select'][P]> :
        P extends 'genres' ? Array < GenreGetPayload<S['select'][P]>>  :
        P extends '_count' ? FilmCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Film ? Film[P] : never
  } 
      : Film


  type FilmCountArgs = 
    Omit<FilmFindManyArgs, 'select' | 'include'> & {
      select?: FilmCountAggregateInputType | true
    }

  export interface FilmDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Film that matches the filter.
     * @param {FilmFindUniqueArgs} args - Arguments to find a Film
     * @example
     * // Get one Film
     * const film = await prisma.film.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FilmFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FilmFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Film'> extends True ? Prisma__FilmClient<FilmGetPayload<T>> : Prisma__FilmClient<FilmGetPayload<T> | null, null>

    /**
     * Find one Film that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FilmFindUniqueOrThrowArgs} args - Arguments to find a Film
     * @example
     * // Get one Film
     * const film = await prisma.film.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FilmFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, FilmFindUniqueOrThrowArgs>
    ): Prisma__FilmClient<FilmGetPayload<T>>

    /**
     * Find the first Film that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmFindFirstArgs} args - Arguments to find a Film
     * @example
     * // Get one Film
     * const film = await prisma.film.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FilmFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FilmFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Film'> extends True ? Prisma__FilmClient<FilmGetPayload<T>> : Prisma__FilmClient<FilmGetPayload<T> | null, null>

    /**
     * Find the first Film that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmFindFirstOrThrowArgs} args - Arguments to find a Film
     * @example
     * // Get one Film
     * const film = await prisma.film.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FilmFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FilmFindFirstOrThrowArgs>
    ): Prisma__FilmClient<FilmGetPayload<T>>

    /**
     * Find zero or more Films that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Films
     * const films = await prisma.film.findMany()
     * 
     * // Get first 10 Films
     * const films = await prisma.film.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const filmWithIdOnly = await prisma.film.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FilmFindManyArgs>(
      args?: SelectSubset<T, FilmFindManyArgs>
    ): Prisma.PrismaPromise<Array<FilmGetPayload<T>>>

    /**
     * Create a Film.
     * @param {FilmCreateArgs} args - Arguments to create a Film.
     * @example
     * // Create one Film
     * const Film = await prisma.film.create({
     *   data: {
     *     // ... data to create a Film
     *   }
     * })
     * 
    **/
    create<T extends FilmCreateArgs>(
      args: SelectSubset<T, FilmCreateArgs>
    ): Prisma__FilmClient<FilmGetPayload<T>>

    /**
     * Create many Films.
     *     @param {FilmCreateManyArgs} args - Arguments to create many Films.
     *     @example
     *     // Create many Films
     *     const film = await prisma.film.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FilmCreateManyArgs>(
      args?: SelectSubset<T, FilmCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Film.
     * @param {FilmDeleteArgs} args - Arguments to delete one Film.
     * @example
     * // Delete one Film
     * const Film = await prisma.film.delete({
     *   where: {
     *     // ... filter to delete one Film
     *   }
     * })
     * 
    **/
    delete<T extends FilmDeleteArgs>(
      args: SelectSubset<T, FilmDeleteArgs>
    ): Prisma__FilmClient<FilmGetPayload<T>>

    /**
     * Update one Film.
     * @param {FilmUpdateArgs} args - Arguments to update one Film.
     * @example
     * // Update one Film
     * const film = await prisma.film.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FilmUpdateArgs>(
      args: SelectSubset<T, FilmUpdateArgs>
    ): Prisma__FilmClient<FilmGetPayload<T>>

    /**
     * Delete zero or more Films.
     * @param {FilmDeleteManyArgs} args - Arguments to filter Films to delete.
     * @example
     * // Delete a few Films
     * const { count } = await prisma.film.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FilmDeleteManyArgs>(
      args?: SelectSubset<T, FilmDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Films.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Films
     * const film = await prisma.film.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FilmUpdateManyArgs>(
      args: SelectSubset<T, FilmUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Film.
     * @param {FilmUpsertArgs} args - Arguments to update or create a Film.
     * @example
     * // Update or create a Film
     * const film = await prisma.film.upsert({
     *   create: {
     *     // ... data to create a Film
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Film we want to update
     *   }
     * })
    **/
    upsert<T extends FilmUpsertArgs>(
      args: SelectSubset<T, FilmUpsertArgs>
    ): Prisma__FilmClient<FilmGetPayload<T>>

    /**
     * Count the number of Films.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmCountArgs} args - Arguments to filter Films to count.
     * @example
     * // Count the number of Films
     * const count = await prisma.film.count({
     *   where: {
     *     // ... the filter for the Films we want to count
     *   }
     * })
    **/
    count<T extends FilmCountArgs>(
      args?: Subset<T, FilmCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FilmCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Film.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FilmAggregateArgs>(args: Subset<T, FilmAggregateArgs>): Prisma.PrismaPromise<GetFilmAggregateType<T>>

    /**
     * Group by Film.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FilmGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FilmGroupByArgs['orderBy'] }
        : { orderBy?: FilmGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FilmGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilmGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Film.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FilmClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    studio<T extends StudioArgs= {}>(args?: Subset<T, StudioArgs>): Prisma__StudioClient<StudioGetPayload<T> | Null>;

    genres<T extends Film$genresArgs= {}>(args?: Subset<T, Film$genresArgs>): Prisma.PrismaPromise<Array<GenreGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Film base type for findUnique actions
   */
  export type FilmFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Film
     */
    select?: FilmSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FilmInclude | null
    /**
     * Filter, which Film to fetch.
     */
    where: FilmWhereUniqueInput
  }

  /**
   * Film findUnique
   */
  export interface FilmFindUniqueArgs extends FilmFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Film findUniqueOrThrow
   */
  export type FilmFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Film
     */
    select?: FilmSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FilmInclude | null
    /**
     * Filter, which Film to fetch.
     */
    where: FilmWhereUniqueInput
  }


  /**
   * Film base type for findFirst actions
   */
  export type FilmFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Film
     */
    select?: FilmSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FilmInclude | null
    /**
     * Filter, which Film to fetch.
     */
    where?: FilmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Films to fetch.
     */
    orderBy?: Enumerable<FilmOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Films.
     */
    cursor?: FilmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Films from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Films.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Films.
     */
    distinct?: Enumerable<FilmScalarFieldEnum>
  }

  /**
   * Film findFirst
   */
  export interface FilmFindFirstArgs extends FilmFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Film findFirstOrThrow
   */
  export type FilmFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Film
     */
    select?: FilmSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FilmInclude | null
    /**
     * Filter, which Film to fetch.
     */
    where?: FilmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Films to fetch.
     */
    orderBy?: Enumerable<FilmOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Films.
     */
    cursor?: FilmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Films from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Films.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Films.
     */
    distinct?: Enumerable<FilmScalarFieldEnum>
  }


  /**
   * Film findMany
   */
  export type FilmFindManyArgs = {
    /**
     * Select specific fields to fetch from the Film
     */
    select?: FilmSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FilmInclude | null
    /**
     * Filter, which Films to fetch.
     */
    where?: FilmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Films to fetch.
     */
    orderBy?: Enumerable<FilmOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Films.
     */
    cursor?: FilmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Films from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Films.
     */
    skip?: number
    distinct?: Enumerable<FilmScalarFieldEnum>
  }


  /**
   * Film create
   */
  export type FilmCreateArgs = {
    /**
     * Select specific fields to fetch from the Film
     */
    select?: FilmSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FilmInclude | null
    /**
     * The data needed to create a Film.
     */
    data: XOR<FilmCreateInput, FilmUncheckedCreateInput>
  }


  /**
   * Film createMany
   */
  export type FilmCreateManyArgs = {
    /**
     * The data used to create many Films.
     */
    data: Enumerable<FilmCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Film update
   */
  export type FilmUpdateArgs = {
    /**
     * Select specific fields to fetch from the Film
     */
    select?: FilmSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FilmInclude | null
    /**
     * The data needed to update a Film.
     */
    data: XOR<FilmUpdateInput, FilmUncheckedUpdateInput>
    /**
     * Choose, which Film to update.
     */
    where: FilmWhereUniqueInput
  }


  /**
   * Film updateMany
   */
  export type FilmUpdateManyArgs = {
    /**
     * The data used to update Films.
     */
    data: XOR<FilmUpdateManyMutationInput, FilmUncheckedUpdateManyInput>
    /**
     * Filter which Films to update
     */
    where?: FilmWhereInput
  }


  /**
   * Film upsert
   */
  export type FilmUpsertArgs = {
    /**
     * Select specific fields to fetch from the Film
     */
    select?: FilmSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FilmInclude | null
    /**
     * The filter to search for the Film to update in case it exists.
     */
    where: FilmWhereUniqueInput
    /**
     * In case the Film found by the `where` argument doesn't exist, create a new Film with this data.
     */
    create: XOR<FilmCreateInput, FilmUncheckedCreateInput>
    /**
     * In case the Film was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FilmUpdateInput, FilmUncheckedUpdateInput>
  }


  /**
   * Film delete
   */
  export type FilmDeleteArgs = {
    /**
     * Select specific fields to fetch from the Film
     */
    select?: FilmSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FilmInclude | null
    /**
     * Filter which Film to delete.
     */
    where: FilmWhereUniqueInput
  }


  /**
   * Film deleteMany
   */
  export type FilmDeleteManyArgs = {
    /**
     * Filter which Films to delete
     */
    where?: FilmWhereInput
  }


  /**
   * Film.genres
   */
  export type Film$genresArgs = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude | null
    where?: GenreWhereInput
    orderBy?: Enumerable<GenreOrderByWithRelationInput>
    cursor?: GenreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<GenreScalarFieldEnum>
  }


  /**
   * Film without action
   */
  export type FilmArgs = {
    /**
     * Select specific fields to fetch from the Film
     */
    select?: FilmSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FilmInclude | null
  }



  /**
   * Model Genre
   */


  export type AggregateGenre = {
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  export type GenreAvgAggregateOutputType = {
    id: number | null
  }

  export type GenreSumAggregateOutputType = {
    id: number | null
  }

  export type GenreMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GenreMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GenreCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type GenreAvgAggregateInputType = {
    id?: true
  }

  export type GenreSumAggregateInputType = {
    id?: true
  }

  export type GenreMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type GenreMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type GenreCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type GenreAggregateArgs = {
    /**
     * Filter which Genre to aggregate.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: Enumerable<GenreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genres
    **/
    _count?: true | GenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenreMaxAggregateInputType
  }

  export type GetGenreAggregateType<T extends GenreAggregateArgs> = {
        [P in keyof T & keyof AggregateGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenre[P]>
      : GetScalarType<T[P], AggregateGenre[P]>
  }




  export type GenreGroupByArgs = {
    where?: GenreWhereInput
    orderBy?: Enumerable<GenreOrderByWithAggregationInput>
    by: GenreScalarFieldEnum[]
    having?: GenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenreCountAggregateInputType | true
    _avg?: GenreAvgAggregateInputType
    _sum?: GenreSumAggregateInputType
    _min?: GenreMinAggregateInputType
    _max?: GenreMaxAggregateInputType
  }


  export type GenreGroupByOutputType = {
    id: number
    name: string
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  type GetGenreGroupByPayload<T extends GenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<GenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenreGroupByOutputType[P]>
            : GetScalarType<T[P], GenreGroupByOutputType[P]>
        }
      >
    >


  export type GenreSelect = {
    id?: boolean
    name?: boolean
    films?: boolean | Genre$filmsArgs
    _count?: boolean | GenreCountOutputTypeArgs
  }


  export type GenreInclude = {
    films?: boolean | Genre$filmsArgs
    _count?: boolean | GenreCountOutputTypeArgs
  }

  export type GenreGetPayload<S extends boolean | null | undefined | GenreArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Genre :
    S extends undefined ? never :
    S extends { include: any } & (GenreArgs | GenreFindManyArgs)
    ? Genre  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'films' ? Array < FilmGetPayload<S['include'][P]>>  :
        P extends '_count' ? GenreCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (GenreArgs | GenreFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'films' ? Array < FilmGetPayload<S['select'][P]>>  :
        P extends '_count' ? GenreCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Genre ? Genre[P] : never
  } 
      : Genre


  type GenreCountArgs = 
    Omit<GenreFindManyArgs, 'select' | 'include'> & {
      select?: GenreCountAggregateInputType | true
    }

  export interface GenreDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Genre that matches the filter.
     * @param {GenreFindUniqueArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GenreFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GenreFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Genre'> extends True ? Prisma__GenreClient<GenreGetPayload<T>> : Prisma__GenreClient<GenreGetPayload<T> | null, null>

    /**
     * Find one Genre that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GenreFindUniqueOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GenreFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, GenreFindUniqueOrThrowArgs>
    ): Prisma__GenreClient<GenreGetPayload<T>>

    /**
     * Find the first Genre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GenreFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GenreFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Genre'> extends True ? Prisma__GenreClient<GenreGetPayload<T>> : Prisma__GenreClient<GenreGetPayload<T> | null, null>

    /**
     * Find the first Genre that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GenreFindFirstOrThrowArgs>(
      args?: SelectSubset<T, GenreFindFirstOrThrowArgs>
    ): Prisma__GenreClient<GenreGetPayload<T>>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genre.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genreWithIdOnly = await prisma.genre.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GenreFindManyArgs>(
      args?: SelectSubset<T, GenreFindManyArgs>
    ): Prisma.PrismaPromise<Array<GenreGetPayload<T>>>

    /**
     * Create a Genre.
     * @param {GenreCreateArgs} args - Arguments to create a Genre.
     * @example
     * // Create one Genre
     * const Genre = await prisma.genre.create({
     *   data: {
     *     // ... data to create a Genre
     *   }
     * })
     * 
    **/
    create<T extends GenreCreateArgs>(
      args: SelectSubset<T, GenreCreateArgs>
    ): Prisma__GenreClient<GenreGetPayload<T>>

    /**
     * Create many Genres.
     *     @param {GenreCreateManyArgs} args - Arguments to create many Genres.
     *     @example
     *     // Create many Genres
     *     const genre = await prisma.genre.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GenreCreateManyArgs>(
      args?: SelectSubset<T, GenreCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Genre.
     * @param {GenreDeleteArgs} args - Arguments to delete one Genre.
     * @example
     * // Delete one Genre
     * const Genre = await prisma.genre.delete({
     *   where: {
     *     // ... filter to delete one Genre
     *   }
     * })
     * 
    **/
    delete<T extends GenreDeleteArgs>(
      args: SelectSubset<T, GenreDeleteArgs>
    ): Prisma__GenreClient<GenreGetPayload<T>>

    /**
     * Update one Genre.
     * @param {GenreUpdateArgs} args - Arguments to update one Genre.
     * @example
     * // Update one Genre
     * const genre = await prisma.genre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GenreUpdateArgs>(
      args: SelectSubset<T, GenreUpdateArgs>
    ): Prisma__GenreClient<GenreGetPayload<T>>

    /**
     * Delete zero or more Genres.
     * @param {GenreDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GenreDeleteManyArgs>(
      args?: SelectSubset<T, GenreDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GenreUpdateManyArgs>(
      args: SelectSubset<T, GenreUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Genre.
     * @param {GenreUpsertArgs} args - Arguments to update or create a Genre.
     * @example
     * // Update or create a Genre
     * const genre = await prisma.genre.upsert({
     *   create: {
     *     // ... data to create a Genre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genre we want to update
     *   }
     * })
    **/
    upsert<T extends GenreUpsertArgs>(
      args: SelectSubset<T, GenreUpsertArgs>
    ): Prisma__GenreClient<GenreGetPayload<T>>

    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genre.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends GenreCountArgs>(
      args?: Subset<T, GenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GenreAggregateArgs>(args: Subset<T, GenreAggregateArgs>): Prisma.PrismaPromise<GetGenreAggregateType<T>>

    /**
     * Group by Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenreGroupByArgs['orderBy'] }
        : { orderBy?: GenreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Genre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GenreClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    films<T extends Genre$filmsArgs= {}>(args?: Subset<T, Genre$filmsArgs>): Prisma.PrismaPromise<Array<FilmGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Genre base type for findUnique actions
   */
  export type GenreFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findUnique
   */
  export interface GenreFindUniqueArgs extends GenreFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Genre findUniqueOrThrow
   */
  export type GenreFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }


  /**
   * Genre base type for findFirst actions
   */
  export type GenreFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: Enumerable<GenreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: Enumerable<GenreScalarFieldEnum>
  }

  /**
   * Genre findFirst
   */
  export interface GenreFindFirstArgs extends GenreFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Genre findFirstOrThrow
   */
  export type GenreFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: Enumerable<GenreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: Enumerable<GenreScalarFieldEnum>
  }


  /**
   * Genre findMany
   */
  export type GenreFindManyArgs = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: Enumerable<GenreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    distinct?: Enumerable<GenreScalarFieldEnum>
  }


  /**
   * Genre create
   */
  export type GenreCreateArgs = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude | null
    /**
     * The data needed to create a Genre.
     */
    data: XOR<GenreCreateInput, GenreUncheckedCreateInput>
  }


  /**
   * Genre createMany
   */
  export type GenreCreateManyArgs = {
    /**
     * The data used to create many Genres.
     */
    data: Enumerable<GenreCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Genre update
   */
  export type GenreUpdateArgs = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude | null
    /**
     * The data needed to update a Genre.
     */
    data: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
    /**
     * Choose, which Genre to update.
     */
    where: GenreWhereUniqueInput
  }


  /**
   * Genre updateMany
   */
  export type GenreUpdateManyArgs = {
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
  }


  /**
   * Genre upsert
   */
  export type GenreUpsertArgs = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude | null
    /**
     * The filter to search for the Genre to update in case it exists.
     */
    where: GenreWhereUniqueInput
    /**
     * In case the Genre found by the `where` argument doesn't exist, create a new Genre with this data.
     */
    create: XOR<GenreCreateInput, GenreUncheckedCreateInput>
    /**
     * In case the Genre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
  }


  /**
   * Genre delete
   */
  export type GenreDeleteArgs = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude | null
    /**
     * Filter which Genre to delete.
     */
    where: GenreWhereUniqueInput
  }


  /**
   * Genre deleteMany
   */
  export type GenreDeleteManyArgs = {
    /**
     * Filter which Genres to delete
     */
    where?: GenreWhereInput
  }


  /**
   * Genre.films
   */
  export type Genre$filmsArgs = {
    /**
     * Select specific fields to fetch from the Film
     */
    select?: FilmSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FilmInclude | null
    where?: FilmWhereInput
    orderBy?: Enumerable<FilmOrderByWithRelationInput>
    cursor?: FilmWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FilmScalarFieldEnum>
  }


  /**
   * Genre without action
   */
  export type GenreArgs = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const FilmScalarFieldEnum: {
    id: 'id',
    title: 'title',
    img: 'img',
    duration: 'duration',
    tipe: 'tipe',
    synopsis: 'synopsis',
    studioId: 'studioId'
  };

  export type FilmScalarFieldEnum = (typeof FilmScalarFieldEnum)[keyof typeof FilmScalarFieldEnum]


  export const GenreScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type GenreScalarFieldEnum = (typeof GenreScalarFieldEnum)[keyof typeof GenreScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const StudioScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type StudioScalarFieldEnum = (typeof StudioScalarFieldEnum)[keyof typeof StudioScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type StudioWhereInput = {
    AND?: Enumerable<StudioWhereInput>
    OR?: Enumerable<StudioWhereInput>
    NOT?: Enumerable<StudioWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    films?: FilmListRelationFilter
  }

  export type StudioOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    films?: FilmOrderByRelationAggregateInput
  }

  export type StudioWhereUniqueInput = {
    id?: number
  }

  export type StudioOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: StudioCountOrderByAggregateInput
    _avg?: StudioAvgOrderByAggregateInput
    _max?: StudioMaxOrderByAggregateInput
    _min?: StudioMinOrderByAggregateInput
    _sum?: StudioSumOrderByAggregateInput
  }

  export type StudioScalarWhereWithAggregatesInput = {
    AND?: Enumerable<StudioScalarWhereWithAggregatesInput>
    OR?: Enumerable<StudioScalarWhereWithAggregatesInput>
    NOT?: Enumerable<StudioScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type FilmWhereInput = {
    AND?: Enumerable<FilmWhereInput>
    OR?: Enumerable<FilmWhereInput>
    NOT?: Enumerable<FilmWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    img?: StringFilter | string
    duration?: StringFilter | string
    tipe?: StringFilter | string
    synopsis?: StringNullableFilter | string | null
    studioId?: IntFilter | number
    studio?: XOR<StudioRelationFilter, StudioWhereInput>
    genres?: GenreListRelationFilter
  }

  export type FilmOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    img?: SortOrder
    duration?: SortOrder
    tipe?: SortOrder
    synopsis?: SortOrder
    studioId?: SortOrder
    studio?: StudioOrderByWithRelationInput
    genres?: GenreOrderByRelationAggregateInput
  }

  export type FilmWhereUniqueInput = {
    id?: number
  }

  export type FilmOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    img?: SortOrder
    duration?: SortOrder
    tipe?: SortOrder
    synopsis?: SortOrder
    studioId?: SortOrder
    _count?: FilmCountOrderByAggregateInput
    _avg?: FilmAvgOrderByAggregateInput
    _max?: FilmMaxOrderByAggregateInput
    _min?: FilmMinOrderByAggregateInput
    _sum?: FilmSumOrderByAggregateInput
  }

  export type FilmScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FilmScalarWhereWithAggregatesInput>
    OR?: Enumerable<FilmScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FilmScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    img?: StringWithAggregatesFilter | string
    duration?: StringWithAggregatesFilter | string
    tipe?: StringWithAggregatesFilter | string
    synopsis?: StringNullableWithAggregatesFilter | string | null
    studioId?: IntWithAggregatesFilter | number
  }

  export type GenreWhereInput = {
    AND?: Enumerable<GenreWhereInput>
    OR?: Enumerable<GenreWhereInput>
    NOT?: Enumerable<GenreWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    films?: FilmListRelationFilter
  }

  export type GenreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    films?: FilmOrderByRelationAggregateInput
  }

  export type GenreWhereUniqueInput = {
    id?: number
  }

  export type GenreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: GenreCountOrderByAggregateInput
    _avg?: GenreAvgOrderByAggregateInput
    _max?: GenreMaxOrderByAggregateInput
    _min?: GenreMinOrderByAggregateInput
    _sum?: GenreSumOrderByAggregateInput
  }

  export type GenreScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GenreScalarWhereWithAggregatesInput>
    OR?: Enumerable<GenreScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GenreScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
  }

  export type StudioCreateInput = {
    name: string
    createdAt?: Date | string
    films?: FilmCreateNestedManyWithoutStudioInput
  }

  export type StudioUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    films?: FilmUncheckedCreateNestedManyWithoutStudioInput
  }

  export type StudioUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    films?: FilmUpdateManyWithoutStudioNestedInput
  }

  export type StudioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    films?: FilmUncheckedUpdateManyWithoutStudioNestedInput
  }

  export type StudioCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
  }

  export type StudioUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FilmCreateInput = {
    title: string
    img: string
    duration: string
    tipe: string
    synopsis?: string | null
    studio: StudioCreateNestedOneWithoutFilmsInput
    genres?: GenreCreateNestedManyWithoutFilmsInput
  }

  export type FilmUncheckedCreateInput = {
    id?: number
    title: string
    img: string
    duration: string
    tipe: string
    synopsis?: string | null
    studioId: number
    genres?: GenreUncheckedCreateNestedManyWithoutFilmsInput
  }

  export type FilmUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    tipe?: StringFieldUpdateOperationsInput | string
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    studio?: StudioUpdateOneRequiredWithoutFilmsNestedInput
    genres?: GenreUpdateManyWithoutFilmsNestedInput
  }

  export type FilmUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    tipe?: StringFieldUpdateOperationsInput | string
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    studioId?: IntFieldUpdateOperationsInput | number
    genres?: GenreUncheckedUpdateManyWithoutFilmsNestedInput
  }

  export type FilmCreateManyInput = {
    id?: number
    title: string
    img: string
    duration: string
    tipe: string
    synopsis?: string | null
    studioId: number
  }

  export type FilmUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    tipe?: StringFieldUpdateOperationsInput | string
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FilmUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    tipe?: StringFieldUpdateOperationsInput | string
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    studioId?: IntFieldUpdateOperationsInput | number
  }

  export type GenreCreateInput = {
    name: string
    films?: FilmCreateNestedManyWithoutGenresInput
  }

  export type GenreUncheckedCreateInput = {
    id?: number
    name: string
    films?: FilmUncheckedCreateNestedManyWithoutGenresInput
  }

  export type GenreUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    films?: FilmUpdateManyWithoutGenresNestedInput
  }

  export type GenreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    films?: FilmUncheckedUpdateManyWithoutGenresNestedInput
  }

  export type GenreCreateManyInput = {
    id?: number
    name: string
  }

  export type GenreUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type FilmListRelationFilter = {
    every?: FilmWhereInput
    some?: FilmWhereInput
    none?: FilmWhereInput
  }

  export type FilmOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudioCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type StudioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StudioMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type StudioMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type StudioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type StudioRelationFilter = {
    is?: StudioWhereInput
    isNot?: StudioWhereInput
  }

  export type GenreListRelationFilter = {
    every?: GenreWhereInput
    some?: GenreWhereInput
    none?: GenreWhereInput
  }

  export type GenreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FilmCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    img?: SortOrder
    duration?: SortOrder
    tipe?: SortOrder
    synopsis?: SortOrder
    studioId?: SortOrder
  }

  export type FilmAvgOrderByAggregateInput = {
    id?: SortOrder
    studioId?: SortOrder
  }

  export type FilmMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    img?: SortOrder
    duration?: SortOrder
    tipe?: SortOrder
    synopsis?: SortOrder
    studioId?: SortOrder
  }

  export type FilmMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    img?: SortOrder
    duration?: SortOrder
    tipe?: SortOrder
    synopsis?: SortOrder
    studioId?: SortOrder
  }

  export type FilmSumOrderByAggregateInput = {
    id?: SortOrder
    studioId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type GenreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenreAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GenreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenreSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FilmCreateNestedManyWithoutStudioInput = {
    create?: XOR<Enumerable<FilmCreateWithoutStudioInput>, Enumerable<FilmUncheckedCreateWithoutStudioInput>>
    connectOrCreate?: Enumerable<FilmCreateOrConnectWithoutStudioInput>
    createMany?: FilmCreateManyStudioInputEnvelope
    connect?: Enumerable<FilmWhereUniqueInput>
  }

  export type FilmUncheckedCreateNestedManyWithoutStudioInput = {
    create?: XOR<Enumerable<FilmCreateWithoutStudioInput>, Enumerable<FilmUncheckedCreateWithoutStudioInput>>
    connectOrCreate?: Enumerable<FilmCreateOrConnectWithoutStudioInput>
    createMany?: FilmCreateManyStudioInputEnvelope
    connect?: Enumerable<FilmWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FilmUpdateManyWithoutStudioNestedInput = {
    create?: XOR<Enumerable<FilmCreateWithoutStudioInput>, Enumerable<FilmUncheckedCreateWithoutStudioInput>>
    connectOrCreate?: Enumerable<FilmCreateOrConnectWithoutStudioInput>
    upsert?: Enumerable<FilmUpsertWithWhereUniqueWithoutStudioInput>
    createMany?: FilmCreateManyStudioInputEnvelope
    set?: Enumerable<FilmWhereUniqueInput>
    disconnect?: Enumerable<FilmWhereUniqueInput>
    delete?: Enumerable<FilmWhereUniqueInput>
    connect?: Enumerable<FilmWhereUniqueInput>
    update?: Enumerable<FilmUpdateWithWhereUniqueWithoutStudioInput>
    updateMany?: Enumerable<FilmUpdateManyWithWhereWithoutStudioInput>
    deleteMany?: Enumerable<FilmScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FilmUncheckedUpdateManyWithoutStudioNestedInput = {
    create?: XOR<Enumerable<FilmCreateWithoutStudioInput>, Enumerable<FilmUncheckedCreateWithoutStudioInput>>
    connectOrCreate?: Enumerable<FilmCreateOrConnectWithoutStudioInput>
    upsert?: Enumerable<FilmUpsertWithWhereUniqueWithoutStudioInput>
    createMany?: FilmCreateManyStudioInputEnvelope
    set?: Enumerable<FilmWhereUniqueInput>
    disconnect?: Enumerable<FilmWhereUniqueInput>
    delete?: Enumerable<FilmWhereUniqueInput>
    connect?: Enumerable<FilmWhereUniqueInput>
    update?: Enumerable<FilmUpdateWithWhereUniqueWithoutStudioInput>
    updateMany?: Enumerable<FilmUpdateManyWithWhereWithoutStudioInput>
    deleteMany?: Enumerable<FilmScalarWhereInput>
  }

  export type StudioCreateNestedOneWithoutFilmsInput = {
    create?: XOR<StudioCreateWithoutFilmsInput, StudioUncheckedCreateWithoutFilmsInput>
    connectOrCreate?: StudioCreateOrConnectWithoutFilmsInput
    connect?: StudioWhereUniqueInput
  }

  export type GenreCreateNestedManyWithoutFilmsInput = {
    create?: XOR<Enumerable<GenreCreateWithoutFilmsInput>, Enumerable<GenreUncheckedCreateWithoutFilmsInput>>
    connectOrCreate?: Enumerable<GenreCreateOrConnectWithoutFilmsInput>
    connect?: Enumerable<GenreWhereUniqueInput>
  }

  export type GenreUncheckedCreateNestedManyWithoutFilmsInput = {
    create?: XOR<Enumerable<GenreCreateWithoutFilmsInput>, Enumerable<GenreUncheckedCreateWithoutFilmsInput>>
    connectOrCreate?: Enumerable<GenreCreateOrConnectWithoutFilmsInput>
    connect?: Enumerable<GenreWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StudioUpdateOneRequiredWithoutFilmsNestedInput = {
    create?: XOR<StudioCreateWithoutFilmsInput, StudioUncheckedCreateWithoutFilmsInput>
    connectOrCreate?: StudioCreateOrConnectWithoutFilmsInput
    upsert?: StudioUpsertWithoutFilmsInput
    connect?: StudioWhereUniqueInput
    update?: XOR<StudioUpdateWithoutFilmsInput, StudioUncheckedUpdateWithoutFilmsInput>
  }

  export type GenreUpdateManyWithoutFilmsNestedInput = {
    create?: XOR<Enumerable<GenreCreateWithoutFilmsInput>, Enumerable<GenreUncheckedCreateWithoutFilmsInput>>
    connectOrCreate?: Enumerable<GenreCreateOrConnectWithoutFilmsInput>
    upsert?: Enumerable<GenreUpsertWithWhereUniqueWithoutFilmsInput>
    set?: Enumerable<GenreWhereUniqueInput>
    disconnect?: Enumerable<GenreWhereUniqueInput>
    delete?: Enumerable<GenreWhereUniqueInput>
    connect?: Enumerable<GenreWhereUniqueInput>
    update?: Enumerable<GenreUpdateWithWhereUniqueWithoutFilmsInput>
    updateMany?: Enumerable<GenreUpdateManyWithWhereWithoutFilmsInput>
    deleteMany?: Enumerable<GenreScalarWhereInput>
  }

  export type GenreUncheckedUpdateManyWithoutFilmsNestedInput = {
    create?: XOR<Enumerable<GenreCreateWithoutFilmsInput>, Enumerable<GenreUncheckedCreateWithoutFilmsInput>>
    connectOrCreate?: Enumerable<GenreCreateOrConnectWithoutFilmsInput>
    upsert?: Enumerable<GenreUpsertWithWhereUniqueWithoutFilmsInput>
    set?: Enumerable<GenreWhereUniqueInput>
    disconnect?: Enumerable<GenreWhereUniqueInput>
    delete?: Enumerable<GenreWhereUniqueInput>
    connect?: Enumerable<GenreWhereUniqueInput>
    update?: Enumerable<GenreUpdateWithWhereUniqueWithoutFilmsInput>
    updateMany?: Enumerable<GenreUpdateManyWithWhereWithoutFilmsInput>
    deleteMany?: Enumerable<GenreScalarWhereInput>
  }

  export type FilmCreateNestedManyWithoutGenresInput = {
    create?: XOR<Enumerable<FilmCreateWithoutGenresInput>, Enumerable<FilmUncheckedCreateWithoutGenresInput>>
    connectOrCreate?: Enumerable<FilmCreateOrConnectWithoutGenresInput>
    connect?: Enumerable<FilmWhereUniqueInput>
  }

  export type FilmUncheckedCreateNestedManyWithoutGenresInput = {
    create?: XOR<Enumerable<FilmCreateWithoutGenresInput>, Enumerable<FilmUncheckedCreateWithoutGenresInput>>
    connectOrCreate?: Enumerable<FilmCreateOrConnectWithoutGenresInput>
    connect?: Enumerable<FilmWhereUniqueInput>
  }

  export type FilmUpdateManyWithoutGenresNestedInput = {
    create?: XOR<Enumerable<FilmCreateWithoutGenresInput>, Enumerable<FilmUncheckedCreateWithoutGenresInput>>
    connectOrCreate?: Enumerable<FilmCreateOrConnectWithoutGenresInput>
    upsert?: Enumerable<FilmUpsertWithWhereUniqueWithoutGenresInput>
    set?: Enumerable<FilmWhereUniqueInput>
    disconnect?: Enumerable<FilmWhereUniqueInput>
    delete?: Enumerable<FilmWhereUniqueInput>
    connect?: Enumerable<FilmWhereUniqueInput>
    update?: Enumerable<FilmUpdateWithWhereUniqueWithoutGenresInput>
    updateMany?: Enumerable<FilmUpdateManyWithWhereWithoutGenresInput>
    deleteMany?: Enumerable<FilmScalarWhereInput>
  }

  export type FilmUncheckedUpdateManyWithoutGenresNestedInput = {
    create?: XOR<Enumerable<FilmCreateWithoutGenresInput>, Enumerable<FilmUncheckedCreateWithoutGenresInput>>
    connectOrCreate?: Enumerable<FilmCreateOrConnectWithoutGenresInput>
    upsert?: Enumerable<FilmUpsertWithWhereUniqueWithoutGenresInput>
    set?: Enumerable<FilmWhereUniqueInput>
    disconnect?: Enumerable<FilmWhereUniqueInput>
    delete?: Enumerable<FilmWhereUniqueInput>
    connect?: Enumerable<FilmWhereUniqueInput>
    update?: Enumerable<FilmUpdateWithWhereUniqueWithoutGenresInput>
    updateMany?: Enumerable<FilmUpdateManyWithWhereWithoutGenresInput>
    deleteMany?: Enumerable<FilmScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type FilmCreateWithoutStudioInput = {
    title: string
    img: string
    duration: string
    tipe: string
    synopsis?: string | null
    genres?: GenreCreateNestedManyWithoutFilmsInput
  }

  export type FilmUncheckedCreateWithoutStudioInput = {
    id?: number
    title: string
    img: string
    duration: string
    tipe: string
    synopsis?: string | null
    genres?: GenreUncheckedCreateNestedManyWithoutFilmsInput
  }

  export type FilmCreateOrConnectWithoutStudioInput = {
    where: FilmWhereUniqueInput
    create: XOR<FilmCreateWithoutStudioInput, FilmUncheckedCreateWithoutStudioInput>
  }

  export type FilmCreateManyStudioInputEnvelope = {
    data: Enumerable<FilmCreateManyStudioInput>
    skipDuplicates?: boolean
  }

  export type FilmUpsertWithWhereUniqueWithoutStudioInput = {
    where: FilmWhereUniqueInput
    update: XOR<FilmUpdateWithoutStudioInput, FilmUncheckedUpdateWithoutStudioInput>
    create: XOR<FilmCreateWithoutStudioInput, FilmUncheckedCreateWithoutStudioInput>
  }

  export type FilmUpdateWithWhereUniqueWithoutStudioInput = {
    where: FilmWhereUniqueInput
    data: XOR<FilmUpdateWithoutStudioInput, FilmUncheckedUpdateWithoutStudioInput>
  }

  export type FilmUpdateManyWithWhereWithoutStudioInput = {
    where: FilmScalarWhereInput
    data: XOR<FilmUpdateManyMutationInput, FilmUncheckedUpdateManyWithoutFilmsInput>
  }

  export type FilmScalarWhereInput = {
    AND?: Enumerable<FilmScalarWhereInput>
    OR?: Enumerable<FilmScalarWhereInput>
    NOT?: Enumerable<FilmScalarWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    img?: StringFilter | string
    duration?: StringFilter | string
    tipe?: StringFilter | string
    synopsis?: StringNullableFilter | string | null
    studioId?: IntFilter | number
  }

  export type StudioCreateWithoutFilmsInput = {
    name: string
    createdAt?: Date | string
  }

  export type StudioUncheckedCreateWithoutFilmsInput = {
    id?: number
    name: string
    createdAt?: Date | string
  }

  export type StudioCreateOrConnectWithoutFilmsInput = {
    where: StudioWhereUniqueInput
    create: XOR<StudioCreateWithoutFilmsInput, StudioUncheckedCreateWithoutFilmsInput>
  }

  export type GenreCreateWithoutFilmsInput = {
    name: string
  }

  export type GenreUncheckedCreateWithoutFilmsInput = {
    id?: number
    name: string
  }

  export type GenreCreateOrConnectWithoutFilmsInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutFilmsInput, GenreUncheckedCreateWithoutFilmsInput>
  }

  export type StudioUpsertWithoutFilmsInput = {
    update: XOR<StudioUpdateWithoutFilmsInput, StudioUncheckedUpdateWithoutFilmsInput>
    create: XOR<StudioCreateWithoutFilmsInput, StudioUncheckedCreateWithoutFilmsInput>
  }

  export type StudioUpdateWithoutFilmsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudioUncheckedUpdateWithoutFilmsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenreUpsertWithWhereUniqueWithoutFilmsInput = {
    where: GenreWhereUniqueInput
    update: XOR<GenreUpdateWithoutFilmsInput, GenreUncheckedUpdateWithoutFilmsInput>
    create: XOR<GenreCreateWithoutFilmsInput, GenreUncheckedCreateWithoutFilmsInput>
  }

  export type GenreUpdateWithWhereUniqueWithoutFilmsInput = {
    where: GenreWhereUniqueInput
    data: XOR<GenreUpdateWithoutFilmsInput, GenreUncheckedUpdateWithoutFilmsInput>
  }

  export type GenreUpdateManyWithWhereWithoutFilmsInput = {
    where: GenreScalarWhereInput
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyWithoutGenresInput>
  }

  export type GenreScalarWhereInput = {
    AND?: Enumerable<GenreScalarWhereInput>
    OR?: Enumerable<GenreScalarWhereInput>
    NOT?: Enumerable<GenreScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
  }

  export type FilmCreateWithoutGenresInput = {
    title: string
    img: string
    duration: string
    tipe: string
    synopsis?: string | null
    studio: StudioCreateNestedOneWithoutFilmsInput
  }

  export type FilmUncheckedCreateWithoutGenresInput = {
    id?: number
    title: string
    img: string
    duration: string
    tipe: string
    synopsis?: string | null
    studioId: number
  }

  export type FilmCreateOrConnectWithoutGenresInput = {
    where: FilmWhereUniqueInput
    create: XOR<FilmCreateWithoutGenresInput, FilmUncheckedCreateWithoutGenresInput>
  }

  export type FilmUpsertWithWhereUniqueWithoutGenresInput = {
    where: FilmWhereUniqueInput
    update: XOR<FilmUpdateWithoutGenresInput, FilmUncheckedUpdateWithoutGenresInput>
    create: XOR<FilmCreateWithoutGenresInput, FilmUncheckedCreateWithoutGenresInput>
  }

  export type FilmUpdateWithWhereUniqueWithoutGenresInput = {
    where: FilmWhereUniqueInput
    data: XOR<FilmUpdateWithoutGenresInput, FilmUncheckedUpdateWithoutGenresInput>
  }

  export type FilmUpdateManyWithWhereWithoutGenresInput = {
    where: FilmScalarWhereInput
    data: XOR<FilmUpdateManyMutationInput, FilmUncheckedUpdateManyWithoutFilmsInput>
  }

  export type FilmCreateManyStudioInput = {
    id?: number
    title: string
    img: string
    duration: string
    tipe: string
    synopsis?: string | null
  }

  export type FilmUpdateWithoutStudioInput = {
    title?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    tipe?: StringFieldUpdateOperationsInput | string
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: GenreUpdateManyWithoutFilmsNestedInput
  }

  export type FilmUncheckedUpdateWithoutStudioInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    tipe?: StringFieldUpdateOperationsInput | string
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: GenreUncheckedUpdateManyWithoutFilmsNestedInput
  }

  export type FilmUncheckedUpdateManyWithoutFilmsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    tipe?: StringFieldUpdateOperationsInput | string
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenreUpdateWithoutFilmsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateWithoutFilmsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateManyWithoutGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FilmUpdateWithoutGenresInput = {
    title?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    tipe?: StringFieldUpdateOperationsInput | string
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    studio?: StudioUpdateOneRequiredWithoutFilmsNestedInput
  }

  export type FilmUncheckedUpdateWithoutGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    tipe?: StringFieldUpdateOperationsInput | string
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    studioId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}