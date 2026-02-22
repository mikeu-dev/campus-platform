
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model public_agendas
 * 
 */
export type public_agendas = $Result.DefaultSelection<Prisma.$public_agendasPayload>
/**
 * Model public_links
 * 
 */
export type public_links = $Result.DefaultSelection<Prisma.$public_linksPayload>
/**
 * Model public_pages
 * 
 */
export type public_pages = $Result.DefaultSelection<Prisma.$public_pagesPayload>
/**
 * Model public_posts
 * 
 */
export type public_posts = $Result.DefaultSelection<Prisma.$public_postsPayload>
/**
 * Model public_settings
 * 
 */
export type public_settings = $Result.DefaultSelection<Prisma.$public_settingsPayload>
/**
 * Model public_sliders
 * 
 */
export type public_sliders = $Result.DefaultSelection<Prisma.$public_slidersPayload>
/**
 * Model public_videos
 * 
 */
export type public_videos = $Result.DefaultSelection<Prisma.$public_videosPayload>
/**
 * Model public_visitors
 * 
 */
export type public_visitors = $Result.DefaultSelection<Prisma.$public_visitorsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Public_agendas
 * const public_agendas = await prisma.public_agendas.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Public_agendas
   * const public_agendas = await prisma.public_agendas.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.public_agendas`: Exposes CRUD operations for the **public_agendas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Public_agendas
    * const public_agendas = await prisma.public_agendas.findMany()
    * ```
    */
  get public_agendas(): Prisma.public_agendasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.public_links`: Exposes CRUD operations for the **public_links** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Public_links
    * const public_links = await prisma.public_links.findMany()
    * ```
    */
  get public_links(): Prisma.public_linksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.public_pages`: Exposes CRUD operations for the **public_pages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Public_pages
    * const public_pages = await prisma.public_pages.findMany()
    * ```
    */
  get public_pages(): Prisma.public_pagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.public_posts`: Exposes CRUD operations for the **public_posts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Public_posts
    * const public_posts = await prisma.public_posts.findMany()
    * ```
    */
  get public_posts(): Prisma.public_postsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.public_settings`: Exposes CRUD operations for the **public_settings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Public_settings
    * const public_settings = await prisma.public_settings.findMany()
    * ```
    */
  get public_settings(): Prisma.public_settingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.public_sliders`: Exposes CRUD operations for the **public_sliders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Public_sliders
    * const public_sliders = await prisma.public_sliders.findMany()
    * ```
    */
  get public_sliders(): Prisma.public_slidersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.public_videos`: Exposes CRUD operations for the **public_videos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Public_videos
    * const public_videos = await prisma.public_videos.findMany()
    * ```
    */
  get public_videos(): Prisma.public_videosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.public_visitors`: Exposes CRUD operations for the **public_visitors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Public_visitors
    * const public_visitors = await prisma.public_visitors.findMany()
    * ```
    */
  get public_visitors(): Prisma.public_visitorsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.1
   * Query Engine version: 55ae170b1ced7fc6ed07a15f110549408c501bb3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    public_agendas: 'public_agendas',
    public_links: 'public_links',
    public_pages: 'public_pages',
    public_posts: 'public_posts',
    public_settings: 'public_settings',
    public_sliders: 'public_sliders',
    public_videos: 'public_videos',
    public_visitors: 'public_visitors'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "public_agendas" | "public_links" | "public_pages" | "public_posts" | "public_settings" | "public_sliders" | "public_videos" | "public_visitors"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      public_agendas: {
        payload: Prisma.$public_agendasPayload<ExtArgs>
        fields: Prisma.public_agendasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.public_agendasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_agendasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.public_agendasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_agendasPayload>
          }
          findFirst: {
            args: Prisma.public_agendasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_agendasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.public_agendasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_agendasPayload>
          }
          findMany: {
            args: Prisma.public_agendasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_agendasPayload>[]
          }
          create: {
            args: Prisma.public_agendasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_agendasPayload>
          }
          createMany: {
            args: Prisma.public_agendasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.public_agendasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_agendasPayload>[]
          }
          delete: {
            args: Prisma.public_agendasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_agendasPayload>
          }
          update: {
            args: Prisma.public_agendasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_agendasPayload>
          }
          deleteMany: {
            args: Prisma.public_agendasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.public_agendasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.public_agendasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_agendasPayload>[]
          }
          upsert: {
            args: Prisma.public_agendasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_agendasPayload>
          }
          aggregate: {
            args: Prisma.Public_agendasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublic_agendas>
          }
          groupBy: {
            args: Prisma.public_agendasGroupByArgs<ExtArgs>
            result: $Utils.Optional<Public_agendasGroupByOutputType>[]
          }
          count: {
            args: Prisma.public_agendasCountArgs<ExtArgs>
            result: $Utils.Optional<Public_agendasCountAggregateOutputType> | number
          }
        }
      }
      public_links: {
        payload: Prisma.$public_linksPayload<ExtArgs>
        fields: Prisma.public_linksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.public_linksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_linksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.public_linksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_linksPayload>
          }
          findFirst: {
            args: Prisma.public_linksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_linksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.public_linksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_linksPayload>
          }
          findMany: {
            args: Prisma.public_linksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_linksPayload>[]
          }
          create: {
            args: Prisma.public_linksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_linksPayload>
          }
          createMany: {
            args: Prisma.public_linksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.public_linksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_linksPayload>[]
          }
          delete: {
            args: Prisma.public_linksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_linksPayload>
          }
          update: {
            args: Prisma.public_linksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_linksPayload>
          }
          deleteMany: {
            args: Prisma.public_linksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.public_linksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.public_linksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_linksPayload>[]
          }
          upsert: {
            args: Prisma.public_linksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_linksPayload>
          }
          aggregate: {
            args: Prisma.Public_linksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublic_links>
          }
          groupBy: {
            args: Prisma.public_linksGroupByArgs<ExtArgs>
            result: $Utils.Optional<Public_linksGroupByOutputType>[]
          }
          count: {
            args: Prisma.public_linksCountArgs<ExtArgs>
            result: $Utils.Optional<Public_linksCountAggregateOutputType> | number
          }
        }
      }
      public_pages: {
        payload: Prisma.$public_pagesPayload<ExtArgs>
        fields: Prisma.public_pagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.public_pagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_pagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.public_pagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_pagesPayload>
          }
          findFirst: {
            args: Prisma.public_pagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_pagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.public_pagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_pagesPayload>
          }
          findMany: {
            args: Prisma.public_pagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_pagesPayload>[]
          }
          create: {
            args: Prisma.public_pagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_pagesPayload>
          }
          createMany: {
            args: Prisma.public_pagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.public_pagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_pagesPayload>[]
          }
          delete: {
            args: Prisma.public_pagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_pagesPayload>
          }
          update: {
            args: Prisma.public_pagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_pagesPayload>
          }
          deleteMany: {
            args: Prisma.public_pagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.public_pagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.public_pagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_pagesPayload>[]
          }
          upsert: {
            args: Prisma.public_pagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_pagesPayload>
          }
          aggregate: {
            args: Prisma.Public_pagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublic_pages>
          }
          groupBy: {
            args: Prisma.public_pagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Public_pagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.public_pagesCountArgs<ExtArgs>
            result: $Utils.Optional<Public_pagesCountAggregateOutputType> | number
          }
        }
      }
      public_posts: {
        payload: Prisma.$public_postsPayload<ExtArgs>
        fields: Prisma.public_postsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.public_postsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_postsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.public_postsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_postsPayload>
          }
          findFirst: {
            args: Prisma.public_postsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_postsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.public_postsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_postsPayload>
          }
          findMany: {
            args: Prisma.public_postsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_postsPayload>[]
          }
          create: {
            args: Prisma.public_postsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_postsPayload>
          }
          createMany: {
            args: Prisma.public_postsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.public_postsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_postsPayload>[]
          }
          delete: {
            args: Prisma.public_postsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_postsPayload>
          }
          update: {
            args: Prisma.public_postsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_postsPayload>
          }
          deleteMany: {
            args: Prisma.public_postsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.public_postsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.public_postsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_postsPayload>[]
          }
          upsert: {
            args: Prisma.public_postsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_postsPayload>
          }
          aggregate: {
            args: Prisma.Public_postsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublic_posts>
          }
          groupBy: {
            args: Prisma.public_postsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Public_postsGroupByOutputType>[]
          }
          count: {
            args: Prisma.public_postsCountArgs<ExtArgs>
            result: $Utils.Optional<Public_postsCountAggregateOutputType> | number
          }
        }
      }
      public_settings: {
        payload: Prisma.$public_settingsPayload<ExtArgs>
        fields: Prisma.public_settingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.public_settingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_settingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.public_settingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_settingsPayload>
          }
          findFirst: {
            args: Prisma.public_settingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_settingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.public_settingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_settingsPayload>
          }
          findMany: {
            args: Prisma.public_settingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_settingsPayload>[]
          }
          create: {
            args: Prisma.public_settingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_settingsPayload>
          }
          createMany: {
            args: Prisma.public_settingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.public_settingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_settingsPayload>[]
          }
          delete: {
            args: Prisma.public_settingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_settingsPayload>
          }
          update: {
            args: Prisma.public_settingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_settingsPayload>
          }
          deleteMany: {
            args: Prisma.public_settingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.public_settingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.public_settingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_settingsPayload>[]
          }
          upsert: {
            args: Prisma.public_settingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_settingsPayload>
          }
          aggregate: {
            args: Prisma.Public_settingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublic_settings>
          }
          groupBy: {
            args: Prisma.public_settingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Public_settingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.public_settingsCountArgs<ExtArgs>
            result: $Utils.Optional<Public_settingsCountAggregateOutputType> | number
          }
        }
      }
      public_sliders: {
        payload: Prisma.$public_slidersPayload<ExtArgs>
        fields: Prisma.public_slidersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.public_slidersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_slidersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.public_slidersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_slidersPayload>
          }
          findFirst: {
            args: Prisma.public_slidersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_slidersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.public_slidersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_slidersPayload>
          }
          findMany: {
            args: Prisma.public_slidersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_slidersPayload>[]
          }
          create: {
            args: Prisma.public_slidersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_slidersPayload>
          }
          createMany: {
            args: Prisma.public_slidersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.public_slidersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_slidersPayload>[]
          }
          delete: {
            args: Prisma.public_slidersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_slidersPayload>
          }
          update: {
            args: Prisma.public_slidersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_slidersPayload>
          }
          deleteMany: {
            args: Prisma.public_slidersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.public_slidersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.public_slidersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_slidersPayload>[]
          }
          upsert: {
            args: Prisma.public_slidersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_slidersPayload>
          }
          aggregate: {
            args: Prisma.Public_slidersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublic_sliders>
          }
          groupBy: {
            args: Prisma.public_slidersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Public_slidersGroupByOutputType>[]
          }
          count: {
            args: Prisma.public_slidersCountArgs<ExtArgs>
            result: $Utils.Optional<Public_slidersCountAggregateOutputType> | number
          }
        }
      }
      public_videos: {
        payload: Prisma.$public_videosPayload<ExtArgs>
        fields: Prisma.public_videosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.public_videosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_videosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.public_videosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_videosPayload>
          }
          findFirst: {
            args: Prisma.public_videosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_videosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.public_videosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_videosPayload>
          }
          findMany: {
            args: Prisma.public_videosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_videosPayload>[]
          }
          create: {
            args: Prisma.public_videosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_videosPayload>
          }
          createMany: {
            args: Prisma.public_videosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.public_videosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_videosPayload>[]
          }
          delete: {
            args: Prisma.public_videosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_videosPayload>
          }
          update: {
            args: Prisma.public_videosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_videosPayload>
          }
          deleteMany: {
            args: Prisma.public_videosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.public_videosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.public_videosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_videosPayload>[]
          }
          upsert: {
            args: Prisma.public_videosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_videosPayload>
          }
          aggregate: {
            args: Prisma.Public_videosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublic_videos>
          }
          groupBy: {
            args: Prisma.public_videosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Public_videosGroupByOutputType>[]
          }
          count: {
            args: Prisma.public_videosCountArgs<ExtArgs>
            result: $Utils.Optional<Public_videosCountAggregateOutputType> | number
          }
        }
      }
      public_visitors: {
        payload: Prisma.$public_visitorsPayload<ExtArgs>
        fields: Prisma.public_visitorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.public_visitorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_visitorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.public_visitorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_visitorsPayload>
          }
          findFirst: {
            args: Prisma.public_visitorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_visitorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.public_visitorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_visitorsPayload>
          }
          findMany: {
            args: Prisma.public_visitorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_visitorsPayload>[]
          }
          create: {
            args: Prisma.public_visitorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_visitorsPayload>
          }
          createMany: {
            args: Prisma.public_visitorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.public_visitorsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_visitorsPayload>[]
          }
          delete: {
            args: Prisma.public_visitorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_visitorsPayload>
          }
          update: {
            args: Prisma.public_visitorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_visitorsPayload>
          }
          deleteMany: {
            args: Prisma.public_visitorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.public_visitorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.public_visitorsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_visitorsPayload>[]
          }
          upsert: {
            args: Prisma.public_visitorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$public_visitorsPayload>
          }
          aggregate: {
            args: Prisma.Public_visitorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublic_visitors>
          }
          groupBy: {
            args: Prisma.public_visitorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Public_visitorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.public_visitorsCountArgs<ExtArgs>
            result: $Utils.Optional<Public_visitorsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    public_agendas?: public_agendasOmit
    public_links?: public_linksOmit
    public_pages?: public_pagesOmit
    public_posts?: public_postsOmit
    public_settings?: public_settingsOmit
    public_sliders?: public_slidersOmit
    public_videos?: public_videosOmit
    public_visitors?: public_visitorsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model public_agendas
   */

  export type AggregatePublic_agendas = {
    _count: Public_agendasCountAggregateOutputType | null
    _min: Public_agendasMinAggregateOutputType | null
    _max: Public_agendasMaxAggregateOutputType | null
  }

  export type Public_agendasMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    title: string | null
    description: string | null
    date: Date | null
    location: string | null
    is_pinned: boolean | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Public_agendasMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    title: string | null
    description: string | null
    date: Date | null
    location: string | null
    is_pinned: boolean | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Public_agendasCountAggregateOutputType = {
    id: number
    tenant_id: number
    title: number
    description: number
    date: number
    location: number
    is_pinned: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Public_agendasMinAggregateInputType = {
    id?: true
    tenant_id?: true
    title?: true
    description?: true
    date?: true
    location?: true
    is_pinned?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type Public_agendasMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    title?: true
    description?: true
    date?: true
    location?: true
    is_pinned?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type Public_agendasCountAggregateInputType = {
    id?: true
    tenant_id?: true
    title?: true
    description?: true
    date?: true
    location?: true
    is_pinned?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Public_agendasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which public_agendas to aggregate.
     */
    where?: public_agendasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of public_agendas to fetch.
     */
    orderBy?: public_agendasOrderByWithRelationInput | public_agendasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: public_agendasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` public_agendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` public_agendas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned public_agendas
    **/
    _count?: true | Public_agendasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Public_agendasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Public_agendasMaxAggregateInputType
  }

  export type GetPublic_agendasAggregateType<T extends Public_agendasAggregateArgs> = {
        [P in keyof T & keyof AggregatePublic_agendas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublic_agendas[P]>
      : GetScalarType<T[P], AggregatePublic_agendas[P]>
  }




  export type public_agendasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: public_agendasWhereInput
    orderBy?: public_agendasOrderByWithAggregationInput | public_agendasOrderByWithAggregationInput[]
    by: Public_agendasScalarFieldEnum[] | Public_agendasScalarFieldEnum
    having?: public_agendasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Public_agendasCountAggregateInputType | true
    _min?: Public_agendasMinAggregateInputType
    _max?: Public_agendasMaxAggregateInputType
  }

  export type Public_agendasGroupByOutputType = {
    id: string
    tenant_id: string
    title: string
    description: string | null
    date: Date
    location: string | null
    is_pinned: boolean | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    _count: Public_agendasCountAggregateOutputType | null
    _min: Public_agendasMinAggregateOutputType | null
    _max: Public_agendasMaxAggregateOutputType | null
  }

  type GetPublic_agendasGroupByPayload<T extends public_agendasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Public_agendasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Public_agendasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Public_agendasGroupByOutputType[P]>
            : GetScalarType<T[P], Public_agendasGroupByOutputType[P]>
        }
      >
    >


  export type public_agendasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    location?: boolean
    is_pinned?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["public_agendas"]>

  export type public_agendasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    location?: boolean
    is_pinned?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["public_agendas"]>

  export type public_agendasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    location?: boolean
    is_pinned?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["public_agendas"]>

  export type public_agendasSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    location?: boolean
    is_pinned?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type public_agendasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenant_id" | "title" | "description" | "date" | "location" | "is_pinned" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["public_agendas"]>

  export type $public_agendasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "public_agendas"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      title: string
      description: string | null
      date: Date
      location: string | null
      is_pinned: boolean | null
      is_active: boolean | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["public_agendas"]>
    composites: {}
  }

  type public_agendasGetPayload<S extends boolean | null | undefined | public_agendasDefaultArgs> = $Result.GetResult<Prisma.$public_agendasPayload, S>

  type public_agendasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<public_agendasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Public_agendasCountAggregateInputType | true
    }

  export interface public_agendasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['public_agendas'], meta: { name: 'public_agendas' } }
    /**
     * Find zero or one Public_agendas that matches the filter.
     * @param {public_agendasFindUniqueArgs} args - Arguments to find a Public_agendas
     * @example
     * // Get one Public_agendas
     * const public_agendas = await prisma.public_agendas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends public_agendasFindUniqueArgs>(args: SelectSubset<T, public_agendasFindUniqueArgs<ExtArgs>>): Prisma__public_agendasClient<$Result.GetResult<Prisma.$public_agendasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Public_agendas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {public_agendasFindUniqueOrThrowArgs} args - Arguments to find a Public_agendas
     * @example
     * // Get one Public_agendas
     * const public_agendas = await prisma.public_agendas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends public_agendasFindUniqueOrThrowArgs>(args: SelectSubset<T, public_agendasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__public_agendasClient<$Result.GetResult<Prisma.$public_agendasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Public_agendas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_agendasFindFirstArgs} args - Arguments to find a Public_agendas
     * @example
     * // Get one Public_agendas
     * const public_agendas = await prisma.public_agendas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends public_agendasFindFirstArgs>(args?: SelectSubset<T, public_agendasFindFirstArgs<ExtArgs>>): Prisma__public_agendasClient<$Result.GetResult<Prisma.$public_agendasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Public_agendas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_agendasFindFirstOrThrowArgs} args - Arguments to find a Public_agendas
     * @example
     * // Get one Public_agendas
     * const public_agendas = await prisma.public_agendas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends public_agendasFindFirstOrThrowArgs>(args?: SelectSubset<T, public_agendasFindFirstOrThrowArgs<ExtArgs>>): Prisma__public_agendasClient<$Result.GetResult<Prisma.$public_agendasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Public_agendas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_agendasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Public_agendas
     * const public_agendas = await prisma.public_agendas.findMany()
     * 
     * // Get first 10 Public_agendas
     * const public_agendas = await prisma.public_agendas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const public_agendasWithIdOnly = await prisma.public_agendas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends public_agendasFindManyArgs>(args?: SelectSubset<T, public_agendasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$public_agendasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Public_agendas.
     * @param {public_agendasCreateArgs} args - Arguments to create a Public_agendas.
     * @example
     * // Create one Public_agendas
     * const Public_agendas = await prisma.public_agendas.create({
     *   data: {
     *     // ... data to create a Public_agendas
     *   }
     * })
     * 
     */
    create<T extends public_agendasCreateArgs>(args: SelectSubset<T, public_agendasCreateArgs<ExtArgs>>): Prisma__public_agendasClient<$Result.GetResult<Prisma.$public_agendasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Public_agendas.
     * @param {public_agendasCreateManyArgs} args - Arguments to create many Public_agendas.
     * @example
     * // Create many Public_agendas
     * const public_agendas = await prisma.public_agendas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends public_agendasCreateManyArgs>(args?: SelectSubset<T, public_agendasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Public_agendas and returns the data saved in the database.
     * @param {public_agendasCreateManyAndReturnArgs} args - Arguments to create many Public_agendas.
     * @example
     * // Create many Public_agendas
     * const public_agendas = await prisma.public_agendas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Public_agendas and only return the `id`
     * const public_agendasWithIdOnly = await prisma.public_agendas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends public_agendasCreateManyAndReturnArgs>(args?: SelectSubset<T, public_agendasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$public_agendasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Public_agendas.
     * @param {public_agendasDeleteArgs} args - Arguments to delete one Public_agendas.
     * @example
     * // Delete one Public_agendas
     * const Public_agendas = await prisma.public_agendas.delete({
     *   where: {
     *     // ... filter to delete one Public_agendas
     *   }
     * })
     * 
     */
    delete<T extends public_agendasDeleteArgs>(args: SelectSubset<T, public_agendasDeleteArgs<ExtArgs>>): Prisma__public_agendasClient<$Result.GetResult<Prisma.$public_agendasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Public_agendas.
     * @param {public_agendasUpdateArgs} args - Arguments to update one Public_agendas.
     * @example
     * // Update one Public_agendas
     * const public_agendas = await prisma.public_agendas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends public_agendasUpdateArgs>(args: SelectSubset<T, public_agendasUpdateArgs<ExtArgs>>): Prisma__public_agendasClient<$Result.GetResult<Prisma.$public_agendasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Public_agendas.
     * @param {public_agendasDeleteManyArgs} args - Arguments to filter Public_agendas to delete.
     * @example
     * // Delete a few Public_agendas
     * const { count } = await prisma.public_agendas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends public_agendasDeleteManyArgs>(args?: SelectSubset<T, public_agendasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Public_agendas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_agendasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Public_agendas
     * const public_agendas = await prisma.public_agendas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends public_agendasUpdateManyArgs>(args: SelectSubset<T, public_agendasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Public_agendas and returns the data updated in the database.
     * @param {public_agendasUpdateManyAndReturnArgs} args - Arguments to update many Public_agendas.
     * @example
     * // Update many Public_agendas
     * const public_agendas = await prisma.public_agendas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Public_agendas and only return the `id`
     * const public_agendasWithIdOnly = await prisma.public_agendas.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends public_agendasUpdateManyAndReturnArgs>(args: SelectSubset<T, public_agendasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$public_agendasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Public_agendas.
     * @param {public_agendasUpsertArgs} args - Arguments to update or create a Public_agendas.
     * @example
     * // Update or create a Public_agendas
     * const public_agendas = await prisma.public_agendas.upsert({
     *   create: {
     *     // ... data to create a Public_agendas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Public_agendas we want to update
     *   }
     * })
     */
    upsert<T extends public_agendasUpsertArgs>(args: SelectSubset<T, public_agendasUpsertArgs<ExtArgs>>): Prisma__public_agendasClient<$Result.GetResult<Prisma.$public_agendasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Public_agendas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_agendasCountArgs} args - Arguments to filter Public_agendas to count.
     * @example
     * // Count the number of Public_agendas
     * const count = await prisma.public_agendas.count({
     *   where: {
     *     // ... the filter for the Public_agendas we want to count
     *   }
     * })
    **/
    count<T extends public_agendasCountArgs>(
      args?: Subset<T, public_agendasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Public_agendasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Public_agendas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Public_agendasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Public_agendasAggregateArgs>(args: Subset<T, Public_agendasAggregateArgs>): Prisma.PrismaPromise<GetPublic_agendasAggregateType<T>>

    /**
     * Group by Public_agendas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_agendasGroupByArgs} args - Group by arguments.
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
      T extends public_agendasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: public_agendasGroupByArgs['orderBy'] }
        : { orderBy?: public_agendasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, public_agendasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublic_agendasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the public_agendas model
   */
  readonly fields: public_agendasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for public_agendas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__public_agendasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the public_agendas model
   */
  interface public_agendasFieldRefs {
    readonly id: FieldRef<"public_agendas", 'String'>
    readonly tenant_id: FieldRef<"public_agendas", 'String'>
    readonly title: FieldRef<"public_agendas", 'String'>
    readonly description: FieldRef<"public_agendas", 'String'>
    readonly date: FieldRef<"public_agendas", 'DateTime'>
    readonly location: FieldRef<"public_agendas", 'String'>
    readonly is_pinned: FieldRef<"public_agendas", 'Boolean'>
    readonly is_active: FieldRef<"public_agendas", 'Boolean'>
    readonly created_at: FieldRef<"public_agendas", 'DateTime'>
    readonly updated_at: FieldRef<"public_agendas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * public_agendas findUnique
   */
  export type public_agendasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_agendas
     */
    select?: public_agendasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_agendas
     */
    omit?: public_agendasOmit<ExtArgs> | null
    /**
     * Filter, which public_agendas to fetch.
     */
    where: public_agendasWhereUniqueInput
  }

  /**
   * public_agendas findUniqueOrThrow
   */
  export type public_agendasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_agendas
     */
    select?: public_agendasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_agendas
     */
    omit?: public_agendasOmit<ExtArgs> | null
    /**
     * Filter, which public_agendas to fetch.
     */
    where: public_agendasWhereUniqueInput
  }

  /**
   * public_agendas findFirst
   */
  export type public_agendasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_agendas
     */
    select?: public_agendasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_agendas
     */
    omit?: public_agendasOmit<ExtArgs> | null
    /**
     * Filter, which public_agendas to fetch.
     */
    where?: public_agendasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of public_agendas to fetch.
     */
    orderBy?: public_agendasOrderByWithRelationInput | public_agendasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for public_agendas.
     */
    cursor?: public_agendasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` public_agendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` public_agendas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of public_agendas.
     */
    distinct?: Public_agendasScalarFieldEnum | Public_agendasScalarFieldEnum[]
  }

  /**
   * public_agendas findFirstOrThrow
   */
  export type public_agendasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_agendas
     */
    select?: public_agendasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_agendas
     */
    omit?: public_agendasOmit<ExtArgs> | null
    /**
     * Filter, which public_agendas to fetch.
     */
    where?: public_agendasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of public_agendas to fetch.
     */
    orderBy?: public_agendasOrderByWithRelationInput | public_agendasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for public_agendas.
     */
    cursor?: public_agendasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` public_agendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` public_agendas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of public_agendas.
     */
    distinct?: Public_agendasScalarFieldEnum | Public_agendasScalarFieldEnum[]
  }

  /**
   * public_agendas findMany
   */
  export type public_agendasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_agendas
     */
    select?: public_agendasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_agendas
     */
    omit?: public_agendasOmit<ExtArgs> | null
    /**
     * Filter, which public_agendas to fetch.
     */
    where?: public_agendasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of public_agendas to fetch.
     */
    orderBy?: public_agendasOrderByWithRelationInput | public_agendasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing public_agendas.
     */
    cursor?: public_agendasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` public_agendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` public_agendas.
     */
    skip?: number
    distinct?: Public_agendasScalarFieldEnum | Public_agendasScalarFieldEnum[]
  }

  /**
   * public_agendas create
   */
  export type public_agendasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_agendas
     */
    select?: public_agendasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_agendas
     */
    omit?: public_agendasOmit<ExtArgs> | null
    /**
     * The data needed to create a public_agendas.
     */
    data: XOR<public_agendasCreateInput, public_agendasUncheckedCreateInput>
  }

  /**
   * public_agendas createMany
   */
  export type public_agendasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many public_agendas.
     */
    data: public_agendasCreateManyInput | public_agendasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * public_agendas createManyAndReturn
   */
  export type public_agendasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_agendas
     */
    select?: public_agendasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the public_agendas
     */
    omit?: public_agendasOmit<ExtArgs> | null
    /**
     * The data used to create many public_agendas.
     */
    data: public_agendasCreateManyInput | public_agendasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * public_agendas update
   */
  export type public_agendasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_agendas
     */
    select?: public_agendasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_agendas
     */
    omit?: public_agendasOmit<ExtArgs> | null
    /**
     * The data needed to update a public_agendas.
     */
    data: XOR<public_agendasUpdateInput, public_agendasUncheckedUpdateInput>
    /**
     * Choose, which public_agendas to update.
     */
    where: public_agendasWhereUniqueInput
  }

  /**
   * public_agendas updateMany
   */
  export type public_agendasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update public_agendas.
     */
    data: XOR<public_agendasUpdateManyMutationInput, public_agendasUncheckedUpdateManyInput>
    /**
     * Filter which public_agendas to update
     */
    where?: public_agendasWhereInput
    /**
     * Limit how many public_agendas to update.
     */
    limit?: number
  }

  /**
   * public_agendas updateManyAndReturn
   */
  export type public_agendasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_agendas
     */
    select?: public_agendasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the public_agendas
     */
    omit?: public_agendasOmit<ExtArgs> | null
    /**
     * The data used to update public_agendas.
     */
    data: XOR<public_agendasUpdateManyMutationInput, public_agendasUncheckedUpdateManyInput>
    /**
     * Filter which public_agendas to update
     */
    where?: public_agendasWhereInput
    /**
     * Limit how many public_agendas to update.
     */
    limit?: number
  }

  /**
   * public_agendas upsert
   */
  export type public_agendasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_agendas
     */
    select?: public_agendasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_agendas
     */
    omit?: public_agendasOmit<ExtArgs> | null
    /**
     * The filter to search for the public_agendas to update in case it exists.
     */
    where: public_agendasWhereUniqueInput
    /**
     * In case the public_agendas found by the `where` argument doesn't exist, create a new public_agendas with this data.
     */
    create: XOR<public_agendasCreateInput, public_agendasUncheckedCreateInput>
    /**
     * In case the public_agendas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<public_agendasUpdateInput, public_agendasUncheckedUpdateInput>
  }

  /**
   * public_agendas delete
   */
  export type public_agendasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_agendas
     */
    select?: public_agendasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_agendas
     */
    omit?: public_agendasOmit<ExtArgs> | null
    /**
     * Filter which public_agendas to delete.
     */
    where: public_agendasWhereUniqueInput
  }

  /**
   * public_agendas deleteMany
   */
  export type public_agendasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which public_agendas to delete
     */
    where?: public_agendasWhereInput
    /**
     * Limit how many public_agendas to delete.
     */
    limit?: number
  }

  /**
   * public_agendas without action
   */
  export type public_agendasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_agendas
     */
    select?: public_agendasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_agendas
     */
    omit?: public_agendasOmit<ExtArgs> | null
  }


  /**
   * Model public_links
   */

  export type AggregatePublic_links = {
    _count: Public_linksCountAggregateOutputType | null
    _avg: Public_linksAvgAggregateOutputType | null
    _sum: Public_linksSumAggregateOutputType | null
    _min: Public_linksMinAggregateOutputType | null
    _max: Public_linksMaxAggregateOutputType | null
  }

  export type Public_linksAvgAggregateOutputType = {
    order_index: number | null
  }

  export type Public_linksSumAggregateOutputType = {
    order_index: number | null
  }

  export type Public_linksMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    title: string | null
    url: string | null
    order_index: number | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Public_linksMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    title: string | null
    url: string | null
    order_index: number | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Public_linksCountAggregateOutputType = {
    id: number
    tenant_id: number
    title: number
    url: number
    order_index: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Public_linksAvgAggregateInputType = {
    order_index?: true
  }

  export type Public_linksSumAggregateInputType = {
    order_index?: true
  }

  export type Public_linksMinAggregateInputType = {
    id?: true
    tenant_id?: true
    title?: true
    url?: true
    order_index?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type Public_linksMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    title?: true
    url?: true
    order_index?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type Public_linksCountAggregateInputType = {
    id?: true
    tenant_id?: true
    title?: true
    url?: true
    order_index?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Public_linksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which public_links to aggregate.
     */
    where?: public_linksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of public_links to fetch.
     */
    orderBy?: public_linksOrderByWithRelationInput | public_linksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: public_linksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` public_links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` public_links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned public_links
    **/
    _count?: true | Public_linksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Public_linksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Public_linksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Public_linksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Public_linksMaxAggregateInputType
  }

  export type GetPublic_linksAggregateType<T extends Public_linksAggregateArgs> = {
        [P in keyof T & keyof AggregatePublic_links]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublic_links[P]>
      : GetScalarType<T[P], AggregatePublic_links[P]>
  }




  export type public_linksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: public_linksWhereInput
    orderBy?: public_linksOrderByWithAggregationInput | public_linksOrderByWithAggregationInput[]
    by: Public_linksScalarFieldEnum[] | Public_linksScalarFieldEnum
    having?: public_linksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Public_linksCountAggregateInputType | true
    _avg?: Public_linksAvgAggregateInputType
    _sum?: Public_linksSumAggregateInputType
    _min?: Public_linksMinAggregateInputType
    _max?: Public_linksMaxAggregateInputType
  }

  export type Public_linksGroupByOutputType = {
    id: string
    tenant_id: string
    title: string
    url: string
    order_index: number | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    _count: Public_linksCountAggregateOutputType | null
    _avg: Public_linksAvgAggregateOutputType | null
    _sum: Public_linksSumAggregateOutputType | null
    _min: Public_linksMinAggregateOutputType | null
    _max: Public_linksMaxAggregateOutputType | null
  }

  type GetPublic_linksGroupByPayload<T extends public_linksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Public_linksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Public_linksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Public_linksGroupByOutputType[P]>
            : GetScalarType<T[P], Public_linksGroupByOutputType[P]>
        }
      >
    >


  export type public_linksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    title?: boolean
    url?: boolean
    order_index?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["public_links"]>

  export type public_linksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    title?: boolean
    url?: boolean
    order_index?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["public_links"]>

  export type public_linksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    title?: boolean
    url?: boolean
    order_index?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["public_links"]>

  export type public_linksSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    title?: boolean
    url?: boolean
    order_index?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type public_linksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenant_id" | "title" | "url" | "order_index" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["public_links"]>

  export type $public_linksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "public_links"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      title: string
      url: string
      order_index: number | null
      is_active: boolean | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["public_links"]>
    composites: {}
  }

  type public_linksGetPayload<S extends boolean | null | undefined | public_linksDefaultArgs> = $Result.GetResult<Prisma.$public_linksPayload, S>

  type public_linksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<public_linksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Public_linksCountAggregateInputType | true
    }

  export interface public_linksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['public_links'], meta: { name: 'public_links' } }
    /**
     * Find zero or one Public_links that matches the filter.
     * @param {public_linksFindUniqueArgs} args - Arguments to find a Public_links
     * @example
     * // Get one Public_links
     * const public_links = await prisma.public_links.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends public_linksFindUniqueArgs>(args: SelectSubset<T, public_linksFindUniqueArgs<ExtArgs>>): Prisma__public_linksClient<$Result.GetResult<Prisma.$public_linksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Public_links that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {public_linksFindUniqueOrThrowArgs} args - Arguments to find a Public_links
     * @example
     * // Get one Public_links
     * const public_links = await prisma.public_links.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends public_linksFindUniqueOrThrowArgs>(args: SelectSubset<T, public_linksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__public_linksClient<$Result.GetResult<Prisma.$public_linksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Public_links that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_linksFindFirstArgs} args - Arguments to find a Public_links
     * @example
     * // Get one Public_links
     * const public_links = await prisma.public_links.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends public_linksFindFirstArgs>(args?: SelectSubset<T, public_linksFindFirstArgs<ExtArgs>>): Prisma__public_linksClient<$Result.GetResult<Prisma.$public_linksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Public_links that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_linksFindFirstOrThrowArgs} args - Arguments to find a Public_links
     * @example
     * // Get one Public_links
     * const public_links = await prisma.public_links.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends public_linksFindFirstOrThrowArgs>(args?: SelectSubset<T, public_linksFindFirstOrThrowArgs<ExtArgs>>): Prisma__public_linksClient<$Result.GetResult<Prisma.$public_linksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Public_links that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_linksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Public_links
     * const public_links = await prisma.public_links.findMany()
     * 
     * // Get first 10 Public_links
     * const public_links = await prisma.public_links.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const public_linksWithIdOnly = await prisma.public_links.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends public_linksFindManyArgs>(args?: SelectSubset<T, public_linksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$public_linksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Public_links.
     * @param {public_linksCreateArgs} args - Arguments to create a Public_links.
     * @example
     * // Create one Public_links
     * const Public_links = await prisma.public_links.create({
     *   data: {
     *     // ... data to create a Public_links
     *   }
     * })
     * 
     */
    create<T extends public_linksCreateArgs>(args: SelectSubset<T, public_linksCreateArgs<ExtArgs>>): Prisma__public_linksClient<$Result.GetResult<Prisma.$public_linksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Public_links.
     * @param {public_linksCreateManyArgs} args - Arguments to create many Public_links.
     * @example
     * // Create many Public_links
     * const public_links = await prisma.public_links.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends public_linksCreateManyArgs>(args?: SelectSubset<T, public_linksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Public_links and returns the data saved in the database.
     * @param {public_linksCreateManyAndReturnArgs} args - Arguments to create many Public_links.
     * @example
     * // Create many Public_links
     * const public_links = await prisma.public_links.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Public_links and only return the `id`
     * const public_linksWithIdOnly = await prisma.public_links.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends public_linksCreateManyAndReturnArgs>(args?: SelectSubset<T, public_linksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$public_linksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Public_links.
     * @param {public_linksDeleteArgs} args - Arguments to delete one Public_links.
     * @example
     * // Delete one Public_links
     * const Public_links = await prisma.public_links.delete({
     *   where: {
     *     // ... filter to delete one Public_links
     *   }
     * })
     * 
     */
    delete<T extends public_linksDeleteArgs>(args: SelectSubset<T, public_linksDeleteArgs<ExtArgs>>): Prisma__public_linksClient<$Result.GetResult<Prisma.$public_linksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Public_links.
     * @param {public_linksUpdateArgs} args - Arguments to update one Public_links.
     * @example
     * // Update one Public_links
     * const public_links = await prisma.public_links.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends public_linksUpdateArgs>(args: SelectSubset<T, public_linksUpdateArgs<ExtArgs>>): Prisma__public_linksClient<$Result.GetResult<Prisma.$public_linksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Public_links.
     * @param {public_linksDeleteManyArgs} args - Arguments to filter Public_links to delete.
     * @example
     * // Delete a few Public_links
     * const { count } = await prisma.public_links.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends public_linksDeleteManyArgs>(args?: SelectSubset<T, public_linksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Public_links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_linksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Public_links
     * const public_links = await prisma.public_links.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends public_linksUpdateManyArgs>(args: SelectSubset<T, public_linksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Public_links and returns the data updated in the database.
     * @param {public_linksUpdateManyAndReturnArgs} args - Arguments to update many Public_links.
     * @example
     * // Update many Public_links
     * const public_links = await prisma.public_links.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Public_links and only return the `id`
     * const public_linksWithIdOnly = await prisma.public_links.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends public_linksUpdateManyAndReturnArgs>(args: SelectSubset<T, public_linksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$public_linksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Public_links.
     * @param {public_linksUpsertArgs} args - Arguments to update or create a Public_links.
     * @example
     * // Update or create a Public_links
     * const public_links = await prisma.public_links.upsert({
     *   create: {
     *     // ... data to create a Public_links
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Public_links we want to update
     *   }
     * })
     */
    upsert<T extends public_linksUpsertArgs>(args: SelectSubset<T, public_linksUpsertArgs<ExtArgs>>): Prisma__public_linksClient<$Result.GetResult<Prisma.$public_linksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Public_links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_linksCountArgs} args - Arguments to filter Public_links to count.
     * @example
     * // Count the number of Public_links
     * const count = await prisma.public_links.count({
     *   where: {
     *     // ... the filter for the Public_links we want to count
     *   }
     * })
    **/
    count<T extends public_linksCountArgs>(
      args?: Subset<T, public_linksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Public_linksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Public_links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Public_linksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Public_linksAggregateArgs>(args: Subset<T, Public_linksAggregateArgs>): Prisma.PrismaPromise<GetPublic_linksAggregateType<T>>

    /**
     * Group by Public_links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_linksGroupByArgs} args - Group by arguments.
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
      T extends public_linksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: public_linksGroupByArgs['orderBy'] }
        : { orderBy?: public_linksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, public_linksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublic_linksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the public_links model
   */
  readonly fields: public_linksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for public_links.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__public_linksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the public_links model
   */
  interface public_linksFieldRefs {
    readonly id: FieldRef<"public_links", 'String'>
    readonly tenant_id: FieldRef<"public_links", 'String'>
    readonly title: FieldRef<"public_links", 'String'>
    readonly url: FieldRef<"public_links", 'String'>
    readonly order_index: FieldRef<"public_links", 'Int'>
    readonly is_active: FieldRef<"public_links", 'Boolean'>
    readonly created_at: FieldRef<"public_links", 'DateTime'>
    readonly updated_at: FieldRef<"public_links", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * public_links findUnique
   */
  export type public_linksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_links
     */
    select?: public_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_links
     */
    omit?: public_linksOmit<ExtArgs> | null
    /**
     * Filter, which public_links to fetch.
     */
    where: public_linksWhereUniqueInput
  }

  /**
   * public_links findUniqueOrThrow
   */
  export type public_linksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_links
     */
    select?: public_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_links
     */
    omit?: public_linksOmit<ExtArgs> | null
    /**
     * Filter, which public_links to fetch.
     */
    where: public_linksWhereUniqueInput
  }

  /**
   * public_links findFirst
   */
  export type public_linksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_links
     */
    select?: public_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_links
     */
    omit?: public_linksOmit<ExtArgs> | null
    /**
     * Filter, which public_links to fetch.
     */
    where?: public_linksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of public_links to fetch.
     */
    orderBy?: public_linksOrderByWithRelationInput | public_linksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for public_links.
     */
    cursor?: public_linksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` public_links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` public_links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of public_links.
     */
    distinct?: Public_linksScalarFieldEnum | Public_linksScalarFieldEnum[]
  }

  /**
   * public_links findFirstOrThrow
   */
  export type public_linksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_links
     */
    select?: public_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_links
     */
    omit?: public_linksOmit<ExtArgs> | null
    /**
     * Filter, which public_links to fetch.
     */
    where?: public_linksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of public_links to fetch.
     */
    orderBy?: public_linksOrderByWithRelationInput | public_linksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for public_links.
     */
    cursor?: public_linksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` public_links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` public_links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of public_links.
     */
    distinct?: Public_linksScalarFieldEnum | Public_linksScalarFieldEnum[]
  }

  /**
   * public_links findMany
   */
  export type public_linksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_links
     */
    select?: public_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_links
     */
    omit?: public_linksOmit<ExtArgs> | null
    /**
     * Filter, which public_links to fetch.
     */
    where?: public_linksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of public_links to fetch.
     */
    orderBy?: public_linksOrderByWithRelationInput | public_linksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing public_links.
     */
    cursor?: public_linksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` public_links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` public_links.
     */
    skip?: number
    distinct?: Public_linksScalarFieldEnum | Public_linksScalarFieldEnum[]
  }

  /**
   * public_links create
   */
  export type public_linksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_links
     */
    select?: public_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_links
     */
    omit?: public_linksOmit<ExtArgs> | null
    /**
     * The data needed to create a public_links.
     */
    data: XOR<public_linksCreateInput, public_linksUncheckedCreateInput>
  }

  /**
   * public_links createMany
   */
  export type public_linksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many public_links.
     */
    data: public_linksCreateManyInput | public_linksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * public_links createManyAndReturn
   */
  export type public_linksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_links
     */
    select?: public_linksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the public_links
     */
    omit?: public_linksOmit<ExtArgs> | null
    /**
     * The data used to create many public_links.
     */
    data: public_linksCreateManyInput | public_linksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * public_links update
   */
  export type public_linksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_links
     */
    select?: public_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_links
     */
    omit?: public_linksOmit<ExtArgs> | null
    /**
     * The data needed to update a public_links.
     */
    data: XOR<public_linksUpdateInput, public_linksUncheckedUpdateInput>
    /**
     * Choose, which public_links to update.
     */
    where: public_linksWhereUniqueInput
  }

  /**
   * public_links updateMany
   */
  export type public_linksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update public_links.
     */
    data: XOR<public_linksUpdateManyMutationInput, public_linksUncheckedUpdateManyInput>
    /**
     * Filter which public_links to update
     */
    where?: public_linksWhereInput
    /**
     * Limit how many public_links to update.
     */
    limit?: number
  }

  /**
   * public_links updateManyAndReturn
   */
  export type public_linksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_links
     */
    select?: public_linksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the public_links
     */
    omit?: public_linksOmit<ExtArgs> | null
    /**
     * The data used to update public_links.
     */
    data: XOR<public_linksUpdateManyMutationInput, public_linksUncheckedUpdateManyInput>
    /**
     * Filter which public_links to update
     */
    where?: public_linksWhereInput
    /**
     * Limit how many public_links to update.
     */
    limit?: number
  }

  /**
   * public_links upsert
   */
  export type public_linksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_links
     */
    select?: public_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_links
     */
    omit?: public_linksOmit<ExtArgs> | null
    /**
     * The filter to search for the public_links to update in case it exists.
     */
    where: public_linksWhereUniqueInput
    /**
     * In case the public_links found by the `where` argument doesn't exist, create a new public_links with this data.
     */
    create: XOR<public_linksCreateInput, public_linksUncheckedCreateInput>
    /**
     * In case the public_links was found with the provided `where` argument, update it with this data.
     */
    update: XOR<public_linksUpdateInput, public_linksUncheckedUpdateInput>
  }

  /**
   * public_links delete
   */
  export type public_linksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_links
     */
    select?: public_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_links
     */
    omit?: public_linksOmit<ExtArgs> | null
    /**
     * Filter which public_links to delete.
     */
    where: public_linksWhereUniqueInput
  }

  /**
   * public_links deleteMany
   */
  export type public_linksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which public_links to delete
     */
    where?: public_linksWhereInput
    /**
     * Limit how many public_links to delete.
     */
    limit?: number
  }

  /**
   * public_links without action
   */
  export type public_linksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_links
     */
    select?: public_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_links
     */
    omit?: public_linksOmit<ExtArgs> | null
  }


  /**
   * Model public_pages
   */

  export type AggregatePublic_pages = {
    _count: Public_pagesCountAggregateOutputType | null
    _avg: Public_pagesAvgAggregateOutputType | null
    _sum: Public_pagesSumAggregateOutputType | null
    _min: Public_pagesMinAggregateOutputType | null
    _max: Public_pagesMaxAggregateOutputType | null
  }

  export type Public_pagesAvgAggregateOutputType = {
    order_index: number | null
  }

  export type Public_pagesSumAggregateOutputType = {
    order_index: number | null
  }

  export type Public_pagesMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    title: string | null
    slug: string | null
    content: string | null
    parent_menu: string | null
    order_index: number | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Public_pagesMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    title: string | null
    slug: string | null
    content: string | null
    parent_menu: string | null
    order_index: number | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Public_pagesCountAggregateOutputType = {
    id: number
    tenant_id: number
    title: number
    slug: number
    content: number
    parent_menu: number
    order_index: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Public_pagesAvgAggregateInputType = {
    order_index?: true
  }

  export type Public_pagesSumAggregateInputType = {
    order_index?: true
  }

  export type Public_pagesMinAggregateInputType = {
    id?: true
    tenant_id?: true
    title?: true
    slug?: true
    content?: true
    parent_menu?: true
    order_index?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type Public_pagesMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    title?: true
    slug?: true
    content?: true
    parent_menu?: true
    order_index?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type Public_pagesCountAggregateInputType = {
    id?: true
    tenant_id?: true
    title?: true
    slug?: true
    content?: true
    parent_menu?: true
    order_index?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Public_pagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which public_pages to aggregate.
     */
    where?: public_pagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of public_pages to fetch.
     */
    orderBy?: public_pagesOrderByWithRelationInput | public_pagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: public_pagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` public_pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` public_pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned public_pages
    **/
    _count?: true | Public_pagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Public_pagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Public_pagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Public_pagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Public_pagesMaxAggregateInputType
  }

  export type GetPublic_pagesAggregateType<T extends Public_pagesAggregateArgs> = {
        [P in keyof T & keyof AggregatePublic_pages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublic_pages[P]>
      : GetScalarType<T[P], AggregatePublic_pages[P]>
  }




  export type public_pagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: public_pagesWhereInput
    orderBy?: public_pagesOrderByWithAggregationInput | public_pagesOrderByWithAggregationInput[]
    by: Public_pagesScalarFieldEnum[] | Public_pagesScalarFieldEnum
    having?: public_pagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Public_pagesCountAggregateInputType | true
    _avg?: Public_pagesAvgAggregateInputType
    _sum?: Public_pagesSumAggregateInputType
    _min?: Public_pagesMinAggregateInputType
    _max?: Public_pagesMaxAggregateInputType
  }

  export type Public_pagesGroupByOutputType = {
    id: string
    tenant_id: string
    title: string
    slug: string
    content: string | null
    parent_menu: string | null
    order_index: number | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    _count: Public_pagesCountAggregateOutputType | null
    _avg: Public_pagesAvgAggregateOutputType | null
    _sum: Public_pagesSumAggregateOutputType | null
    _min: Public_pagesMinAggregateOutputType | null
    _max: Public_pagesMaxAggregateOutputType | null
  }

  type GetPublic_pagesGroupByPayload<T extends public_pagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Public_pagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Public_pagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Public_pagesGroupByOutputType[P]>
            : GetScalarType<T[P], Public_pagesGroupByOutputType[P]>
        }
      >
    >


  export type public_pagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    parent_menu?: boolean
    order_index?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["public_pages"]>

  export type public_pagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    parent_menu?: boolean
    order_index?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["public_pages"]>

  export type public_pagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    parent_menu?: boolean
    order_index?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["public_pages"]>

  export type public_pagesSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    parent_menu?: boolean
    order_index?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type public_pagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenant_id" | "title" | "slug" | "content" | "parent_menu" | "order_index" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["public_pages"]>

  export type $public_pagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "public_pages"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      title: string
      slug: string
      content: string | null
      parent_menu: string | null
      order_index: number | null
      is_active: boolean | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["public_pages"]>
    composites: {}
  }

  type public_pagesGetPayload<S extends boolean | null | undefined | public_pagesDefaultArgs> = $Result.GetResult<Prisma.$public_pagesPayload, S>

  type public_pagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<public_pagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Public_pagesCountAggregateInputType | true
    }

  export interface public_pagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['public_pages'], meta: { name: 'public_pages' } }
    /**
     * Find zero or one Public_pages that matches the filter.
     * @param {public_pagesFindUniqueArgs} args - Arguments to find a Public_pages
     * @example
     * // Get one Public_pages
     * const public_pages = await prisma.public_pages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends public_pagesFindUniqueArgs>(args: SelectSubset<T, public_pagesFindUniqueArgs<ExtArgs>>): Prisma__public_pagesClient<$Result.GetResult<Prisma.$public_pagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Public_pages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {public_pagesFindUniqueOrThrowArgs} args - Arguments to find a Public_pages
     * @example
     * // Get one Public_pages
     * const public_pages = await prisma.public_pages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends public_pagesFindUniqueOrThrowArgs>(args: SelectSubset<T, public_pagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__public_pagesClient<$Result.GetResult<Prisma.$public_pagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Public_pages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_pagesFindFirstArgs} args - Arguments to find a Public_pages
     * @example
     * // Get one Public_pages
     * const public_pages = await prisma.public_pages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends public_pagesFindFirstArgs>(args?: SelectSubset<T, public_pagesFindFirstArgs<ExtArgs>>): Prisma__public_pagesClient<$Result.GetResult<Prisma.$public_pagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Public_pages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_pagesFindFirstOrThrowArgs} args - Arguments to find a Public_pages
     * @example
     * // Get one Public_pages
     * const public_pages = await prisma.public_pages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends public_pagesFindFirstOrThrowArgs>(args?: SelectSubset<T, public_pagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__public_pagesClient<$Result.GetResult<Prisma.$public_pagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Public_pages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_pagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Public_pages
     * const public_pages = await prisma.public_pages.findMany()
     * 
     * // Get first 10 Public_pages
     * const public_pages = await prisma.public_pages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const public_pagesWithIdOnly = await prisma.public_pages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends public_pagesFindManyArgs>(args?: SelectSubset<T, public_pagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$public_pagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Public_pages.
     * @param {public_pagesCreateArgs} args - Arguments to create a Public_pages.
     * @example
     * // Create one Public_pages
     * const Public_pages = await prisma.public_pages.create({
     *   data: {
     *     // ... data to create a Public_pages
     *   }
     * })
     * 
     */
    create<T extends public_pagesCreateArgs>(args: SelectSubset<T, public_pagesCreateArgs<ExtArgs>>): Prisma__public_pagesClient<$Result.GetResult<Prisma.$public_pagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Public_pages.
     * @param {public_pagesCreateManyArgs} args - Arguments to create many Public_pages.
     * @example
     * // Create many Public_pages
     * const public_pages = await prisma.public_pages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends public_pagesCreateManyArgs>(args?: SelectSubset<T, public_pagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Public_pages and returns the data saved in the database.
     * @param {public_pagesCreateManyAndReturnArgs} args - Arguments to create many Public_pages.
     * @example
     * // Create many Public_pages
     * const public_pages = await prisma.public_pages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Public_pages and only return the `id`
     * const public_pagesWithIdOnly = await prisma.public_pages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends public_pagesCreateManyAndReturnArgs>(args?: SelectSubset<T, public_pagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$public_pagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Public_pages.
     * @param {public_pagesDeleteArgs} args - Arguments to delete one Public_pages.
     * @example
     * // Delete one Public_pages
     * const Public_pages = await prisma.public_pages.delete({
     *   where: {
     *     // ... filter to delete one Public_pages
     *   }
     * })
     * 
     */
    delete<T extends public_pagesDeleteArgs>(args: SelectSubset<T, public_pagesDeleteArgs<ExtArgs>>): Prisma__public_pagesClient<$Result.GetResult<Prisma.$public_pagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Public_pages.
     * @param {public_pagesUpdateArgs} args - Arguments to update one Public_pages.
     * @example
     * // Update one Public_pages
     * const public_pages = await prisma.public_pages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends public_pagesUpdateArgs>(args: SelectSubset<T, public_pagesUpdateArgs<ExtArgs>>): Prisma__public_pagesClient<$Result.GetResult<Prisma.$public_pagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Public_pages.
     * @param {public_pagesDeleteManyArgs} args - Arguments to filter Public_pages to delete.
     * @example
     * // Delete a few Public_pages
     * const { count } = await prisma.public_pages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends public_pagesDeleteManyArgs>(args?: SelectSubset<T, public_pagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Public_pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_pagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Public_pages
     * const public_pages = await prisma.public_pages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends public_pagesUpdateManyArgs>(args: SelectSubset<T, public_pagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Public_pages and returns the data updated in the database.
     * @param {public_pagesUpdateManyAndReturnArgs} args - Arguments to update many Public_pages.
     * @example
     * // Update many Public_pages
     * const public_pages = await prisma.public_pages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Public_pages and only return the `id`
     * const public_pagesWithIdOnly = await prisma.public_pages.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends public_pagesUpdateManyAndReturnArgs>(args: SelectSubset<T, public_pagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$public_pagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Public_pages.
     * @param {public_pagesUpsertArgs} args - Arguments to update or create a Public_pages.
     * @example
     * // Update or create a Public_pages
     * const public_pages = await prisma.public_pages.upsert({
     *   create: {
     *     // ... data to create a Public_pages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Public_pages we want to update
     *   }
     * })
     */
    upsert<T extends public_pagesUpsertArgs>(args: SelectSubset<T, public_pagesUpsertArgs<ExtArgs>>): Prisma__public_pagesClient<$Result.GetResult<Prisma.$public_pagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Public_pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_pagesCountArgs} args - Arguments to filter Public_pages to count.
     * @example
     * // Count the number of Public_pages
     * const count = await prisma.public_pages.count({
     *   where: {
     *     // ... the filter for the Public_pages we want to count
     *   }
     * })
    **/
    count<T extends public_pagesCountArgs>(
      args?: Subset<T, public_pagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Public_pagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Public_pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Public_pagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Public_pagesAggregateArgs>(args: Subset<T, Public_pagesAggregateArgs>): Prisma.PrismaPromise<GetPublic_pagesAggregateType<T>>

    /**
     * Group by Public_pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_pagesGroupByArgs} args - Group by arguments.
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
      T extends public_pagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: public_pagesGroupByArgs['orderBy'] }
        : { orderBy?: public_pagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, public_pagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublic_pagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the public_pages model
   */
  readonly fields: public_pagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for public_pages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__public_pagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the public_pages model
   */
  interface public_pagesFieldRefs {
    readonly id: FieldRef<"public_pages", 'String'>
    readonly tenant_id: FieldRef<"public_pages", 'String'>
    readonly title: FieldRef<"public_pages", 'String'>
    readonly slug: FieldRef<"public_pages", 'String'>
    readonly content: FieldRef<"public_pages", 'String'>
    readonly parent_menu: FieldRef<"public_pages", 'String'>
    readonly order_index: FieldRef<"public_pages", 'Int'>
    readonly is_active: FieldRef<"public_pages", 'Boolean'>
    readonly created_at: FieldRef<"public_pages", 'DateTime'>
    readonly updated_at: FieldRef<"public_pages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * public_pages findUnique
   */
  export type public_pagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_pages
     */
    select?: public_pagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_pages
     */
    omit?: public_pagesOmit<ExtArgs> | null
    /**
     * Filter, which public_pages to fetch.
     */
    where: public_pagesWhereUniqueInput
  }

  /**
   * public_pages findUniqueOrThrow
   */
  export type public_pagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_pages
     */
    select?: public_pagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_pages
     */
    omit?: public_pagesOmit<ExtArgs> | null
    /**
     * Filter, which public_pages to fetch.
     */
    where: public_pagesWhereUniqueInput
  }

  /**
   * public_pages findFirst
   */
  export type public_pagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_pages
     */
    select?: public_pagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_pages
     */
    omit?: public_pagesOmit<ExtArgs> | null
    /**
     * Filter, which public_pages to fetch.
     */
    where?: public_pagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of public_pages to fetch.
     */
    orderBy?: public_pagesOrderByWithRelationInput | public_pagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for public_pages.
     */
    cursor?: public_pagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` public_pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` public_pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of public_pages.
     */
    distinct?: Public_pagesScalarFieldEnum | Public_pagesScalarFieldEnum[]
  }

  /**
   * public_pages findFirstOrThrow
   */
  export type public_pagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_pages
     */
    select?: public_pagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_pages
     */
    omit?: public_pagesOmit<ExtArgs> | null
    /**
     * Filter, which public_pages to fetch.
     */
    where?: public_pagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of public_pages to fetch.
     */
    orderBy?: public_pagesOrderByWithRelationInput | public_pagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for public_pages.
     */
    cursor?: public_pagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` public_pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` public_pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of public_pages.
     */
    distinct?: Public_pagesScalarFieldEnum | Public_pagesScalarFieldEnum[]
  }

  /**
   * public_pages findMany
   */
  export type public_pagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_pages
     */
    select?: public_pagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_pages
     */
    omit?: public_pagesOmit<ExtArgs> | null
    /**
     * Filter, which public_pages to fetch.
     */
    where?: public_pagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of public_pages to fetch.
     */
    orderBy?: public_pagesOrderByWithRelationInput | public_pagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing public_pages.
     */
    cursor?: public_pagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` public_pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` public_pages.
     */
    skip?: number
    distinct?: Public_pagesScalarFieldEnum | Public_pagesScalarFieldEnum[]
  }

  /**
   * public_pages create
   */
  export type public_pagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_pages
     */
    select?: public_pagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_pages
     */
    omit?: public_pagesOmit<ExtArgs> | null
    /**
     * The data needed to create a public_pages.
     */
    data: XOR<public_pagesCreateInput, public_pagesUncheckedCreateInput>
  }

  /**
   * public_pages createMany
   */
  export type public_pagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many public_pages.
     */
    data: public_pagesCreateManyInput | public_pagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * public_pages createManyAndReturn
   */
  export type public_pagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_pages
     */
    select?: public_pagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the public_pages
     */
    omit?: public_pagesOmit<ExtArgs> | null
    /**
     * The data used to create many public_pages.
     */
    data: public_pagesCreateManyInput | public_pagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * public_pages update
   */
  export type public_pagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_pages
     */
    select?: public_pagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_pages
     */
    omit?: public_pagesOmit<ExtArgs> | null
    /**
     * The data needed to update a public_pages.
     */
    data: XOR<public_pagesUpdateInput, public_pagesUncheckedUpdateInput>
    /**
     * Choose, which public_pages to update.
     */
    where: public_pagesWhereUniqueInput
  }

  /**
   * public_pages updateMany
   */
  export type public_pagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update public_pages.
     */
    data: XOR<public_pagesUpdateManyMutationInput, public_pagesUncheckedUpdateManyInput>
    /**
     * Filter which public_pages to update
     */
    where?: public_pagesWhereInput
    /**
     * Limit how many public_pages to update.
     */
    limit?: number
  }

  /**
   * public_pages updateManyAndReturn
   */
  export type public_pagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_pages
     */
    select?: public_pagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the public_pages
     */
    omit?: public_pagesOmit<ExtArgs> | null
    /**
     * The data used to update public_pages.
     */
    data: XOR<public_pagesUpdateManyMutationInput, public_pagesUncheckedUpdateManyInput>
    /**
     * Filter which public_pages to update
     */
    where?: public_pagesWhereInput
    /**
     * Limit how many public_pages to update.
     */
    limit?: number
  }

  /**
   * public_pages upsert
   */
  export type public_pagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_pages
     */
    select?: public_pagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_pages
     */
    omit?: public_pagesOmit<ExtArgs> | null
    /**
     * The filter to search for the public_pages to update in case it exists.
     */
    where: public_pagesWhereUniqueInput
    /**
     * In case the public_pages found by the `where` argument doesn't exist, create a new public_pages with this data.
     */
    create: XOR<public_pagesCreateInput, public_pagesUncheckedCreateInput>
    /**
     * In case the public_pages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<public_pagesUpdateInput, public_pagesUncheckedUpdateInput>
  }

  /**
   * public_pages delete
   */
  export type public_pagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_pages
     */
    select?: public_pagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_pages
     */
    omit?: public_pagesOmit<ExtArgs> | null
    /**
     * Filter which public_pages to delete.
     */
    where: public_pagesWhereUniqueInput
  }

  /**
   * public_pages deleteMany
   */
  export type public_pagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which public_pages to delete
     */
    where?: public_pagesWhereInput
    /**
     * Limit how many public_pages to delete.
     */
    limit?: number
  }

  /**
   * public_pages without action
   */
  export type public_pagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_pages
     */
    select?: public_pagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_pages
     */
    omit?: public_pagesOmit<ExtArgs> | null
  }


  /**
   * Model public_posts
   */

  export type AggregatePublic_posts = {
    _count: Public_postsCountAggregateOutputType | null
    _min: Public_postsMinAggregateOutputType | null
    _max: Public_postsMaxAggregateOutputType | null
  }

  export type Public_postsMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    title: string | null
    slug: string | null
    content: string | null
    image_url: string | null
    category: string | null
    is_pinned: boolean | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Public_postsMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    title: string | null
    slug: string | null
    content: string | null
    image_url: string | null
    category: string | null
    is_pinned: boolean | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Public_postsCountAggregateOutputType = {
    id: number
    tenant_id: number
    title: number
    slug: number
    content: number
    image_url: number
    category: number
    is_pinned: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Public_postsMinAggregateInputType = {
    id?: true
    tenant_id?: true
    title?: true
    slug?: true
    content?: true
    image_url?: true
    category?: true
    is_pinned?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type Public_postsMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    title?: true
    slug?: true
    content?: true
    image_url?: true
    category?: true
    is_pinned?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type Public_postsCountAggregateInputType = {
    id?: true
    tenant_id?: true
    title?: true
    slug?: true
    content?: true
    image_url?: true
    category?: true
    is_pinned?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Public_postsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which public_posts to aggregate.
     */
    where?: public_postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of public_posts to fetch.
     */
    orderBy?: public_postsOrderByWithRelationInput | public_postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: public_postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` public_posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` public_posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned public_posts
    **/
    _count?: true | Public_postsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Public_postsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Public_postsMaxAggregateInputType
  }

  export type GetPublic_postsAggregateType<T extends Public_postsAggregateArgs> = {
        [P in keyof T & keyof AggregatePublic_posts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublic_posts[P]>
      : GetScalarType<T[P], AggregatePublic_posts[P]>
  }




  export type public_postsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: public_postsWhereInput
    orderBy?: public_postsOrderByWithAggregationInput | public_postsOrderByWithAggregationInput[]
    by: Public_postsScalarFieldEnum[] | Public_postsScalarFieldEnum
    having?: public_postsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Public_postsCountAggregateInputType | true
    _min?: Public_postsMinAggregateInputType
    _max?: Public_postsMaxAggregateInputType
  }

  export type Public_postsGroupByOutputType = {
    id: string
    tenant_id: string
    title: string
    slug: string
    content: string | null
    image_url: string | null
    category: string | null
    is_pinned: boolean | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    _count: Public_postsCountAggregateOutputType | null
    _min: Public_postsMinAggregateOutputType | null
    _max: Public_postsMaxAggregateOutputType | null
  }

  type GetPublic_postsGroupByPayload<T extends public_postsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Public_postsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Public_postsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Public_postsGroupByOutputType[P]>
            : GetScalarType<T[P], Public_postsGroupByOutputType[P]>
        }
      >
    >


  export type public_postsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    image_url?: boolean
    category?: boolean
    is_pinned?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["public_posts"]>

  export type public_postsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    image_url?: boolean
    category?: boolean
    is_pinned?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["public_posts"]>

  export type public_postsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    image_url?: boolean
    category?: boolean
    is_pinned?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["public_posts"]>

  export type public_postsSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    image_url?: boolean
    category?: boolean
    is_pinned?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type public_postsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenant_id" | "title" | "slug" | "content" | "image_url" | "category" | "is_pinned" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["public_posts"]>

  export type $public_postsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "public_posts"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      title: string
      slug: string
      content: string | null
      image_url: string | null
      category: string | null
      is_pinned: boolean | null
      is_active: boolean | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["public_posts"]>
    composites: {}
  }

  type public_postsGetPayload<S extends boolean | null | undefined | public_postsDefaultArgs> = $Result.GetResult<Prisma.$public_postsPayload, S>

  type public_postsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<public_postsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Public_postsCountAggregateInputType | true
    }

  export interface public_postsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['public_posts'], meta: { name: 'public_posts' } }
    /**
     * Find zero or one Public_posts that matches the filter.
     * @param {public_postsFindUniqueArgs} args - Arguments to find a Public_posts
     * @example
     * // Get one Public_posts
     * const public_posts = await prisma.public_posts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends public_postsFindUniqueArgs>(args: SelectSubset<T, public_postsFindUniqueArgs<ExtArgs>>): Prisma__public_postsClient<$Result.GetResult<Prisma.$public_postsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Public_posts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {public_postsFindUniqueOrThrowArgs} args - Arguments to find a Public_posts
     * @example
     * // Get one Public_posts
     * const public_posts = await prisma.public_posts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends public_postsFindUniqueOrThrowArgs>(args: SelectSubset<T, public_postsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__public_postsClient<$Result.GetResult<Prisma.$public_postsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Public_posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_postsFindFirstArgs} args - Arguments to find a Public_posts
     * @example
     * // Get one Public_posts
     * const public_posts = await prisma.public_posts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends public_postsFindFirstArgs>(args?: SelectSubset<T, public_postsFindFirstArgs<ExtArgs>>): Prisma__public_postsClient<$Result.GetResult<Prisma.$public_postsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Public_posts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_postsFindFirstOrThrowArgs} args - Arguments to find a Public_posts
     * @example
     * // Get one Public_posts
     * const public_posts = await prisma.public_posts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends public_postsFindFirstOrThrowArgs>(args?: SelectSubset<T, public_postsFindFirstOrThrowArgs<ExtArgs>>): Prisma__public_postsClient<$Result.GetResult<Prisma.$public_postsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Public_posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_postsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Public_posts
     * const public_posts = await prisma.public_posts.findMany()
     * 
     * // Get first 10 Public_posts
     * const public_posts = await prisma.public_posts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const public_postsWithIdOnly = await prisma.public_posts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends public_postsFindManyArgs>(args?: SelectSubset<T, public_postsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$public_postsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Public_posts.
     * @param {public_postsCreateArgs} args - Arguments to create a Public_posts.
     * @example
     * // Create one Public_posts
     * const Public_posts = await prisma.public_posts.create({
     *   data: {
     *     // ... data to create a Public_posts
     *   }
     * })
     * 
     */
    create<T extends public_postsCreateArgs>(args: SelectSubset<T, public_postsCreateArgs<ExtArgs>>): Prisma__public_postsClient<$Result.GetResult<Prisma.$public_postsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Public_posts.
     * @param {public_postsCreateManyArgs} args - Arguments to create many Public_posts.
     * @example
     * // Create many Public_posts
     * const public_posts = await prisma.public_posts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends public_postsCreateManyArgs>(args?: SelectSubset<T, public_postsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Public_posts and returns the data saved in the database.
     * @param {public_postsCreateManyAndReturnArgs} args - Arguments to create many Public_posts.
     * @example
     * // Create many Public_posts
     * const public_posts = await prisma.public_posts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Public_posts and only return the `id`
     * const public_postsWithIdOnly = await prisma.public_posts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends public_postsCreateManyAndReturnArgs>(args?: SelectSubset<T, public_postsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$public_postsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Public_posts.
     * @param {public_postsDeleteArgs} args - Arguments to delete one Public_posts.
     * @example
     * // Delete one Public_posts
     * const Public_posts = await prisma.public_posts.delete({
     *   where: {
     *     // ... filter to delete one Public_posts
     *   }
     * })
     * 
     */
    delete<T extends public_postsDeleteArgs>(args: SelectSubset<T, public_postsDeleteArgs<ExtArgs>>): Prisma__public_postsClient<$Result.GetResult<Prisma.$public_postsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Public_posts.
     * @param {public_postsUpdateArgs} args - Arguments to update one Public_posts.
     * @example
     * // Update one Public_posts
     * const public_posts = await prisma.public_posts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends public_postsUpdateArgs>(args: SelectSubset<T, public_postsUpdateArgs<ExtArgs>>): Prisma__public_postsClient<$Result.GetResult<Prisma.$public_postsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Public_posts.
     * @param {public_postsDeleteManyArgs} args - Arguments to filter Public_posts to delete.
     * @example
     * // Delete a few Public_posts
     * const { count } = await prisma.public_posts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends public_postsDeleteManyArgs>(args?: SelectSubset<T, public_postsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Public_posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_postsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Public_posts
     * const public_posts = await prisma.public_posts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends public_postsUpdateManyArgs>(args: SelectSubset<T, public_postsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Public_posts and returns the data updated in the database.
     * @param {public_postsUpdateManyAndReturnArgs} args - Arguments to update many Public_posts.
     * @example
     * // Update many Public_posts
     * const public_posts = await prisma.public_posts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Public_posts and only return the `id`
     * const public_postsWithIdOnly = await prisma.public_posts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends public_postsUpdateManyAndReturnArgs>(args: SelectSubset<T, public_postsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$public_postsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Public_posts.
     * @param {public_postsUpsertArgs} args - Arguments to update or create a Public_posts.
     * @example
     * // Update or create a Public_posts
     * const public_posts = await prisma.public_posts.upsert({
     *   create: {
     *     // ... data to create a Public_posts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Public_posts we want to update
     *   }
     * })
     */
    upsert<T extends public_postsUpsertArgs>(args: SelectSubset<T, public_postsUpsertArgs<ExtArgs>>): Prisma__public_postsClient<$Result.GetResult<Prisma.$public_postsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Public_posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_postsCountArgs} args - Arguments to filter Public_posts to count.
     * @example
     * // Count the number of Public_posts
     * const count = await prisma.public_posts.count({
     *   where: {
     *     // ... the filter for the Public_posts we want to count
     *   }
     * })
    **/
    count<T extends public_postsCountArgs>(
      args?: Subset<T, public_postsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Public_postsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Public_posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Public_postsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Public_postsAggregateArgs>(args: Subset<T, Public_postsAggregateArgs>): Prisma.PrismaPromise<GetPublic_postsAggregateType<T>>

    /**
     * Group by Public_posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_postsGroupByArgs} args - Group by arguments.
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
      T extends public_postsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: public_postsGroupByArgs['orderBy'] }
        : { orderBy?: public_postsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, public_postsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublic_postsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the public_posts model
   */
  readonly fields: public_postsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for public_posts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__public_postsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the public_posts model
   */
  interface public_postsFieldRefs {
    readonly id: FieldRef<"public_posts", 'String'>
    readonly tenant_id: FieldRef<"public_posts", 'String'>
    readonly title: FieldRef<"public_posts", 'String'>
    readonly slug: FieldRef<"public_posts", 'String'>
    readonly content: FieldRef<"public_posts", 'String'>
    readonly image_url: FieldRef<"public_posts", 'String'>
    readonly category: FieldRef<"public_posts", 'String'>
    readonly is_pinned: FieldRef<"public_posts", 'Boolean'>
    readonly is_active: FieldRef<"public_posts", 'Boolean'>
    readonly created_at: FieldRef<"public_posts", 'DateTime'>
    readonly updated_at: FieldRef<"public_posts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * public_posts findUnique
   */
  export type public_postsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_posts
     */
    select?: public_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_posts
     */
    omit?: public_postsOmit<ExtArgs> | null
    /**
     * Filter, which public_posts to fetch.
     */
    where: public_postsWhereUniqueInput
  }

  /**
   * public_posts findUniqueOrThrow
   */
  export type public_postsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_posts
     */
    select?: public_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_posts
     */
    omit?: public_postsOmit<ExtArgs> | null
    /**
     * Filter, which public_posts to fetch.
     */
    where: public_postsWhereUniqueInput
  }

  /**
   * public_posts findFirst
   */
  export type public_postsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_posts
     */
    select?: public_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_posts
     */
    omit?: public_postsOmit<ExtArgs> | null
    /**
     * Filter, which public_posts to fetch.
     */
    where?: public_postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of public_posts to fetch.
     */
    orderBy?: public_postsOrderByWithRelationInput | public_postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for public_posts.
     */
    cursor?: public_postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` public_posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` public_posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of public_posts.
     */
    distinct?: Public_postsScalarFieldEnum | Public_postsScalarFieldEnum[]
  }

  /**
   * public_posts findFirstOrThrow
   */
  export type public_postsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_posts
     */
    select?: public_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_posts
     */
    omit?: public_postsOmit<ExtArgs> | null
    /**
     * Filter, which public_posts to fetch.
     */
    where?: public_postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of public_posts to fetch.
     */
    orderBy?: public_postsOrderByWithRelationInput | public_postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for public_posts.
     */
    cursor?: public_postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` public_posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` public_posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of public_posts.
     */
    distinct?: Public_postsScalarFieldEnum | Public_postsScalarFieldEnum[]
  }

  /**
   * public_posts findMany
   */
  export type public_postsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_posts
     */
    select?: public_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_posts
     */
    omit?: public_postsOmit<ExtArgs> | null
    /**
     * Filter, which public_posts to fetch.
     */
    where?: public_postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of public_posts to fetch.
     */
    orderBy?: public_postsOrderByWithRelationInput | public_postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing public_posts.
     */
    cursor?: public_postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` public_posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` public_posts.
     */
    skip?: number
    distinct?: Public_postsScalarFieldEnum | Public_postsScalarFieldEnum[]
  }

  /**
   * public_posts create
   */
  export type public_postsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_posts
     */
    select?: public_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_posts
     */
    omit?: public_postsOmit<ExtArgs> | null
    /**
     * The data needed to create a public_posts.
     */
    data: XOR<public_postsCreateInput, public_postsUncheckedCreateInput>
  }

  /**
   * public_posts createMany
   */
  export type public_postsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many public_posts.
     */
    data: public_postsCreateManyInput | public_postsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * public_posts createManyAndReturn
   */
  export type public_postsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_posts
     */
    select?: public_postsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the public_posts
     */
    omit?: public_postsOmit<ExtArgs> | null
    /**
     * The data used to create many public_posts.
     */
    data: public_postsCreateManyInput | public_postsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * public_posts update
   */
  export type public_postsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_posts
     */
    select?: public_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_posts
     */
    omit?: public_postsOmit<ExtArgs> | null
    /**
     * The data needed to update a public_posts.
     */
    data: XOR<public_postsUpdateInput, public_postsUncheckedUpdateInput>
    /**
     * Choose, which public_posts to update.
     */
    where: public_postsWhereUniqueInput
  }

  /**
   * public_posts updateMany
   */
  export type public_postsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update public_posts.
     */
    data: XOR<public_postsUpdateManyMutationInput, public_postsUncheckedUpdateManyInput>
    /**
     * Filter which public_posts to update
     */
    where?: public_postsWhereInput
    /**
     * Limit how many public_posts to update.
     */
    limit?: number
  }

  /**
   * public_posts updateManyAndReturn
   */
  export type public_postsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_posts
     */
    select?: public_postsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the public_posts
     */
    omit?: public_postsOmit<ExtArgs> | null
    /**
     * The data used to update public_posts.
     */
    data: XOR<public_postsUpdateManyMutationInput, public_postsUncheckedUpdateManyInput>
    /**
     * Filter which public_posts to update
     */
    where?: public_postsWhereInput
    /**
     * Limit how many public_posts to update.
     */
    limit?: number
  }

  /**
   * public_posts upsert
   */
  export type public_postsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_posts
     */
    select?: public_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_posts
     */
    omit?: public_postsOmit<ExtArgs> | null
    /**
     * The filter to search for the public_posts to update in case it exists.
     */
    where: public_postsWhereUniqueInput
    /**
     * In case the public_posts found by the `where` argument doesn't exist, create a new public_posts with this data.
     */
    create: XOR<public_postsCreateInput, public_postsUncheckedCreateInput>
    /**
     * In case the public_posts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<public_postsUpdateInput, public_postsUncheckedUpdateInput>
  }

  /**
   * public_posts delete
   */
  export type public_postsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_posts
     */
    select?: public_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_posts
     */
    omit?: public_postsOmit<ExtArgs> | null
    /**
     * Filter which public_posts to delete.
     */
    where: public_postsWhereUniqueInput
  }

  /**
   * public_posts deleteMany
   */
  export type public_postsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which public_posts to delete
     */
    where?: public_postsWhereInput
    /**
     * Limit how many public_posts to delete.
     */
    limit?: number
  }

  /**
   * public_posts without action
   */
  export type public_postsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_posts
     */
    select?: public_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_posts
     */
    omit?: public_postsOmit<ExtArgs> | null
  }


  /**
   * Model public_settings
   */

  export type AggregatePublic_settings = {
    _count: Public_settingsCountAggregateOutputType | null
    _min: Public_settingsMinAggregateOutputType | null
    _max: Public_settingsMaxAggregateOutputType | null
  }

  export type Public_settingsMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    key: string | null
    value: string | null
    category: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Public_settingsMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    key: string | null
    value: string | null
    category: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Public_settingsCountAggregateOutputType = {
    id: number
    tenant_id: number
    key: number
    value: number
    category: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Public_settingsMinAggregateInputType = {
    id?: true
    tenant_id?: true
    key?: true
    value?: true
    category?: true
    created_at?: true
    updated_at?: true
  }

  export type Public_settingsMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    key?: true
    value?: true
    category?: true
    created_at?: true
    updated_at?: true
  }

  export type Public_settingsCountAggregateInputType = {
    id?: true
    tenant_id?: true
    key?: true
    value?: true
    category?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Public_settingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which public_settings to aggregate.
     */
    where?: public_settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of public_settings to fetch.
     */
    orderBy?: public_settingsOrderByWithRelationInput | public_settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: public_settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` public_settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` public_settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned public_settings
    **/
    _count?: true | Public_settingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Public_settingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Public_settingsMaxAggregateInputType
  }

  export type GetPublic_settingsAggregateType<T extends Public_settingsAggregateArgs> = {
        [P in keyof T & keyof AggregatePublic_settings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublic_settings[P]>
      : GetScalarType<T[P], AggregatePublic_settings[P]>
  }




  export type public_settingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: public_settingsWhereInput
    orderBy?: public_settingsOrderByWithAggregationInput | public_settingsOrderByWithAggregationInput[]
    by: Public_settingsScalarFieldEnum[] | Public_settingsScalarFieldEnum
    having?: public_settingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Public_settingsCountAggregateInputType | true
    _min?: Public_settingsMinAggregateInputType
    _max?: Public_settingsMaxAggregateInputType
  }

  export type Public_settingsGroupByOutputType = {
    id: string
    tenant_id: string
    key: string
    value: string | null
    category: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: Public_settingsCountAggregateOutputType | null
    _min: Public_settingsMinAggregateOutputType | null
    _max: Public_settingsMaxAggregateOutputType | null
  }

  type GetPublic_settingsGroupByPayload<T extends public_settingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Public_settingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Public_settingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Public_settingsGroupByOutputType[P]>
            : GetScalarType<T[P], Public_settingsGroupByOutputType[P]>
        }
      >
    >


  export type public_settingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    key?: boolean
    value?: boolean
    category?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["public_settings"]>

  export type public_settingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    key?: boolean
    value?: boolean
    category?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["public_settings"]>

  export type public_settingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    key?: boolean
    value?: boolean
    category?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["public_settings"]>

  export type public_settingsSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    key?: boolean
    value?: boolean
    category?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type public_settingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenant_id" | "key" | "value" | "category" | "created_at" | "updated_at", ExtArgs["result"]["public_settings"]>

  export type $public_settingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "public_settings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      key: string
      value: string | null
      category: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["public_settings"]>
    composites: {}
  }

  type public_settingsGetPayload<S extends boolean | null | undefined | public_settingsDefaultArgs> = $Result.GetResult<Prisma.$public_settingsPayload, S>

  type public_settingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<public_settingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Public_settingsCountAggregateInputType | true
    }

  export interface public_settingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['public_settings'], meta: { name: 'public_settings' } }
    /**
     * Find zero or one Public_settings that matches the filter.
     * @param {public_settingsFindUniqueArgs} args - Arguments to find a Public_settings
     * @example
     * // Get one Public_settings
     * const public_settings = await prisma.public_settings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends public_settingsFindUniqueArgs>(args: SelectSubset<T, public_settingsFindUniqueArgs<ExtArgs>>): Prisma__public_settingsClient<$Result.GetResult<Prisma.$public_settingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Public_settings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {public_settingsFindUniqueOrThrowArgs} args - Arguments to find a Public_settings
     * @example
     * // Get one Public_settings
     * const public_settings = await prisma.public_settings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends public_settingsFindUniqueOrThrowArgs>(args: SelectSubset<T, public_settingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__public_settingsClient<$Result.GetResult<Prisma.$public_settingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Public_settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_settingsFindFirstArgs} args - Arguments to find a Public_settings
     * @example
     * // Get one Public_settings
     * const public_settings = await prisma.public_settings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends public_settingsFindFirstArgs>(args?: SelectSubset<T, public_settingsFindFirstArgs<ExtArgs>>): Prisma__public_settingsClient<$Result.GetResult<Prisma.$public_settingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Public_settings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_settingsFindFirstOrThrowArgs} args - Arguments to find a Public_settings
     * @example
     * // Get one Public_settings
     * const public_settings = await prisma.public_settings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends public_settingsFindFirstOrThrowArgs>(args?: SelectSubset<T, public_settingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__public_settingsClient<$Result.GetResult<Prisma.$public_settingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Public_settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_settingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Public_settings
     * const public_settings = await prisma.public_settings.findMany()
     * 
     * // Get first 10 Public_settings
     * const public_settings = await prisma.public_settings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const public_settingsWithIdOnly = await prisma.public_settings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends public_settingsFindManyArgs>(args?: SelectSubset<T, public_settingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$public_settingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Public_settings.
     * @param {public_settingsCreateArgs} args - Arguments to create a Public_settings.
     * @example
     * // Create one Public_settings
     * const Public_settings = await prisma.public_settings.create({
     *   data: {
     *     // ... data to create a Public_settings
     *   }
     * })
     * 
     */
    create<T extends public_settingsCreateArgs>(args: SelectSubset<T, public_settingsCreateArgs<ExtArgs>>): Prisma__public_settingsClient<$Result.GetResult<Prisma.$public_settingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Public_settings.
     * @param {public_settingsCreateManyArgs} args - Arguments to create many Public_settings.
     * @example
     * // Create many Public_settings
     * const public_settings = await prisma.public_settings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends public_settingsCreateManyArgs>(args?: SelectSubset<T, public_settingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Public_settings and returns the data saved in the database.
     * @param {public_settingsCreateManyAndReturnArgs} args - Arguments to create many Public_settings.
     * @example
     * // Create many Public_settings
     * const public_settings = await prisma.public_settings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Public_settings and only return the `id`
     * const public_settingsWithIdOnly = await prisma.public_settings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends public_settingsCreateManyAndReturnArgs>(args?: SelectSubset<T, public_settingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$public_settingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Public_settings.
     * @param {public_settingsDeleteArgs} args - Arguments to delete one Public_settings.
     * @example
     * // Delete one Public_settings
     * const Public_settings = await prisma.public_settings.delete({
     *   where: {
     *     // ... filter to delete one Public_settings
     *   }
     * })
     * 
     */
    delete<T extends public_settingsDeleteArgs>(args: SelectSubset<T, public_settingsDeleteArgs<ExtArgs>>): Prisma__public_settingsClient<$Result.GetResult<Prisma.$public_settingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Public_settings.
     * @param {public_settingsUpdateArgs} args - Arguments to update one Public_settings.
     * @example
     * // Update one Public_settings
     * const public_settings = await prisma.public_settings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends public_settingsUpdateArgs>(args: SelectSubset<T, public_settingsUpdateArgs<ExtArgs>>): Prisma__public_settingsClient<$Result.GetResult<Prisma.$public_settingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Public_settings.
     * @param {public_settingsDeleteManyArgs} args - Arguments to filter Public_settings to delete.
     * @example
     * // Delete a few Public_settings
     * const { count } = await prisma.public_settings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends public_settingsDeleteManyArgs>(args?: SelectSubset<T, public_settingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Public_settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_settingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Public_settings
     * const public_settings = await prisma.public_settings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends public_settingsUpdateManyArgs>(args: SelectSubset<T, public_settingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Public_settings and returns the data updated in the database.
     * @param {public_settingsUpdateManyAndReturnArgs} args - Arguments to update many Public_settings.
     * @example
     * // Update many Public_settings
     * const public_settings = await prisma.public_settings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Public_settings and only return the `id`
     * const public_settingsWithIdOnly = await prisma.public_settings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends public_settingsUpdateManyAndReturnArgs>(args: SelectSubset<T, public_settingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$public_settingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Public_settings.
     * @param {public_settingsUpsertArgs} args - Arguments to update or create a Public_settings.
     * @example
     * // Update or create a Public_settings
     * const public_settings = await prisma.public_settings.upsert({
     *   create: {
     *     // ... data to create a Public_settings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Public_settings we want to update
     *   }
     * })
     */
    upsert<T extends public_settingsUpsertArgs>(args: SelectSubset<T, public_settingsUpsertArgs<ExtArgs>>): Prisma__public_settingsClient<$Result.GetResult<Prisma.$public_settingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Public_settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_settingsCountArgs} args - Arguments to filter Public_settings to count.
     * @example
     * // Count the number of Public_settings
     * const count = await prisma.public_settings.count({
     *   where: {
     *     // ... the filter for the Public_settings we want to count
     *   }
     * })
    **/
    count<T extends public_settingsCountArgs>(
      args?: Subset<T, public_settingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Public_settingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Public_settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Public_settingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Public_settingsAggregateArgs>(args: Subset<T, Public_settingsAggregateArgs>): Prisma.PrismaPromise<GetPublic_settingsAggregateType<T>>

    /**
     * Group by Public_settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_settingsGroupByArgs} args - Group by arguments.
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
      T extends public_settingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: public_settingsGroupByArgs['orderBy'] }
        : { orderBy?: public_settingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, public_settingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublic_settingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the public_settings model
   */
  readonly fields: public_settingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for public_settings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__public_settingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the public_settings model
   */
  interface public_settingsFieldRefs {
    readonly id: FieldRef<"public_settings", 'String'>
    readonly tenant_id: FieldRef<"public_settings", 'String'>
    readonly key: FieldRef<"public_settings", 'String'>
    readonly value: FieldRef<"public_settings", 'String'>
    readonly category: FieldRef<"public_settings", 'String'>
    readonly created_at: FieldRef<"public_settings", 'DateTime'>
    readonly updated_at: FieldRef<"public_settings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * public_settings findUnique
   */
  export type public_settingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_settings
     */
    select?: public_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_settings
     */
    omit?: public_settingsOmit<ExtArgs> | null
    /**
     * Filter, which public_settings to fetch.
     */
    where: public_settingsWhereUniqueInput
  }

  /**
   * public_settings findUniqueOrThrow
   */
  export type public_settingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_settings
     */
    select?: public_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_settings
     */
    omit?: public_settingsOmit<ExtArgs> | null
    /**
     * Filter, which public_settings to fetch.
     */
    where: public_settingsWhereUniqueInput
  }

  /**
   * public_settings findFirst
   */
  export type public_settingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_settings
     */
    select?: public_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_settings
     */
    omit?: public_settingsOmit<ExtArgs> | null
    /**
     * Filter, which public_settings to fetch.
     */
    where?: public_settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of public_settings to fetch.
     */
    orderBy?: public_settingsOrderByWithRelationInput | public_settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for public_settings.
     */
    cursor?: public_settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` public_settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` public_settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of public_settings.
     */
    distinct?: Public_settingsScalarFieldEnum | Public_settingsScalarFieldEnum[]
  }

  /**
   * public_settings findFirstOrThrow
   */
  export type public_settingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_settings
     */
    select?: public_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_settings
     */
    omit?: public_settingsOmit<ExtArgs> | null
    /**
     * Filter, which public_settings to fetch.
     */
    where?: public_settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of public_settings to fetch.
     */
    orderBy?: public_settingsOrderByWithRelationInput | public_settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for public_settings.
     */
    cursor?: public_settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` public_settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` public_settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of public_settings.
     */
    distinct?: Public_settingsScalarFieldEnum | Public_settingsScalarFieldEnum[]
  }

  /**
   * public_settings findMany
   */
  export type public_settingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_settings
     */
    select?: public_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_settings
     */
    omit?: public_settingsOmit<ExtArgs> | null
    /**
     * Filter, which public_settings to fetch.
     */
    where?: public_settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of public_settings to fetch.
     */
    orderBy?: public_settingsOrderByWithRelationInput | public_settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing public_settings.
     */
    cursor?: public_settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` public_settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` public_settings.
     */
    skip?: number
    distinct?: Public_settingsScalarFieldEnum | Public_settingsScalarFieldEnum[]
  }

  /**
   * public_settings create
   */
  export type public_settingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_settings
     */
    select?: public_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_settings
     */
    omit?: public_settingsOmit<ExtArgs> | null
    /**
     * The data needed to create a public_settings.
     */
    data: XOR<public_settingsCreateInput, public_settingsUncheckedCreateInput>
  }

  /**
   * public_settings createMany
   */
  export type public_settingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many public_settings.
     */
    data: public_settingsCreateManyInput | public_settingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * public_settings createManyAndReturn
   */
  export type public_settingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_settings
     */
    select?: public_settingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the public_settings
     */
    omit?: public_settingsOmit<ExtArgs> | null
    /**
     * The data used to create many public_settings.
     */
    data: public_settingsCreateManyInput | public_settingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * public_settings update
   */
  export type public_settingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_settings
     */
    select?: public_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_settings
     */
    omit?: public_settingsOmit<ExtArgs> | null
    /**
     * The data needed to update a public_settings.
     */
    data: XOR<public_settingsUpdateInput, public_settingsUncheckedUpdateInput>
    /**
     * Choose, which public_settings to update.
     */
    where: public_settingsWhereUniqueInput
  }

  /**
   * public_settings updateMany
   */
  export type public_settingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update public_settings.
     */
    data: XOR<public_settingsUpdateManyMutationInput, public_settingsUncheckedUpdateManyInput>
    /**
     * Filter which public_settings to update
     */
    where?: public_settingsWhereInput
    /**
     * Limit how many public_settings to update.
     */
    limit?: number
  }

  /**
   * public_settings updateManyAndReturn
   */
  export type public_settingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_settings
     */
    select?: public_settingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the public_settings
     */
    omit?: public_settingsOmit<ExtArgs> | null
    /**
     * The data used to update public_settings.
     */
    data: XOR<public_settingsUpdateManyMutationInput, public_settingsUncheckedUpdateManyInput>
    /**
     * Filter which public_settings to update
     */
    where?: public_settingsWhereInput
    /**
     * Limit how many public_settings to update.
     */
    limit?: number
  }

  /**
   * public_settings upsert
   */
  export type public_settingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_settings
     */
    select?: public_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_settings
     */
    omit?: public_settingsOmit<ExtArgs> | null
    /**
     * The filter to search for the public_settings to update in case it exists.
     */
    where: public_settingsWhereUniqueInput
    /**
     * In case the public_settings found by the `where` argument doesn't exist, create a new public_settings with this data.
     */
    create: XOR<public_settingsCreateInput, public_settingsUncheckedCreateInput>
    /**
     * In case the public_settings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<public_settingsUpdateInput, public_settingsUncheckedUpdateInput>
  }

  /**
   * public_settings delete
   */
  export type public_settingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_settings
     */
    select?: public_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_settings
     */
    omit?: public_settingsOmit<ExtArgs> | null
    /**
     * Filter which public_settings to delete.
     */
    where: public_settingsWhereUniqueInput
  }

  /**
   * public_settings deleteMany
   */
  export type public_settingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which public_settings to delete
     */
    where?: public_settingsWhereInput
    /**
     * Limit how many public_settings to delete.
     */
    limit?: number
  }

  /**
   * public_settings without action
   */
  export type public_settingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_settings
     */
    select?: public_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_settings
     */
    omit?: public_settingsOmit<ExtArgs> | null
  }


  /**
   * Model public_sliders
   */

  export type AggregatePublic_sliders = {
    _count: Public_slidersCountAggregateOutputType | null
    _avg: Public_slidersAvgAggregateOutputType | null
    _sum: Public_slidersSumAggregateOutputType | null
    _min: Public_slidersMinAggregateOutputType | null
    _max: Public_slidersMaxAggregateOutputType | null
  }

  export type Public_slidersAvgAggregateOutputType = {
    order_index: number | null
  }

  export type Public_slidersSumAggregateOutputType = {
    order_index: number | null
  }

  export type Public_slidersMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    title: string | null
    description: string | null
    image_url: string | null
    order_index: number | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Public_slidersMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    title: string | null
    description: string | null
    image_url: string | null
    order_index: number | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Public_slidersCountAggregateOutputType = {
    id: number
    tenant_id: number
    title: number
    description: number
    image_url: number
    order_index: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Public_slidersAvgAggregateInputType = {
    order_index?: true
  }

  export type Public_slidersSumAggregateInputType = {
    order_index?: true
  }

  export type Public_slidersMinAggregateInputType = {
    id?: true
    tenant_id?: true
    title?: true
    description?: true
    image_url?: true
    order_index?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type Public_slidersMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    title?: true
    description?: true
    image_url?: true
    order_index?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type Public_slidersCountAggregateInputType = {
    id?: true
    tenant_id?: true
    title?: true
    description?: true
    image_url?: true
    order_index?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Public_slidersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which public_sliders to aggregate.
     */
    where?: public_slidersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of public_sliders to fetch.
     */
    orderBy?: public_slidersOrderByWithRelationInput | public_slidersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: public_slidersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` public_sliders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` public_sliders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned public_sliders
    **/
    _count?: true | Public_slidersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Public_slidersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Public_slidersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Public_slidersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Public_slidersMaxAggregateInputType
  }

  export type GetPublic_slidersAggregateType<T extends Public_slidersAggregateArgs> = {
        [P in keyof T & keyof AggregatePublic_sliders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublic_sliders[P]>
      : GetScalarType<T[P], AggregatePublic_sliders[P]>
  }




  export type public_slidersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: public_slidersWhereInput
    orderBy?: public_slidersOrderByWithAggregationInput | public_slidersOrderByWithAggregationInput[]
    by: Public_slidersScalarFieldEnum[] | Public_slidersScalarFieldEnum
    having?: public_slidersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Public_slidersCountAggregateInputType | true
    _avg?: Public_slidersAvgAggregateInputType
    _sum?: Public_slidersSumAggregateInputType
    _min?: Public_slidersMinAggregateInputType
    _max?: Public_slidersMaxAggregateInputType
  }

  export type Public_slidersGroupByOutputType = {
    id: string
    tenant_id: string
    title: string | null
    description: string | null
    image_url: string
    order_index: number | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    _count: Public_slidersCountAggregateOutputType | null
    _avg: Public_slidersAvgAggregateOutputType | null
    _sum: Public_slidersSumAggregateOutputType | null
    _min: Public_slidersMinAggregateOutputType | null
    _max: Public_slidersMaxAggregateOutputType | null
  }

  type GetPublic_slidersGroupByPayload<T extends public_slidersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Public_slidersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Public_slidersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Public_slidersGroupByOutputType[P]>
            : GetScalarType<T[P], Public_slidersGroupByOutputType[P]>
        }
      >
    >


  export type public_slidersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    title?: boolean
    description?: boolean
    image_url?: boolean
    order_index?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["public_sliders"]>

  export type public_slidersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    title?: boolean
    description?: boolean
    image_url?: boolean
    order_index?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["public_sliders"]>

  export type public_slidersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    title?: boolean
    description?: boolean
    image_url?: boolean
    order_index?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["public_sliders"]>

  export type public_slidersSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    title?: boolean
    description?: boolean
    image_url?: boolean
    order_index?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type public_slidersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenant_id" | "title" | "description" | "image_url" | "order_index" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["public_sliders"]>

  export type $public_slidersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "public_sliders"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      title: string | null
      description: string | null
      image_url: string
      order_index: number | null
      is_active: boolean | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["public_sliders"]>
    composites: {}
  }

  type public_slidersGetPayload<S extends boolean | null | undefined | public_slidersDefaultArgs> = $Result.GetResult<Prisma.$public_slidersPayload, S>

  type public_slidersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<public_slidersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Public_slidersCountAggregateInputType | true
    }

  export interface public_slidersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['public_sliders'], meta: { name: 'public_sliders' } }
    /**
     * Find zero or one Public_sliders that matches the filter.
     * @param {public_slidersFindUniqueArgs} args - Arguments to find a Public_sliders
     * @example
     * // Get one Public_sliders
     * const public_sliders = await prisma.public_sliders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends public_slidersFindUniqueArgs>(args: SelectSubset<T, public_slidersFindUniqueArgs<ExtArgs>>): Prisma__public_slidersClient<$Result.GetResult<Prisma.$public_slidersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Public_sliders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {public_slidersFindUniqueOrThrowArgs} args - Arguments to find a Public_sliders
     * @example
     * // Get one Public_sliders
     * const public_sliders = await prisma.public_sliders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends public_slidersFindUniqueOrThrowArgs>(args: SelectSubset<T, public_slidersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__public_slidersClient<$Result.GetResult<Prisma.$public_slidersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Public_sliders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_slidersFindFirstArgs} args - Arguments to find a Public_sliders
     * @example
     * // Get one Public_sliders
     * const public_sliders = await prisma.public_sliders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends public_slidersFindFirstArgs>(args?: SelectSubset<T, public_slidersFindFirstArgs<ExtArgs>>): Prisma__public_slidersClient<$Result.GetResult<Prisma.$public_slidersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Public_sliders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_slidersFindFirstOrThrowArgs} args - Arguments to find a Public_sliders
     * @example
     * // Get one Public_sliders
     * const public_sliders = await prisma.public_sliders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends public_slidersFindFirstOrThrowArgs>(args?: SelectSubset<T, public_slidersFindFirstOrThrowArgs<ExtArgs>>): Prisma__public_slidersClient<$Result.GetResult<Prisma.$public_slidersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Public_sliders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_slidersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Public_sliders
     * const public_sliders = await prisma.public_sliders.findMany()
     * 
     * // Get first 10 Public_sliders
     * const public_sliders = await prisma.public_sliders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const public_slidersWithIdOnly = await prisma.public_sliders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends public_slidersFindManyArgs>(args?: SelectSubset<T, public_slidersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$public_slidersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Public_sliders.
     * @param {public_slidersCreateArgs} args - Arguments to create a Public_sliders.
     * @example
     * // Create one Public_sliders
     * const Public_sliders = await prisma.public_sliders.create({
     *   data: {
     *     // ... data to create a Public_sliders
     *   }
     * })
     * 
     */
    create<T extends public_slidersCreateArgs>(args: SelectSubset<T, public_slidersCreateArgs<ExtArgs>>): Prisma__public_slidersClient<$Result.GetResult<Prisma.$public_slidersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Public_sliders.
     * @param {public_slidersCreateManyArgs} args - Arguments to create many Public_sliders.
     * @example
     * // Create many Public_sliders
     * const public_sliders = await prisma.public_sliders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends public_slidersCreateManyArgs>(args?: SelectSubset<T, public_slidersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Public_sliders and returns the data saved in the database.
     * @param {public_slidersCreateManyAndReturnArgs} args - Arguments to create many Public_sliders.
     * @example
     * // Create many Public_sliders
     * const public_sliders = await prisma.public_sliders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Public_sliders and only return the `id`
     * const public_slidersWithIdOnly = await prisma.public_sliders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends public_slidersCreateManyAndReturnArgs>(args?: SelectSubset<T, public_slidersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$public_slidersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Public_sliders.
     * @param {public_slidersDeleteArgs} args - Arguments to delete one Public_sliders.
     * @example
     * // Delete one Public_sliders
     * const Public_sliders = await prisma.public_sliders.delete({
     *   where: {
     *     // ... filter to delete one Public_sliders
     *   }
     * })
     * 
     */
    delete<T extends public_slidersDeleteArgs>(args: SelectSubset<T, public_slidersDeleteArgs<ExtArgs>>): Prisma__public_slidersClient<$Result.GetResult<Prisma.$public_slidersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Public_sliders.
     * @param {public_slidersUpdateArgs} args - Arguments to update one Public_sliders.
     * @example
     * // Update one Public_sliders
     * const public_sliders = await prisma.public_sliders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends public_slidersUpdateArgs>(args: SelectSubset<T, public_slidersUpdateArgs<ExtArgs>>): Prisma__public_slidersClient<$Result.GetResult<Prisma.$public_slidersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Public_sliders.
     * @param {public_slidersDeleteManyArgs} args - Arguments to filter Public_sliders to delete.
     * @example
     * // Delete a few Public_sliders
     * const { count } = await prisma.public_sliders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends public_slidersDeleteManyArgs>(args?: SelectSubset<T, public_slidersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Public_sliders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_slidersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Public_sliders
     * const public_sliders = await prisma.public_sliders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends public_slidersUpdateManyArgs>(args: SelectSubset<T, public_slidersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Public_sliders and returns the data updated in the database.
     * @param {public_slidersUpdateManyAndReturnArgs} args - Arguments to update many Public_sliders.
     * @example
     * // Update many Public_sliders
     * const public_sliders = await prisma.public_sliders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Public_sliders and only return the `id`
     * const public_slidersWithIdOnly = await prisma.public_sliders.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends public_slidersUpdateManyAndReturnArgs>(args: SelectSubset<T, public_slidersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$public_slidersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Public_sliders.
     * @param {public_slidersUpsertArgs} args - Arguments to update or create a Public_sliders.
     * @example
     * // Update or create a Public_sliders
     * const public_sliders = await prisma.public_sliders.upsert({
     *   create: {
     *     // ... data to create a Public_sliders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Public_sliders we want to update
     *   }
     * })
     */
    upsert<T extends public_slidersUpsertArgs>(args: SelectSubset<T, public_slidersUpsertArgs<ExtArgs>>): Prisma__public_slidersClient<$Result.GetResult<Prisma.$public_slidersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Public_sliders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_slidersCountArgs} args - Arguments to filter Public_sliders to count.
     * @example
     * // Count the number of Public_sliders
     * const count = await prisma.public_sliders.count({
     *   where: {
     *     // ... the filter for the Public_sliders we want to count
     *   }
     * })
    **/
    count<T extends public_slidersCountArgs>(
      args?: Subset<T, public_slidersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Public_slidersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Public_sliders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Public_slidersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Public_slidersAggregateArgs>(args: Subset<T, Public_slidersAggregateArgs>): Prisma.PrismaPromise<GetPublic_slidersAggregateType<T>>

    /**
     * Group by Public_sliders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_slidersGroupByArgs} args - Group by arguments.
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
      T extends public_slidersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: public_slidersGroupByArgs['orderBy'] }
        : { orderBy?: public_slidersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, public_slidersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublic_slidersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the public_sliders model
   */
  readonly fields: public_slidersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for public_sliders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__public_slidersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the public_sliders model
   */
  interface public_slidersFieldRefs {
    readonly id: FieldRef<"public_sliders", 'String'>
    readonly tenant_id: FieldRef<"public_sliders", 'String'>
    readonly title: FieldRef<"public_sliders", 'String'>
    readonly description: FieldRef<"public_sliders", 'String'>
    readonly image_url: FieldRef<"public_sliders", 'String'>
    readonly order_index: FieldRef<"public_sliders", 'Int'>
    readonly is_active: FieldRef<"public_sliders", 'Boolean'>
    readonly created_at: FieldRef<"public_sliders", 'DateTime'>
    readonly updated_at: FieldRef<"public_sliders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * public_sliders findUnique
   */
  export type public_slidersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_sliders
     */
    select?: public_slidersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_sliders
     */
    omit?: public_slidersOmit<ExtArgs> | null
    /**
     * Filter, which public_sliders to fetch.
     */
    where: public_slidersWhereUniqueInput
  }

  /**
   * public_sliders findUniqueOrThrow
   */
  export type public_slidersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_sliders
     */
    select?: public_slidersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_sliders
     */
    omit?: public_slidersOmit<ExtArgs> | null
    /**
     * Filter, which public_sliders to fetch.
     */
    where: public_slidersWhereUniqueInput
  }

  /**
   * public_sliders findFirst
   */
  export type public_slidersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_sliders
     */
    select?: public_slidersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_sliders
     */
    omit?: public_slidersOmit<ExtArgs> | null
    /**
     * Filter, which public_sliders to fetch.
     */
    where?: public_slidersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of public_sliders to fetch.
     */
    orderBy?: public_slidersOrderByWithRelationInput | public_slidersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for public_sliders.
     */
    cursor?: public_slidersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` public_sliders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` public_sliders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of public_sliders.
     */
    distinct?: Public_slidersScalarFieldEnum | Public_slidersScalarFieldEnum[]
  }

  /**
   * public_sliders findFirstOrThrow
   */
  export type public_slidersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_sliders
     */
    select?: public_slidersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_sliders
     */
    omit?: public_slidersOmit<ExtArgs> | null
    /**
     * Filter, which public_sliders to fetch.
     */
    where?: public_slidersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of public_sliders to fetch.
     */
    orderBy?: public_slidersOrderByWithRelationInput | public_slidersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for public_sliders.
     */
    cursor?: public_slidersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` public_sliders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` public_sliders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of public_sliders.
     */
    distinct?: Public_slidersScalarFieldEnum | Public_slidersScalarFieldEnum[]
  }

  /**
   * public_sliders findMany
   */
  export type public_slidersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_sliders
     */
    select?: public_slidersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_sliders
     */
    omit?: public_slidersOmit<ExtArgs> | null
    /**
     * Filter, which public_sliders to fetch.
     */
    where?: public_slidersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of public_sliders to fetch.
     */
    orderBy?: public_slidersOrderByWithRelationInput | public_slidersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing public_sliders.
     */
    cursor?: public_slidersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` public_sliders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` public_sliders.
     */
    skip?: number
    distinct?: Public_slidersScalarFieldEnum | Public_slidersScalarFieldEnum[]
  }

  /**
   * public_sliders create
   */
  export type public_slidersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_sliders
     */
    select?: public_slidersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_sliders
     */
    omit?: public_slidersOmit<ExtArgs> | null
    /**
     * The data needed to create a public_sliders.
     */
    data: XOR<public_slidersCreateInput, public_slidersUncheckedCreateInput>
  }

  /**
   * public_sliders createMany
   */
  export type public_slidersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many public_sliders.
     */
    data: public_slidersCreateManyInput | public_slidersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * public_sliders createManyAndReturn
   */
  export type public_slidersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_sliders
     */
    select?: public_slidersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the public_sliders
     */
    omit?: public_slidersOmit<ExtArgs> | null
    /**
     * The data used to create many public_sliders.
     */
    data: public_slidersCreateManyInput | public_slidersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * public_sliders update
   */
  export type public_slidersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_sliders
     */
    select?: public_slidersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_sliders
     */
    omit?: public_slidersOmit<ExtArgs> | null
    /**
     * The data needed to update a public_sliders.
     */
    data: XOR<public_slidersUpdateInput, public_slidersUncheckedUpdateInput>
    /**
     * Choose, which public_sliders to update.
     */
    where: public_slidersWhereUniqueInput
  }

  /**
   * public_sliders updateMany
   */
  export type public_slidersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update public_sliders.
     */
    data: XOR<public_slidersUpdateManyMutationInput, public_slidersUncheckedUpdateManyInput>
    /**
     * Filter which public_sliders to update
     */
    where?: public_slidersWhereInput
    /**
     * Limit how many public_sliders to update.
     */
    limit?: number
  }

  /**
   * public_sliders updateManyAndReturn
   */
  export type public_slidersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_sliders
     */
    select?: public_slidersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the public_sliders
     */
    omit?: public_slidersOmit<ExtArgs> | null
    /**
     * The data used to update public_sliders.
     */
    data: XOR<public_slidersUpdateManyMutationInput, public_slidersUncheckedUpdateManyInput>
    /**
     * Filter which public_sliders to update
     */
    where?: public_slidersWhereInput
    /**
     * Limit how many public_sliders to update.
     */
    limit?: number
  }

  /**
   * public_sliders upsert
   */
  export type public_slidersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_sliders
     */
    select?: public_slidersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_sliders
     */
    omit?: public_slidersOmit<ExtArgs> | null
    /**
     * The filter to search for the public_sliders to update in case it exists.
     */
    where: public_slidersWhereUniqueInput
    /**
     * In case the public_sliders found by the `where` argument doesn't exist, create a new public_sliders with this data.
     */
    create: XOR<public_slidersCreateInput, public_slidersUncheckedCreateInput>
    /**
     * In case the public_sliders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<public_slidersUpdateInput, public_slidersUncheckedUpdateInput>
  }

  /**
   * public_sliders delete
   */
  export type public_slidersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_sliders
     */
    select?: public_slidersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_sliders
     */
    omit?: public_slidersOmit<ExtArgs> | null
    /**
     * Filter which public_sliders to delete.
     */
    where: public_slidersWhereUniqueInput
  }

  /**
   * public_sliders deleteMany
   */
  export type public_slidersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which public_sliders to delete
     */
    where?: public_slidersWhereInput
    /**
     * Limit how many public_sliders to delete.
     */
    limit?: number
  }

  /**
   * public_sliders without action
   */
  export type public_slidersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_sliders
     */
    select?: public_slidersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_sliders
     */
    omit?: public_slidersOmit<ExtArgs> | null
  }


  /**
   * Model public_videos
   */

  export type AggregatePublic_videos = {
    _count: Public_videosCountAggregateOutputType | null
    _avg: Public_videosAvgAggregateOutputType | null
    _sum: Public_videosSumAggregateOutputType | null
    _min: Public_videosMinAggregateOutputType | null
    _max: Public_videosMaxAggregateOutputType | null
  }

  export type Public_videosAvgAggregateOutputType = {
    order_index: number | null
  }

  export type Public_videosSumAggregateOutputType = {
    order_index: number | null
  }

  export type Public_videosMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    title: string | null
    youtube_id: string | null
    order_index: number | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Public_videosMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    title: string | null
    youtube_id: string | null
    order_index: number | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Public_videosCountAggregateOutputType = {
    id: number
    tenant_id: number
    title: number
    youtube_id: number
    order_index: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Public_videosAvgAggregateInputType = {
    order_index?: true
  }

  export type Public_videosSumAggregateInputType = {
    order_index?: true
  }

  export type Public_videosMinAggregateInputType = {
    id?: true
    tenant_id?: true
    title?: true
    youtube_id?: true
    order_index?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type Public_videosMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    title?: true
    youtube_id?: true
    order_index?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type Public_videosCountAggregateInputType = {
    id?: true
    tenant_id?: true
    title?: true
    youtube_id?: true
    order_index?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Public_videosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which public_videos to aggregate.
     */
    where?: public_videosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of public_videos to fetch.
     */
    orderBy?: public_videosOrderByWithRelationInput | public_videosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: public_videosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` public_videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` public_videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned public_videos
    **/
    _count?: true | Public_videosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Public_videosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Public_videosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Public_videosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Public_videosMaxAggregateInputType
  }

  export type GetPublic_videosAggregateType<T extends Public_videosAggregateArgs> = {
        [P in keyof T & keyof AggregatePublic_videos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublic_videos[P]>
      : GetScalarType<T[P], AggregatePublic_videos[P]>
  }




  export type public_videosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: public_videosWhereInput
    orderBy?: public_videosOrderByWithAggregationInput | public_videosOrderByWithAggregationInput[]
    by: Public_videosScalarFieldEnum[] | Public_videosScalarFieldEnum
    having?: public_videosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Public_videosCountAggregateInputType | true
    _avg?: Public_videosAvgAggregateInputType
    _sum?: Public_videosSumAggregateInputType
    _min?: Public_videosMinAggregateInputType
    _max?: Public_videosMaxAggregateInputType
  }

  export type Public_videosGroupByOutputType = {
    id: string
    tenant_id: string
    title: string | null
    youtube_id: string
    order_index: number | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    _count: Public_videosCountAggregateOutputType | null
    _avg: Public_videosAvgAggregateOutputType | null
    _sum: Public_videosSumAggregateOutputType | null
    _min: Public_videosMinAggregateOutputType | null
    _max: Public_videosMaxAggregateOutputType | null
  }

  type GetPublic_videosGroupByPayload<T extends public_videosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Public_videosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Public_videosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Public_videosGroupByOutputType[P]>
            : GetScalarType<T[P], Public_videosGroupByOutputType[P]>
        }
      >
    >


  export type public_videosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    title?: boolean
    youtube_id?: boolean
    order_index?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["public_videos"]>

  export type public_videosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    title?: boolean
    youtube_id?: boolean
    order_index?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["public_videos"]>

  export type public_videosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    title?: boolean
    youtube_id?: boolean
    order_index?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["public_videos"]>

  export type public_videosSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    title?: boolean
    youtube_id?: boolean
    order_index?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type public_videosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenant_id" | "title" | "youtube_id" | "order_index" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["public_videos"]>

  export type $public_videosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "public_videos"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      title: string | null
      youtube_id: string
      order_index: number | null
      is_active: boolean | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["public_videos"]>
    composites: {}
  }

  type public_videosGetPayload<S extends boolean | null | undefined | public_videosDefaultArgs> = $Result.GetResult<Prisma.$public_videosPayload, S>

  type public_videosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<public_videosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Public_videosCountAggregateInputType | true
    }

  export interface public_videosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['public_videos'], meta: { name: 'public_videos' } }
    /**
     * Find zero or one Public_videos that matches the filter.
     * @param {public_videosFindUniqueArgs} args - Arguments to find a Public_videos
     * @example
     * // Get one Public_videos
     * const public_videos = await prisma.public_videos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends public_videosFindUniqueArgs>(args: SelectSubset<T, public_videosFindUniqueArgs<ExtArgs>>): Prisma__public_videosClient<$Result.GetResult<Prisma.$public_videosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Public_videos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {public_videosFindUniqueOrThrowArgs} args - Arguments to find a Public_videos
     * @example
     * // Get one Public_videos
     * const public_videos = await prisma.public_videos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends public_videosFindUniqueOrThrowArgs>(args: SelectSubset<T, public_videosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__public_videosClient<$Result.GetResult<Prisma.$public_videosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Public_videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_videosFindFirstArgs} args - Arguments to find a Public_videos
     * @example
     * // Get one Public_videos
     * const public_videos = await prisma.public_videos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends public_videosFindFirstArgs>(args?: SelectSubset<T, public_videosFindFirstArgs<ExtArgs>>): Prisma__public_videosClient<$Result.GetResult<Prisma.$public_videosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Public_videos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_videosFindFirstOrThrowArgs} args - Arguments to find a Public_videos
     * @example
     * // Get one Public_videos
     * const public_videos = await prisma.public_videos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends public_videosFindFirstOrThrowArgs>(args?: SelectSubset<T, public_videosFindFirstOrThrowArgs<ExtArgs>>): Prisma__public_videosClient<$Result.GetResult<Prisma.$public_videosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Public_videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_videosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Public_videos
     * const public_videos = await prisma.public_videos.findMany()
     * 
     * // Get first 10 Public_videos
     * const public_videos = await prisma.public_videos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const public_videosWithIdOnly = await prisma.public_videos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends public_videosFindManyArgs>(args?: SelectSubset<T, public_videosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$public_videosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Public_videos.
     * @param {public_videosCreateArgs} args - Arguments to create a Public_videos.
     * @example
     * // Create one Public_videos
     * const Public_videos = await prisma.public_videos.create({
     *   data: {
     *     // ... data to create a Public_videos
     *   }
     * })
     * 
     */
    create<T extends public_videosCreateArgs>(args: SelectSubset<T, public_videosCreateArgs<ExtArgs>>): Prisma__public_videosClient<$Result.GetResult<Prisma.$public_videosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Public_videos.
     * @param {public_videosCreateManyArgs} args - Arguments to create many Public_videos.
     * @example
     * // Create many Public_videos
     * const public_videos = await prisma.public_videos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends public_videosCreateManyArgs>(args?: SelectSubset<T, public_videosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Public_videos and returns the data saved in the database.
     * @param {public_videosCreateManyAndReturnArgs} args - Arguments to create many Public_videos.
     * @example
     * // Create many Public_videos
     * const public_videos = await prisma.public_videos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Public_videos and only return the `id`
     * const public_videosWithIdOnly = await prisma.public_videos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends public_videosCreateManyAndReturnArgs>(args?: SelectSubset<T, public_videosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$public_videosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Public_videos.
     * @param {public_videosDeleteArgs} args - Arguments to delete one Public_videos.
     * @example
     * // Delete one Public_videos
     * const Public_videos = await prisma.public_videos.delete({
     *   where: {
     *     // ... filter to delete one Public_videos
     *   }
     * })
     * 
     */
    delete<T extends public_videosDeleteArgs>(args: SelectSubset<T, public_videosDeleteArgs<ExtArgs>>): Prisma__public_videosClient<$Result.GetResult<Prisma.$public_videosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Public_videos.
     * @param {public_videosUpdateArgs} args - Arguments to update one Public_videos.
     * @example
     * // Update one Public_videos
     * const public_videos = await prisma.public_videos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends public_videosUpdateArgs>(args: SelectSubset<T, public_videosUpdateArgs<ExtArgs>>): Prisma__public_videosClient<$Result.GetResult<Prisma.$public_videosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Public_videos.
     * @param {public_videosDeleteManyArgs} args - Arguments to filter Public_videos to delete.
     * @example
     * // Delete a few Public_videos
     * const { count } = await prisma.public_videos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends public_videosDeleteManyArgs>(args?: SelectSubset<T, public_videosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Public_videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_videosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Public_videos
     * const public_videos = await prisma.public_videos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends public_videosUpdateManyArgs>(args: SelectSubset<T, public_videosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Public_videos and returns the data updated in the database.
     * @param {public_videosUpdateManyAndReturnArgs} args - Arguments to update many Public_videos.
     * @example
     * // Update many Public_videos
     * const public_videos = await prisma.public_videos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Public_videos and only return the `id`
     * const public_videosWithIdOnly = await prisma.public_videos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends public_videosUpdateManyAndReturnArgs>(args: SelectSubset<T, public_videosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$public_videosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Public_videos.
     * @param {public_videosUpsertArgs} args - Arguments to update or create a Public_videos.
     * @example
     * // Update or create a Public_videos
     * const public_videos = await prisma.public_videos.upsert({
     *   create: {
     *     // ... data to create a Public_videos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Public_videos we want to update
     *   }
     * })
     */
    upsert<T extends public_videosUpsertArgs>(args: SelectSubset<T, public_videosUpsertArgs<ExtArgs>>): Prisma__public_videosClient<$Result.GetResult<Prisma.$public_videosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Public_videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_videosCountArgs} args - Arguments to filter Public_videos to count.
     * @example
     * // Count the number of Public_videos
     * const count = await prisma.public_videos.count({
     *   where: {
     *     // ... the filter for the Public_videos we want to count
     *   }
     * })
    **/
    count<T extends public_videosCountArgs>(
      args?: Subset<T, public_videosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Public_videosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Public_videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Public_videosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Public_videosAggregateArgs>(args: Subset<T, Public_videosAggregateArgs>): Prisma.PrismaPromise<GetPublic_videosAggregateType<T>>

    /**
     * Group by Public_videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_videosGroupByArgs} args - Group by arguments.
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
      T extends public_videosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: public_videosGroupByArgs['orderBy'] }
        : { orderBy?: public_videosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, public_videosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublic_videosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the public_videos model
   */
  readonly fields: public_videosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for public_videos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__public_videosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the public_videos model
   */
  interface public_videosFieldRefs {
    readonly id: FieldRef<"public_videos", 'String'>
    readonly tenant_id: FieldRef<"public_videos", 'String'>
    readonly title: FieldRef<"public_videos", 'String'>
    readonly youtube_id: FieldRef<"public_videos", 'String'>
    readonly order_index: FieldRef<"public_videos", 'Int'>
    readonly is_active: FieldRef<"public_videos", 'Boolean'>
    readonly created_at: FieldRef<"public_videos", 'DateTime'>
    readonly updated_at: FieldRef<"public_videos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * public_videos findUnique
   */
  export type public_videosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_videos
     */
    select?: public_videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_videos
     */
    omit?: public_videosOmit<ExtArgs> | null
    /**
     * Filter, which public_videos to fetch.
     */
    where: public_videosWhereUniqueInput
  }

  /**
   * public_videos findUniqueOrThrow
   */
  export type public_videosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_videos
     */
    select?: public_videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_videos
     */
    omit?: public_videosOmit<ExtArgs> | null
    /**
     * Filter, which public_videos to fetch.
     */
    where: public_videosWhereUniqueInput
  }

  /**
   * public_videos findFirst
   */
  export type public_videosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_videos
     */
    select?: public_videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_videos
     */
    omit?: public_videosOmit<ExtArgs> | null
    /**
     * Filter, which public_videos to fetch.
     */
    where?: public_videosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of public_videos to fetch.
     */
    orderBy?: public_videosOrderByWithRelationInput | public_videosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for public_videos.
     */
    cursor?: public_videosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` public_videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` public_videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of public_videos.
     */
    distinct?: Public_videosScalarFieldEnum | Public_videosScalarFieldEnum[]
  }

  /**
   * public_videos findFirstOrThrow
   */
  export type public_videosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_videos
     */
    select?: public_videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_videos
     */
    omit?: public_videosOmit<ExtArgs> | null
    /**
     * Filter, which public_videos to fetch.
     */
    where?: public_videosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of public_videos to fetch.
     */
    orderBy?: public_videosOrderByWithRelationInput | public_videosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for public_videos.
     */
    cursor?: public_videosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` public_videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` public_videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of public_videos.
     */
    distinct?: Public_videosScalarFieldEnum | Public_videosScalarFieldEnum[]
  }

  /**
   * public_videos findMany
   */
  export type public_videosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_videos
     */
    select?: public_videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_videos
     */
    omit?: public_videosOmit<ExtArgs> | null
    /**
     * Filter, which public_videos to fetch.
     */
    where?: public_videosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of public_videos to fetch.
     */
    orderBy?: public_videosOrderByWithRelationInput | public_videosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing public_videos.
     */
    cursor?: public_videosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` public_videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` public_videos.
     */
    skip?: number
    distinct?: Public_videosScalarFieldEnum | Public_videosScalarFieldEnum[]
  }

  /**
   * public_videos create
   */
  export type public_videosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_videos
     */
    select?: public_videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_videos
     */
    omit?: public_videosOmit<ExtArgs> | null
    /**
     * The data needed to create a public_videos.
     */
    data: XOR<public_videosCreateInput, public_videosUncheckedCreateInput>
  }

  /**
   * public_videos createMany
   */
  export type public_videosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many public_videos.
     */
    data: public_videosCreateManyInput | public_videosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * public_videos createManyAndReturn
   */
  export type public_videosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_videos
     */
    select?: public_videosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the public_videos
     */
    omit?: public_videosOmit<ExtArgs> | null
    /**
     * The data used to create many public_videos.
     */
    data: public_videosCreateManyInput | public_videosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * public_videos update
   */
  export type public_videosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_videos
     */
    select?: public_videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_videos
     */
    omit?: public_videosOmit<ExtArgs> | null
    /**
     * The data needed to update a public_videos.
     */
    data: XOR<public_videosUpdateInput, public_videosUncheckedUpdateInput>
    /**
     * Choose, which public_videos to update.
     */
    where: public_videosWhereUniqueInput
  }

  /**
   * public_videos updateMany
   */
  export type public_videosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update public_videos.
     */
    data: XOR<public_videosUpdateManyMutationInput, public_videosUncheckedUpdateManyInput>
    /**
     * Filter which public_videos to update
     */
    where?: public_videosWhereInput
    /**
     * Limit how many public_videos to update.
     */
    limit?: number
  }

  /**
   * public_videos updateManyAndReturn
   */
  export type public_videosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_videos
     */
    select?: public_videosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the public_videos
     */
    omit?: public_videosOmit<ExtArgs> | null
    /**
     * The data used to update public_videos.
     */
    data: XOR<public_videosUpdateManyMutationInput, public_videosUncheckedUpdateManyInput>
    /**
     * Filter which public_videos to update
     */
    where?: public_videosWhereInput
    /**
     * Limit how many public_videos to update.
     */
    limit?: number
  }

  /**
   * public_videos upsert
   */
  export type public_videosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_videos
     */
    select?: public_videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_videos
     */
    omit?: public_videosOmit<ExtArgs> | null
    /**
     * The filter to search for the public_videos to update in case it exists.
     */
    where: public_videosWhereUniqueInput
    /**
     * In case the public_videos found by the `where` argument doesn't exist, create a new public_videos with this data.
     */
    create: XOR<public_videosCreateInput, public_videosUncheckedCreateInput>
    /**
     * In case the public_videos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<public_videosUpdateInput, public_videosUncheckedUpdateInput>
  }

  /**
   * public_videos delete
   */
  export type public_videosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_videos
     */
    select?: public_videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_videos
     */
    omit?: public_videosOmit<ExtArgs> | null
    /**
     * Filter which public_videos to delete.
     */
    where: public_videosWhereUniqueInput
  }

  /**
   * public_videos deleteMany
   */
  export type public_videosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which public_videos to delete
     */
    where?: public_videosWhereInput
    /**
     * Limit how many public_videos to delete.
     */
    limit?: number
  }

  /**
   * public_videos without action
   */
  export type public_videosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_videos
     */
    select?: public_videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_videos
     */
    omit?: public_videosOmit<ExtArgs> | null
  }


  /**
   * Model public_visitors
   */

  export type AggregatePublic_visitors = {
    _count: Public_visitorsCountAggregateOutputType | null
    _min: Public_visitorsMinAggregateOutputType | null
    _max: Public_visitorsMaxAggregateOutputType | null
  }

  export type Public_visitorsMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    ip_address: string | null
    user_agent: string | null
    route: string | null
    visited_at: Date | null
  }

  export type Public_visitorsMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    ip_address: string | null
    user_agent: string | null
    route: string | null
    visited_at: Date | null
  }

  export type Public_visitorsCountAggregateOutputType = {
    id: number
    tenant_id: number
    ip_address: number
    user_agent: number
    route: number
    visited_at: number
    _all: number
  }


  export type Public_visitorsMinAggregateInputType = {
    id?: true
    tenant_id?: true
    ip_address?: true
    user_agent?: true
    route?: true
    visited_at?: true
  }

  export type Public_visitorsMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    ip_address?: true
    user_agent?: true
    route?: true
    visited_at?: true
  }

  export type Public_visitorsCountAggregateInputType = {
    id?: true
    tenant_id?: true
    ip_address?: true
    user_agent?: true
    route?: true
    visited_at?: true
    _all?: true
  }

  export type Public_visitorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which public_visitors to aggregate.
     */
    where?: public_visitorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of public_visitors to fetch.
     */
    orderBy?: public_visitorsOrderByWithRelationInput | public_visitorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: public_visitorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` public_visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` public_visitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned public_visitors
    **/
    _count?: true | Public_visitorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Public_visitorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Public_visitorsMaxAggregateInputType
  }

  export type GetPublic_visitorsAggregateType<T extends Public_visitorsAggregateArgs> = {
        [P in keyof T & keyof AggregatePublic_visitors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublic_visitors[P]>
      : GetScalarType<T[P], AggregatePublic_visitors[P]>
  }




  export type public_visitorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: public_visitorsWhereInput
    orderBy?: public_visitorsOrderByWithAggregationInput | public_visitorsOrderByWithAggregationInput[]
    by: Public_visitorsScalarFieldEnum[] | Public_visitorsScalarFieldEnum
    having?: public_visitorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Public_visitorsCountAggregateInputType | true
    _min?: Public_visitorsMinAggregateInputType
    _max?: Public_visitorsMaxAggregateInputType
  }

  export type Public_visitorsGroupByOutputType = {
    id: string
    tenant_id: string
    ip_address: string | null
    user_agent: string | null
    route: string | null
    visited_at: Date | null
    _count: Public_visitorsCountAggregateOutputType | null
    _min: Public_visitorsMinAggregateOutputType | null
    _max: Public_visitorsMaxAggregateOutputType | null
  }

  type GetPublic_visitorsGroupByPayload<T extends public_visitorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Public_visitorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Public_visitorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Public_visitorsGroupByOutputType[P]>
            : GetScalarType<T[P], Public_visitorsGroupByOutputType[P]>
        }
      >
    >


  export type public_visitorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    ip_address?: boolean
    user_agent?: boolean
    route?: boolean
    visited_at?: boolean
  }, ExtArgs["result"]["public_visitors"]>

  export type public_visitorsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    ip_address?: boolean
    user_agent?: boolean
    route?: boolean
    visited_at?: boolean
  }, ExtArgs["result"]["public_visitors"]>

  export type public_visitorsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    ip_address?: boolean
    user_agent?: boolean
    route?: boolean
    visited_at?: boolean
  }, ExtArgs["result"]["public_visitors"]>

  export type public_visitorsSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    ip_address?: boolean
    user_agent?: boolean
    route?: boolean
    visited_at?: boolean
  }

  export type public_visitorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenant_id" | "ip_address" | "user_agent" | "route" | "visited_at", ExtArgs["result"]["public_visitors"]>

  export type $public_visitorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "public_visitors"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      ip_address: string | null
      user_agent: string | null
      route: string | null
      visited_at: Date | null
    }, ExtArgs["result"]["public_visitors"]>
    composites: {}
  }

  type public_visitorsGetPayload<S extends boolean | null | undefined | public_visitorsDefaultArgs> = $Result.GetResult<Prisma.$public_visitorsPayload, S>

  type public_visitorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<public_visitorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Public_visitorsCountAggregateInputType | true
    }

  export interface public_visitorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['public_visitors'], meta: { name: 'public_visitors' } }
    /**
     * Find zero or one Public_visitors that matches the filter.
     * @param {public_visitorsFindUniqueArgs} args - Arguments to find a Public_visitors
     * @example
     * // Get one Public_visitors
     * const public_visitors = await prisma.public_visitors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends public_visitorsFindUniqueArgs>(args: SelectSubset<T, public_visitorsFindUniqueArgs<ExtArgs>>): Prisma__public_visitorsClient<$Result.GetResult<Prisma.$public_visitorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Public_visitors that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {public_visitorsFindUniqueOrThrowArgs} args - Arguments to find a Public_visitors
     * @example
     * // Get one Public_visitors
     * const public_visitors = await prisma.public_visitors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends public_visitorsFindUniqueOrThrowArgs>(args: SelectSubset<T, public_visitorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__public_visitorsClient<$Result.GetResult<Prisma.$public_visitorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Public_visitors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_visitorsFindFirstArgs} args - Arguments to find a Public_visitors
     * @example
     * // Get one Public_visitors
     * const public_visitors = await prisma.public_visitors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends public_visitorsFindFirstArgs>(args?: SelectSubset<T, public_visitorsFindFirstArgs<ExtArgs>>): Prisma__public_visitorsClient<$Result.GetResult<Prisma.$public_visitorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Public_visitors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_visitorsFindFirstOrThrowArgs} args - Arguments to find a Public_visitors
     * @example
     * // Get one Public_visitors
     * const public_visitors = await prisma.public_visitors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends public_visitorsFindFirstOrThrowArgs>(args?: SelectSubset<T, public_visitorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__public_visitorsClient<$Result.GetResult<Prisma.$public_visitorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Public_visitors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_visitorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Public_visitors
     * const public_visitors = await prisma.public_visitors.findMany()
     * 
     * // Get first 10 Public_visitors
     * const public_visitors = await prisma.public_visitors.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const public_visitorsWithIdOnly = await prisma.public_visitors.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends public_visitorsFindManyArgs>(args?: SelectSubset<T, public_visitorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$public_visitorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Public_visitors.
     * @param {public_visitorsCreateArgs} args - Arguments to create a Public_visitors.
     * @example
     * // Create one Public_visitors
     * const Public_visitors = await prisma.public_visitors.create({
     *   data: {
     *     // ... data to create a Public_visitors
     *   }
     * })
     * 
     */
    create<T extends public_visitorsCreateArgs>(args: SelectSubset<T, public_visitorsCreateArgs<ExtArgs>>): Prisma__public_visitorsClient<$Result.GetResult<Prisma.$public_visitorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Public_visitors.
     * @param {public_visitorsCreateManyArgs} args - Arguments to create many Public_visitors.
     * @example
     * // Create many Public_visitors
     * const public_visitors = await prisma.public_visitors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends public_visitorsCreateManyArgs>(args?: SelectSubset<T, public_visitorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Public_visitors and returns the data saved in the database.
     * @param {public_visitorsCreateManyAndReturnArgs} args - Arguments to create many Public_visitors.
     * @example
     * // Create many Public_visitors
     * const public_visitors = await prisma.public_visitors.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Public_visitors and only return the `id`
     * const public_visitorsWithIdOnly = await prisma.public_visitors.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends public_visitorsCreateManyAndReturnArgs>(args?: SelectSubset<T, public_visitorsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$public_visitorsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Public_visitors.
     * @param {public_visitorsDeleteArgs} args - Arguments to delete one Public_visitors.
     * @example
     * // Delete one Public_visitors
     * const Public_visitors = await prisma.public_visitors.delete({
     *   where: {
     *     // ... filter to delete one Public_visitors
     *   }
     * })
     * 
     */
    delete<T extends public_visitorsDeleteArgs>(args: SelectSubset<T, public_visitorsDeleteArgs<ExtArgs>>): Prisma__public_visitorsClient<$Result.GetResult<Prisma.$public_visitorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Public_visitors.
     * @param {public_visitorsUpdateArgs} args - Arguments to update one Public_visitors.
     * @example
     * // Update one Public_visitors
     * const public_visitors = await prisma.public_visitors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends public_visitorsUpdateArgs>(args: SelectSubset<T, public_visitorsUpdateArgs<ExtArgs>>): Prisma__public_visitorsClient<$Result.GetResult<Prisma.$public_visitorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Public_visitors.
     * @param {public_visitorsDeleteManyArgs} args - Arguments to filter Public_visitors to delete.
     * @example
     * // Delete a few Public_visitors
     * const { count } = await prisma.public_visitors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends public_visitorsDeleteManyArgs>(args?: SelectSubset<T, public_visitorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Public_visitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_visitorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Public_visitors
     * const public_visitors = await prisma.public_visitors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends public_visitorsUpdateManyArgs>(args: SelectSubset<T, public_visitorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Public_visitors and returns the data updated in the database.
     * @param {public_visitorsUpdateManyAndReturnArgs} args - Arguments to update many Public_visitors.
     * @example
     * // Update many Public_visitors
     * const public_visitors = await prisma.public_visitors.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Public_visitors and only return the `id`
     * const public_visitorsWithIdOnly = await prisma.public_visitors.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends public_visitorsUpdateManyAndReturnArgs>(args: SelectSubset<T, public_visitorsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$public_visitorsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Public_visitors.
     * @param {public_visitorsUpsertArgs} args - Arguments to update or create a Public_visitors.
     * @example
     * // Update or create a Public_visitors
     * const public_visitors = await prisma.public_visitors.upsert({
     *   create: {
     *     // ... data to create a Public_visitors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Public_visitors we want to update
     *   }
     * })
     */
    upsert<T extends public_visitorsUpsertArgs>(args: SelectSubset<T, public_visitorsUpsertArgs<ExtArgs>>): Prisma__public_visitorsClient<$Result.GetResult<Prisma.$public_visitorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Public_visitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_visitorsCountArgs} args - Arguments to filter Public_visitors to count.
     * @example
     * // Count the number of Public_visitors
     * const count = await prisma.public_visitors.count({
     *   where: {
     *     // ... the filter for the Public_visitors we want to count
     *   }
     * })
    **/
    count<T extends public_visitorsCountArgs>(
      args?: Subset<T, public_visitorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Public_visitorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Public_visitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Public_visitorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Public_visitorsAggregateArgs>(args: Subset<T, Public_visitorsAggregateArgs>): Prisma.PrismaPromise<GetPublic_visitorsAggregateType<T>>

    /**
     * Group by Public_visitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {public_visitorsGroupByArgs} args - Group by arguments.
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
      T extends public_visitorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: public_visitorsGroupByArgs['orderBy'] }
        : { orderBy?: public_visitorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, public_visitorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublic_visitorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the public_visitors model
   */
  readonly fields: public_visitorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for public_visitors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__public_visitorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the public_visitors model
   */
  interface public_visitorsFieldRefs {
    readonly id: FieldRef<"public_visitors", 'String'>
    readonly tenant_id: FieldRef<"public_visitors", 'String'>
    readonly ip_address: FieldRef<"public_visitors", 'String'>
    readonly user_agent: FieldRef<"public_visitors", 'String'>
    readonly route: FieldRef<"public_visitors", 'String'>
    readonly visited_at: FieldRef<"public_visitors", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * public_visitors findUnique
   */
  export type public_visitorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_visitors
     */
    select?: public_visitorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_visitors
     */
    omit?: public_visitorsOmit<ExtArgs> | null
    /**
     * Filter, which public_visitors to fetch.
     */
    where: public_visitorsWhereUniqueInput
  }

  /**
   * public_visitors findUniqueOrThrow
   */
  export type public_visitorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_visitors
     */
    select?: public_visitorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_visitors
     */
    omit?: public_visitorsOmit<ExtArgs> | null
    /**
     * Filter, which public_visitors to fetch.
     */
    where: public_visitorsWhereUniqueInput
  }

  /**
   * public_visitors findFirst
   */
  export type public_visitorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_visitors
     */
    select?: public_visitorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_visitors
     */
    omit?: public_visitorsOmit<ExtArgs> | null
    /**
     * Filter, which public_visitors to fetch.
     */
    where?: public_visitorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of public_visitors to fetch.
     */
    orderBy?: public_visitorsOrderByWithRelationInput | public_visitorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for public_visitors.
     */
    cursor?: public_visitorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` public_visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` public_visitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of public_visitors.
     */
    distinct?: Public_visitorsScalarFieldEnum | Public_visitorsScalarFieldEnum[]
  }

  /**
   * public_visitors findFirstOrThrow
   */
  export type public_visitorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_visitors
     */
    select?: public_visitorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_visitors
     */
    omit?: public_visitorsOmit<ExtArgs> | null
    /**
     * Filter, which public_visitors to fetch.
     */
    where?: public_visitorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of public_visitors to fetch.
     */
    orderBy?: public_visitorsOrderByWithRelationInput | public_visitorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for public_visitors.
     */
    cursor?: public_visitorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` public_visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` public_visitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of public_visitors.
     */
    distinct?: Public_visitorsScalarFieldEnum | Public_visitorsScalarFieldEnum[]
  }

  /**
   * public_visitors findMany
   */
  export type public_visitorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_visitors
     */
    select?: public_visitorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_visitors
     */
    omit?: public_visitorsOmit<ExtArgs> | null
    /**
     * Filter, which public_visitors to fetch.
     */
    where?: public_visitorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of public_visitors to fetch.
     */
    orderBy?: public_visitorsOrderByWithRelationInput | public_visitorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing public_visitors.
     */
    cursor?: public_visitorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` public_visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` public_visitors.
     */
    skip?: number
    distinct?: Public_visitorsScalarFieldEnum | Public_visitorsScalarFieldEnum[]
  }

  /**
   * public_visitors create
   */
  export type public_visitorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_visitors
     */
    select?: public_visitorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_visitors
     */
    omit?: public_visitorsOmit<ExtArgs> | null
    /**
     * The data needed to create a public_visitors.
     */
    data: XOR<public_visitorsCreateInput, public_visitorsUncheckedCreateInput>
  }

  /**
   * public_visitors createMany
   */
  export type public_visitorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many public_visitors.
     */
    data: public_visitorsCreateManyInput | public_visitorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * public_visitors createManyAndReturn
   */
  export type public_visitorsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_visitors
     */
    select?: public_visitorsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the public_visitors
     */
    omit?: public_visitorsOmit<ExtArgs> | null
    /**
     * The data used to create many public_visitors.
     */
    data: public_visitorsCreateManyInput | public_visitorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * public_visitors update
   */
  export type public_visitorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_visitors
     */
    select?: public_visitorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_visitors
     */
    omit?: public_visitorsOmit<ExtArgs> | null
    /**
     * The data needed to update a public_visitors.
     */
    data: XOR<public_visitorsUpdateInput, public_visitorsUncheckedUpdateInput>
    /**
     * Choose, which public_visitors to update.
     */
    where: public_visitorsWhereUniqueInput
  }

  /**
   * public_visitors updateMany
   */
  export type public_visitorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update public_visitors.
     */
    data: XOR<public_visitorsUpdateManyMutationInput, public_visitorsUncheckedUpdateManyInput>
    /**
     * Filter which public_visitors to update
     */
    where?: public_visitorsWhereInput
    /**
     * Limit how many public_visitors to update.
     */
    limit?: number
  }

  /**
   * public_visitors updateManyAndReturn
   */
  export type public_visitorsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_visitors
     */
    select?: public_visitorsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the public_visitors
     */
    omit?: public_visitorsOmit<ExtArgs> | null
    /**
     * The data used to update public_visitors.
     */
    data: XOR<public_visitorsUpdateManyMutationInput, public_visitorsUncheckedUpdateManyInput>
    /**
     * Filter which public_visitors to update
     */
    where?: public_visitorsWhereInput
    /**
     * Limit how many public_visitors to update.
     */
    limit?: number
  }

  /**
   * public_visitors upsert
   */
  export type public_visitorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_visitors
     */
    select?: public_visitorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_visitors
     */
    omit?: public_visitorsOmit<ExtArgs> | null
    /**
     * The filter to search for the public_visitors to update in case it exists.
     */
    where: public_visitorsWhereUniqueInput
    /**
     * In case the public_visitors found by the `where` argument doesn't exist, create a new public_visitors with this data.
     */
    create: XOR<public_visitorsCreateInput, public_visitorsUncheckedCreateInput>
    /**
     * In case the public_visitors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<public_visitorsUpdateInput, public_visitorsUncheckedUpdateInput>
  }

  /**
   * public_visitors delete
   */
  export type public_visitorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_visitors
     */
    select?: public_visitorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_visitors
     */
    omit?: public_visitorsOmit<ExtArgs> | null
    /**
     * Filter which public_visitors to delete.
     */
    where: public_visitorsWhereUniqueInput
  }

  /**
   * public_visitors deleteMany
   */
  export type public_visitorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which public_visitors to delete
     */
    where?: public_visitorsWhereInput
    /**
     * Limit how many public_visitors to delete.
     */
    limit?: number
  }

  /**
   * public_visitors without action
   */
  export type public_visitorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the public_visitors
     */
    select?: public_visitorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the public_visitors
     */
    omit?: public_visitorsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Public_agendasScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    title: 'title',
    description: 'description',
    date: 'date',
    location: 'location',
    is_pinned: 'is_pinned',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Public_agendasScalarFieldEnum = (typeof Public_agendasScalarFieldEnum)[keyof typeof Public_agendasScalarFieldEnum]


  export const Public_linksScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    title: 'title',
    url: 'url',
    order_index: 'order_index',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Public_linksScalarFieldEnum = (typeof Public_linksScalarFieldEnum)[keyof typeof Public_linksScalarFieldEnum]


  export const Public_pagesScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    title: 'title',
    slug: 'slug',
    content: 'content',
    parent_menu: 'parent_menu',
    order_index: 'order_index',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Public_pagesScalarFieldEnum = (typeof Public_pagesScalarFieldEnum)[keyof typeof Public_pagesScalarFieldEnum]


  export const Public_postsScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    title: 'title',
    slug: 'slug',
    content: 'content',
    image_url: 'image_url',
    category: 'category',
    is_pinned: 'is_pinned',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Public_postsScalarFieldEnum = (typeof Public_postsScalarFieldEnum)[keyof typeof Public_postsScalarFieldEnum]


  export const Public_settingsScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    key: 'key',
    value: 'value',
    category: 'category',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Public_settingsScalarFieldEnum = (typeof Public_settingsScalarFieldEnum)[keyof typeof Public_settingsScalarFieldEnum]


  export const Public_slidersScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    title: 'title',
    description: 'description',
    image_url: 'image_url',
    order_index: 'order_index',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Public_slidersScalarFieldEnum = (typeof Public_slidersScalarFieldEnum)[keyof typeof Public_slidersScalarFieldEnum]


  export const Public_videosScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    title: 'title',
    youtube_id: 'youtube_id',
    order_index: 'order_index',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Public_videosScalarFieldEnum = (typeof Public_videosScalarFieldEnum)[keyof typeof Public_videosScalarFieldEnum]


  export const Public_visitorsScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    ip_address: 'ip_address',
    user_agent: 'user_agent',
    route: 'route',
    visited_at: 'visited_at'
  };

  export type Public_visitorsScalarFieldEnum = (typeof Public_visitorsScalarFieldEnum)[keyof typeof Public_visitorsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type public_agendasWhereInput = {
    AND?: public_agendasWhereInput | public_agendasWhereInput[]
    OR?: public_agendasWhereInput[]
    NOT?: public_agendasWhereInput | public_agendasWhereInput[]
    id?: UuidFilter<"public_agendas"> | string
    tenant_id?: UuidFilter<"public_agendas"> | string
    title?: StringFilter<"public_agendas"> | string
    description?: StringNullableFilter<"public_agendas"> | string | null
    date?: DateTimeFilter<"public_agendas"> | Date | string
    location?: StringNullableFilter<"public_agendas"> | string | null
    is_pinned?: BoolNullableFilter<"public_agendas"> | boolean | null
    is_active?: BoolNullableFilter<"public_agendas"> | boolean | null
    created_at?: DateTimeNullableFilter<"public_agendas"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"public_agendas"> | Date | string | null
  }

  export type public_agendasOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    date?: SortOrder
    location?: SortOrderInput | SortOrder
    is_pinned?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
  }

  export type public_agendasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: public_agendasWhereInput | public_agendasWhereInput[]
    OR?: public_agendasWhereInput[]
    NOT?: public_agendasWhereInput | public_agendasWhereInput[]
    tenant_id?: UuidFilter<"public_agendas"> | string
    title?: StringFilter<"public_agendas"> | string
    description?: StringNullableFilter<"public_agendas"> | string | null
    date?: DateTimeFilter<"public_agendas"> | Date | string
    location?: StringNullableFilter<"public_agendas"> | string | null
    is_pinned?: BoolNullableFilter<"public_agendas"> | boolean | null
    is_active?: BoolNullableFilter<"public_agendas"> | boolean | null
    created_at?: DateTimeNullableFilter<"public_agendas"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"public_agendas"> | Date | string | null
  }, "id">

  export type public_agendasOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    date?: SortOrder
    location?: SortOrderInput | SortOrder
    is_pinned?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: public_agendasCountOrderByAggregateInput
    _max?: public_agendasMaxOrderByAggregateInput
    _min?: public_agendasMinOrderByAggregateInput
  }

  export type public_agendasScalarWhereWithAggregatesInput = {
    AND?: public_agendasScalarWhereWithAggregatesInput | public_agendasScalarWhereWithAggregatesInput[]
    OR?: public_agendasScalarWhereWithAggregatesInput[]
    NOT?: public_agendasScalarWhereWithAggregatesInput | public_agendasScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"public_agendas"> | string
    tenant_id?: UuidWithAggregatesFilter<"public_agendas"> | string
    title?: StringWithAggregatesFilter<"public_agendas"> | string
    description?: StringNullableWithAggregatesFilter<"public_agendas"> | string | null
    date?: DateTimeWithAggregatesFilter<"public_agendas"> | Date | string
    location?: StringNullableWithAggregatesFilter<"public_agendas"> | string | null
    is_pinned?: BoolNullableWithAggregatesFilter<"public_agendas"> | boolean | null
    is_active?: BoolNullableWithAggregatesFilter<"public_agendas"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"public_agendas"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"public_agendas"> | Date | string | null
  }

  export type public_linksWhereInput = {
    AND?: public_linksWhereInput | public_linksWhereInput[]
    OR?: public_linksWhereInput[]
    NOT?: public_linksWhereInput | public_linksWhereInput[]
    id?: UuidFilter<"public_links"> | string
    tenant_id?: UuidFilter<"public_links"> | string
    title?: StringFilter<"public_links"> | string
    url?: StringFilter<"public_links"> | string
    order_index?: IntNullableFilter<"public_links"> | number | null
    is_active?: BoolNullableFilter<"public_links"> | boolean | null
    created_at?: DateTimeNullableFilter<"public_links"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"public_links"> | Date | string | null
  }

  export type public_linksOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    order_index?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
  }

  export type public_linksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: public_linksWhereInput | public_linksWhereInput[]
    OR?: public_linksWhereInput[]
    NOT?: public_linksWhereInput | public_linksWhereInput[]
    tenant_id?: UuidFilter<"public_links"> | string
    title?: StringFilter<"public_links"> | string
    url?: StringFilter<"public_links"> | string
    order_index?: IntNullableFilter<"public_links"> | number | null
    is_active?: BoolNullableFilter<"public_links"> | boolean | null
    created_at?: DateTimeNullableFilter<"public_links"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"public_links"> | Date | string | null
  }, "id">

  export type public_linksOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    order_index?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: public_linksCountOrderByAggregateInput
    _avg?: public_linksAvgOrderByAggregateInput
    _max?: public_linksMaxOrderByAggregateInput
    _min?: public_linksMinOrderByAggregateInput
    _sum?: public_linksSumOrderByAggregateInput
  }

  export type public_linksScalarWhereWithAggregatesInput = {
    AND?: public_linksScalarWhereWithAggregatesInput | public_linksScalarWhereWithAggregatesInput[]
    OR?: public_linksScalarWhereWithAggregatesInput[]
    NOT?: public_linksScalarWhereWithAggregatesInput | public_linksScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"public_links"> | string
    tenant_id?: UuidWithAggregatesFilter<"public_links"> | string
    title?: StringWithAggregatesFilter<"public_links"> | string
    url?: StringWithAggregatesFilter<"public_links"> | string
    order_index?: IntNullableWithAggregatesFilter<"public_links"> | number | null
    is_active?: BoolNullableWithAggregatesFilter<"public_links"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"public_links"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"public_links"> | Date | string | null
  }

  export type public_pagesWhereInput = {
    AND?: public_pagesWhereInput | public_pagesWhereInput[]
    OR?: public_pagesWhereInput[]
    NOT?: public_pagesWhereInput | public_pagesWhereInput[]
    id?: UuidFilter<"public_pages"> | string
    tenant_id?: UuidFilter<"public_pages"> | string
    title?: StringFilter<"public_pages"> | string
    slug?: StringFilter<"public_pages"> | string
    content?: StringNullableFilter<"public_pages"> | string | null
    parent_menu?: StringNullableFilter<"public_pages"> | string | null
    order_index?: IntNullableFilter<"public_pages"> | number | null
    is_active?: BoolNullableFilter<"public_pages"> | boolean | null
    created_at?: DateTimeNullableFilter<"public_pages"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"public_pages"> | Date | string | null
  }

  export type public_pagesOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrderInput | SortOrder
    parent_menu?: SortOrderInput | SortOrder
    order_index?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
  }

  export type public_pagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenant_id_slug?: public_pagesTenant_idSlugCompoundUniqueInput
    AND?: public_pagesWhereInput | public_pagesWhereInput[]
    OR?: public_pagesWhereInput[]
    NOT?: public_pagesWhereInput | public_pagesWhereInput[]
    tenant_id?: UuidFilter<"public_pages"> | string
    title?: StringFilter<"public_pages"> | string
    slug?: StringFilter<"public_pages"> | string
    content?: StringNullableFilter<"public_pages"> | string | null
    parent_menu?: StringNullableFilter<"public_pages"> | string | null
    order_index?: IntNullableFilter<"public_pages"> | number | null
    is_active?: BoolNullableFilter<"public_pages"> | boolean | null
    created_at?: DateTimeNullableFilter<"public_pages"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"public_pages"> | Date | string | null
  }, "id" | "tenant_id_slug">

  export type public_pagesOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrderInput | SortOrder
    parent_menu?: SortOrderInput | SortOrder
    order_index?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: public_pagesCountOrderByAggregateInput
    _avg?: public_pagesAvgOrderByAggregateInput
    _max?: public_pagesMaxOrderByAggregateInput
    _min?: public_pagesMinOrderByAggregateInput
    _sum?: public_pagesSumOrderByAggregateInput
  }

  export type public_pagesScalarWhereWithAggregatesInput = {
    AND?: public_pagesScalarWhereWithAggregatesInput | public_pagesScalarWhereWithAggregatesInput[]
    OR?: public_pagesScalarWhereWithAggregatesInput[]
    NOT?: public_pagesScalarWhereWithAggregatesInput | public_pagesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"public_pages"> | string
    tenant_id?: UuidWithAggregatesFilter<"public_pages"> | string
    title?: StringWithAggregatesFilter<"public_pages"> | string
    slug?: StringWithAggregatesFilter<"public_pages"> | string
    content?: StringNullableWithAggregatesFilter<"public_pages"> | string | null
    parent_menu?: StringNullableWithAggregatesFilter<"public_pages"> | string | null
    order_index?: IntNullableWithAggregatesFilter<"public_pages"> | number | null
    is_active?: BoolNullableWithAggregatesFilter<"public_pages"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"public_pages"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"public_pages"> | Date | string | null
  }

  export type public_postsWhereInput = {
    AND?: public_postsWhereInput | public_postsWhereInput[]
    OR?: public_postsWhereInput[]
    NOT?: public_postsWhereInput | public_postsWhereInput[]
    id?: UuidFilter<"public_posts"> | string
    tenant_id?: UuidFilter<"public_posts"> | string
    title?: StringFilter<"public_posts"> | string
    slug?: StringFilter<"public_posts"> | string
    content?: StringNullableFilter<"public_posts"> | string | null
    image_url?: StringNullableFilter<"public_posts"> | string | null
    category?: StringNullableFilter<"public_posts"> | string | null
    is_pinned?: BoolNullableFilter<"public_posts"> | boolean | null
    is_active?: BoolNullableFilter<"public_posts"> | boolean | null
    created_at?: DateTimeNullableFilter<"public_posts"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"public_posts"> | Date | string | null
  }

  export type public_postsOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    is_pinned?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
  }

  export type public_postsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenant_id_slug?: public_postsTenant_idSlugCompoundUniqueInput
    AND?: public_postsWhereInput | public_postsWhereInput[]
    OR?: public_postsWhereInput[]
    NOT?: public_postsWhereInput | public_postsWhereInput[]
    tenant_id?: UuidFilter<"public_posts"> | string
    title?: StringFilter<"public_posts"> | string
    slug?: StringFilter<"public_posts"> | string
    content?: StringNullableFilter<"public_posts"> | string | null
    image_url?: StringNullableFilter<"public_posts"> | string | null
    category?: StringNullableFilter<"public_posts"> | string | null
    is_pinned?: BoolNullableFilter<"public_posts"> | boolean | null
    is_active?: BoolNullableFilter<"public_posts"> | boolean | null
    created_at?: DateTimeNullableFilter<"public_posts"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"public_posts"> | Date | string | null
  }, "id" | "tenant_id_slug">

  export type public_postsOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    is_pinned?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: public_postsCountOrderByAggregateInput
    _max?: public_postsMaxOrderByAggregateInput
    _min?: public_postsMinOrderByAggregateInput
  }

  export type public_postsScalarWhereWithAggregatesInput = {
    AND?: public_postsScalarWhereWithAggregatesInput | public_postsScalarWhereWithAggregatesInput[]
    OR?: public_postsScalarWhereWithAggregatesInput[]
    NOT?: public_postsScalarWhereWithAggregatesInput | public_postsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"public_posts"> | string
    tenant_id?: UuidWithAggregatesFilter<"public_posts"> | string
    title?: StringWithAggregatesFilter<"public_posts"> | string
    slug?: StringWithAggregatesFilter<"public_posts"> | string
    content?: StringNullableWithAggregatesFilter<"public_posts"> | string | null
    image_url?: StringNullableWithAggregatesFilter<"public_posts"> | string | null
    category?: StringNullableWithAggregatesFilter<"public_posts"> | string | null
    is_pinned?: BoolNullableWithAggregatesFilter<"public_posts"> | boolean | null
    is_active?: BoolNullableWithAggregatesFilter<"public_posts"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"public_posts"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"public_posts"> | Date | string | null
  }

  export type public_settingsWhereInput = {
    AND?: public_settingsWhereInput | public_settingsWhereInput[]
    OR?: public_settingsWhereInput[]
    NOT?: public_settingsWhereInput | public_settingsWhereInput[]
    id?: UuidFilter<"public_settings"> | string
    tenant_id?: UuidFilter<"public_settings"> | string
    key?: StringFilter<"public_settings"> | string
    value?: StringNullableFilter<"public_settings"> | string | null
    category?: StringNullableFilter<"public_settings"> | string | null
    created_at?: DateTimeNullableFilter<"public_settings"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"public_settings"> | Date | string | null
  }

  export type public_settingsOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    key?: SortOrder
    value?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
  }

  export type public_settingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenant_id_key?: public_settingsTenant_idKeyCompoundUniqueInput
    AND?: public_settingsWhereInput | public_settingsWhereInput[]
    OR?: public_settingsWhereInput[]
    NOT?: public_settingsWhereInput | public_settingsWhereInput[]
    tenant_id?: UuidFilter<"public_settings"> | string
    key?: StringFilter<"public_settings"> | string
    value?: StringNullableFilter<"public_settings"> | string | null
    category?: StringNullableFilter<"public_settings"> | string | null
    created_at?: DateTimeNullableFilter<"public_settings"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"public_settings"> | Date | string | null
  }, "id" | "tenant_id_key">

  export type public_settingsOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    key?: SortOrder
    value?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: public_settingsCountOrderByAggregateInput
    _max?: public_settingsMaxOrderByAggregateInput
    _min?: public_settingsMinOrderByAggregateInput
  }

  export type public_settingsScalarWhereWithAggregatesInput = {
    AND?: public_settingsScalarWhereWithAggregatesInput | public_settingsScalarWhereWithAggregatesInput[]
    OR?: public_settingsScalarWhereWithAggregatesInput[]
    NOT?: public_settingsScalarWhereWithAggregatesInput | public_settingsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"public_settings"> | string
    tenant_id?: UuidWithAggregatesFilter<"public_settings"> | string
    key?: StringWithAggregatesFilter<"public_settings"> | string
    value?: StringNullableWithAggregatesFilter<"public_settings"> | string | null
    category?: StringNullableWithAggregatesFilter<"public_settings"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"public_settings"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"public_settings"> | Date | string | null
  }

  export type public_slidersWhereInput = {
    AND?: public_slidersWhereInput | public_slidersWhereInput[]
    OR?: public_slidersWhereInput[]
    NOT?: public_slidersWhereInput | public_slidersWhereInput[]
    id?: UuidFilter<"public_sliders"> | string
    tenant_id?: UuidFilter<"public_sliders"> | string
    title?: StringNullableFilter<"public_sliders"> | string | null
    description?: StringNullableFilter<"public_sliders"> | string | null
    image_url?: StringFilter<"public_sliders"> | string
    order_index?: IntNullableFilter<"public_sliders"> | number | null
    is_active?: BoolNullableFilter<"public_sliders"> | boolean | null
    created_at?: DateTimeNullableFilter<"public_sliders"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"public_sliders"> | Date | string | null
  }

  export type public_slidersOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    image_url?: SortOrder
    order_index?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
  }

  export type public_slidersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: public_slidersWhereInput | public_slidersWhereInput[]
    OR?: public_slidersWhereInput[]
    NOT?: public_slidersWhereInput | public_slidersWhereInput[]
    tenant_id?: UuidFilter<"public_sliders"> | string
    title?: StringNullableFilter<"public_sliders"> | string | null
    description?: StringNullableFilter<"public_sliders"> | string | null
    image_url?: StringFilter<"public_sliders"> | string
    order_index?: IntNullableFilter<"public_sliders"> | number | null
    is_active?: BoolNullableFilter<"public_sliders"> | boolean | null
    created_at?: DateTimeNullableFilter<"public_sliders"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"public_sliders"> | Date | string | null
  }, "id">

  export type public_slidersOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    image_url?: SortOrder
    order_index?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: public_slidersCountOrderByAggregateInput
    _avg?: public_slidersAvgOrderByAggregateInput
    _max?: public_slidersMaxOrderByAggregateInput
    _min?: public_slidersMinOrderByAggregateInput
    _sum?: public_slidersSumOrderByAggregateInput
  }

  export type public_slidersScalarWhereWithAggregatesInput = {
    AND?: public_slidersScalarWhereWithAggregatesInput | public_slidersScalarWhereWithAggregatesInput[]
    OR?: public_slidersScalarWhereWithAggregatesInput[]
    NOT?: public_slidersScalarWhereWithAggregatesInput | public_slidersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"public_sliders"> | string
    tenant_id?: UuidWithAggregatesFilter<"public_sliders"> | string
    title?: StringNullableWithAggregatesFilter<"public_sliders"> | string | null
    description?: StringNullableWithAggregatesFilter<"public_sliders"> | string | null
    image_url?: StringWithAggregatesFilter<"public_sliders"> | string
    order_index?: IntNullableWithAggregatesFilter<"public_sliders"> | number | null
    is_active?: BoolNullableWithAggregatesFilter<"public_sliders"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"public_sliders"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"public_sliders"> | Date | string | null
  }

  export type public_videosWhereInput = {
    AND?: public_videosWhereInput | public_videosWhereInput[]
    OR?: public_videosWhereInput[]
    NOT?: public_videosWhereInput | public_videosWhereInput[]
    id?: UuidFilter<"public_videos"> | string
    tenant_id?: UuidFilter<"public_videos"> | string
    title?: StringNullableFilter<"public_videos"> | string | null
    youtube_id?: StringFilter<"public_videos"> | string
    order_index?: IntNullableFilter<"public_videos"> | number | null
    is_active?: BoolNullableFilter<"public_videos"> | boolean | null
    created_at?: DateTimeNullableFilter<"public_videos"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"public_videos"> | Date | string | null
  }

  export type public_videosOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    title?: SortOrderInput | SortOrder
    youtube_id?: SortOrder
    order_index?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
  }

  export type public_videosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: public_videosWhereInput | public_videosWhereInput[]
    OR?: public_videosWhereInput[]
    NOT?: public_videosWhereInput | public_videosWhereInput[]
    tenant_id?: UuidFilter<"public_videos"> | string
    title?: StringNullableFilter<"public_videos"> | string | null
    youtube_id?: StringFilter<"public_videos"> | string
    order_index?: IntNullableFilter<"public_videos"> | number | null
    is_active?: BoolNullableFilter<"public_videos"> | boolean | null
    created_at?: DateTimeNullableFilter<"public_videos"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"public_videos"> | Date | string | null
  }, "id">

  export type public_videosOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    title?: SortOrderInput | SortOrder
    youtube_id?: SortOrder
    order_index?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: public_videosCountOrderByAggregateInput
    _avg?: public_videosAvgOrderByAggregateInput
    _max?: public_videosMaxOrderByAggregateInput
    _min?: public_videosMinOrderByAggregateInput
    _sum?: public_videosSumOrderByAggregateInput
  }

  export type public_videosScalarWhereWithAggregatesInput = {
    AND?: public_videosScalarWhereWithAggregatesInput | public_videosScalarWhereWithAggregatesInput[]
    OR?: public_videosScalarWhereWithAggregatesInput[]
    NOT?: public_videosScalarWhereWithAggregatesInput | public_videosScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"public_videos"> | string
    tenant_id?: UuidWithAggregatesFilter<"public_videos"> | string
    title?: StringNullableWithAggregatesFilter<"public_videos"> | string | null
    youtube_id?: StringWithAggregatesFilter<"public_videos"> | string
    order_index?: IntNullableWithAggregatesFilter<"public_videos"> | number | null
    is_active?: BoolNullableWithAggregatesFilter<"public_videos"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"public_videos"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"public_videos"> | Date | string | null
  }

  export type public_visitorsWhereInput = {
    AND?: public_visitorsWhereInput | public_visitorsWhereInput[]
    OR?: public_visitorsWhereInput[]
    NOT?: public_visitorsWhereInput | public_visitorsWhereInput[]
    id?: UuidFilter<"public_visitors"> | string
    tenant_id?: UuidFilter<"public_visitors"> | string
    ip_address?: StringNullableFilter<"public_visitors"> | string | null
    user_agent?: StringNullableFilter<"public_visitors"> | string | null
    route?: StringNullableFilter<"public_visitors"> | string | null
    visited_at?: DateTimeNullableFilter<"public_visitors"> | Date | string | null
  }

  export type public_visitorsOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    ip_address?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    route?: SortOrderInput | SortOrder
    visited_at?: SortOrderInput | SortOrder
  }

  export type public_visitorsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: public_visitorsWhereInput | public_visitorsWhereInput[]
    OR?: public_visitorsWhereInput[]
    NOT?: public_visitorsWhereInput | public_visitorsWhereInput[]
    tenant_id?: UuidFilter<"public_visitors"> | string
    ip_address?: StringNullableFilter<"public_visitors"> | string | null
    user_agent?: StringNullableFilter<"public_visitors"> | string | null
    route?: StringNullableFilter<"public_visitors"> | string | null
    visited_at?: DateTimeNullableFilter<"public_visitors"> | Date | string | null
  }, "id">

  export type public_visitorsOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    ip_address?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    route?: SortOrderInput | SortOrder
    visited_at?: SortOrderInput | SortOrder
    _count?: public_visitorsCountOrderByAggregateInput
    _max?: public_visitorsMaxOrderByAggregateInput
    _min?: public_visitorsMinOrderByAggregateInput
  }

  export type public_visitorsScalarWhereWithAggregatesInput = {
    AND?: public_visitorsScalarWhereWithAggregatesInput | public_visitorsScalarWhereWithAggregatesInput[]
    OR?: public_visitorsScalarWhereWithAggregatesInput[]
    NOT?: public_visitorsScalarWhereWithAggregatesInput | public_visitorsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"public_visitors"> | string
    tenant_id?: UuidWithAggregatesFilter<"public_visitors"> | string
    ip_address?: StringNullableWithAggregatesFilter<"public_visitors"> | string | null
    user_agent?: StringNullableWithAggregatesFilter<"public_visitors"> | string | null
    route?: StringNullableWithAggregatesFilter<"public_visitors"> | string | null
    visited_at?: DateTimeNullableWithAggregatesFilter<"public_visitors"> | Date | string | null
  }

  export type public_agendasCreateInput = {
    id?: string
    tenant_id: string
    title: string
    description?: string | null
    date: Date | string
    location?: string | null
    is_pinned?: boolean | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type public_agendasUncheckedCreateInput = {
    id?: string
    tenant_id: string
    title: string
    description?: string | null
    date: Date | string
    location?: string | null
    is_pinned?: boolean | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type public_agendasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    is_pinned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type public_agendasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    is_pinned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type public_agendasCreateManyInput = {
    id?: string
    tenant_id: string
    title: string
    description?: string | null
    date: Date | string
    location?: string | null
    is_pinned?: boolean | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type public_agendasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    is_pinned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type public_agendasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    is_pinned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type public_linksCreateInput = {
    id?: string
    tenant_id: string
    title: string
    url: string
    order_index?: number | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type public_linksUncheckedCreateInput = {
    id?: string
    tenant_id: string
    title: string
    url: string
    order_index?: number | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type public_linksUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    order_index?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type public_linksUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    order_index?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type public_linksCreateManyInput = {
    id?: string
    tenant_id: string
    title: string
    url: string
    order_index?: number | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type public_linksUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    order_index?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type public_linksUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    order_index?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type public_pagesCreateInput = {
    id?: string
    tenant_id: string
    title: string
    slug: string
    content?: string | null
    parent_menu?: string | null
    order_index?: number | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type public_pagesUncheckedCreateInput = {
    id?: string
    tenant_id: string
    title: string
    slug: string
    content?: string | null
    parent_menu?: string | null
    order_index?: number | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type public_pagesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    parent_menu?: NullableStringFieldUpdateOperationsInput | string | null
    order_index?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type public_pagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    parent_menu?: NullableStringFieldUpdateOperationsInput | string | null
    order_index?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type public_pagesCreateManyInput = {
    id?: string
    tenant_id: string
    title: string
    slug: string
    content?: string | null
    parent_menu?: string | null
    order_index?: number | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type public_pagesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    parent_menu?: NullableStringFieldUpdateOperationsInput | string | null
    order_index?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type public_pagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    parent_menu?: NullableStringFieldUpdateOperationsInput | string | null
    order_index?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type public_postsCreateInput = {
    id?: string
    tenant_id: string
    title: string
    slug: string
    content?: string | null
    image_url?: string | null
    category?: string | null
    is_pinned?: boolean | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type public_postsUncheckedCreateInput = {
    id?: string
    tenant_id: string
    title: string
    slug: string
    content?: string | null
    image_url?: string | null
    category?: string | null
    is_pinned?: boolean | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type public_postsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    is_pinned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type public_postsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    is_pinned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type public_postsCreateManyInput = {
    id?: string
    tenant_id: string
    title: string
    slug: string
    content?: string | null
    image_url?: string | null
    category?: string | null
    is_pinned?: boolean | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type public_postsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    is_pinned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type public_postsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    is_pinned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type public_settingsCreateInput = {
    id?: string
    tenant_id: string
    key: string
    value?: string | null
    category?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type public_settingsUncheckedCreateInput = {
    id?: string
    tenant_id: string
    key: string
    value?: string | null
    category?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type public_settingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type public_settingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type public_settingsCreateManyInput = {
    id?: string
    tenant_id: string
    key: string
    value?: string | null
    category?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type public_settingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type public_settingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type public_slidersCreateInput = {
    id?: string
    tenant_id: string
    title?: string | null
    description?: string | null
    image_url: string
    order_index?: number | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type public_slidersUncheckedCreateInput = {
    id?: string
    tenant_id: string
    title?: string | null
    description?: string | null
    image_url: string
    order_index?: number | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type public_slidersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: StringFieldUpdateOperationsInput | string
    order_index?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type public_slidersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: StringFieldUpdateOperationsInput | string
    order_index?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type public_slidersCreateManyInput = {
    id?: string
    tenant_id: string
    title?: string | null
    description?: string | null
    image_url: string
    order_index?: number | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type public_slidersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: StringFieldUpdateOperationsInput | string
    order_index?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type public_slidersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: StringFieldUpdateOperationsInput | string
    order_index?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type public_videosCreateInput = {
    id?: string
    tenant_id: string
    title?: string | null
    youtube_id: string
    order_index?: number | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type public_videosUncheckedCreateInput = {
    id?: string
    tenant_id: string
    title?: string | null
    youtube_id: string
    order_index?: number | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type public_videosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_id?: StringFieldUpdateOperationsInput | string
    order_index?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type public_videosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_id?: StringFieldUpdateOperationsInput | string
    order_index?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type public_videosCreateManyInput = {
    id?: string
    tenant_id: string
    title?: string | null
    youtube_id: string
    order_index?: number | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type public_videosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_id?: StringFieldUpdateOperationsInput | string
    order_index?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type public_videosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_id?: StringFieldUpdateOperationsInput | string
    order_index?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type public_visitorsCreateInput = {
    id?: string
    tenant_id: string
    ip_address?: string | null
    user_agent?: string | null
    route?: string | null
    visited_at?: Date | string | null
  }

  export type public_visitorsUncheckedCreateInput = {
    id?: string
    tenant_id: string
    ip_address?: string | null
    user_agent?: string | null
    route?: string | null
    visited_at?: Date | string | null
  }

  export type public_visitorsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    visited_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type public_visitorsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    visited_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type public_visitorsCreateManyInput = {
    id?: string
    tenant_id: string
    ip_address?: string | null
    user_agent?: string | null
    route?: string | null
    visited_at?: Date | string | null
  }

  export type public_visitorsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    visited_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type public_visitorsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    visited_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type public_agendasCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    location?: SortOrder
    is_pinned?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type public_agendasMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    location?: SortOrder
    is_pinned?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type public_agendasMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    location?: SortOrder
    is_pinned?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type public_linksCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    order_index?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type public_linksAvgOrderByAggregateInput = {
    order_index?: SortOrder
  }

  export type public_linksMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    order_index?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type public_linksMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    order_index?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type public_linksSumOrderByAggregateInput = {
    order_index?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type public_pagesTenant_idSlugCompoundUniqueInput = {
    tenant_id: string
    slug: string
  }

  export type public_pagesCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    parent_menu?: SortOrder
    order_index?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type public_pagesAvgOrderByAggregateInput = {
    order_index?: SortOrder
  }

  export type public_pagesMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    parent_menu?: SortOrder
    order_index?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type public_pagesMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    parent_menu?: SortOrder
    order_index?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type public_pagesSumOrderByAggregateInput = {
    order_index?: SortOrder
  }

  export type public_postsTenant_idSlugCompoundUniqueInput = {
    tenant_id: string
    slug: string
  }

  export type public_postsCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    image_url?: SortOrder
    category?: SortOrder
    is_pinned?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type public_postsMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    image_url?: SortOrder
    category?: SortOrder
    is_pinned?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type public_postsMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    image_url?: SortOrder
    category?: SortOrder
    is_pinned?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type public_settingsTenant_idKeyCompoundUniqueInput = {
    tenant_id: string
    key: string
  }

  export type public_settingsCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    category?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type public_settingsMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    category?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type public_settingsMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    category?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type public_slidersCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    order_index?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type public_slidersAvgOrderByAggregateInput = {
    order_index?: SortOrder
  }

  export type public_slidersMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    order_index?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type public_slidersMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    order_index?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type public_slidersSumOrderByAggregateInput = {
    order_index?: SortOrder
  }

  export type public_videosCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    title?: SortOrder
    youtube_id?: SortOrder
    order_index?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type public_videosAvgOrderByAggregateInput = {
    order_index?: SortOrder
  }

  export type public_videosMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    title?: SortOrder
    youtube_id?: SortOrder
    order_index?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type public_videosMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    title?: SortOrder
    youtube_id?: SortOrder
    order_index?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type public_videosSumOrderByAggregateInput = {
    order_index?: SortOrder
  }

  export type public_visitorsCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    route?: SortOrder
    visited_at?: SortOrder
  }

  export type public_visitorsMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    route?: SortOrder
    visited_at?: SortOrder
  }

  export type public_visitorsMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    route?: SortOrder
    visited_at?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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