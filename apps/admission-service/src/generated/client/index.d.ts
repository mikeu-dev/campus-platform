
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
 * Model pmb_applicants
 * 
 */
export type pmb_applicants = $Result.DefaultSelection<Prisma.$pmb_applicantsPayload>
/**
 * Model pmb_documents
 * 
 */
export type pmb_documents = $Result.DefaultSelection<Prisma.$pmb_documentsPayload>
/**
 * Model pmb_periods
 * 
 */
export type pmb_periods = $Result.DefaultSelection<Prisma.$pmb_periodsPayload>
/**
 * Model pmb_prodis
 * 
 */
export type pmb_prodis = $Result.DefaultSelection<Prisma.$pmb_prodisPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Pmb_applicants
 * const pmb_applicants = await prisma.pmb_applicants.findMany()
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
   * // Fetch zero or more Pmb_applicants
   * const pmb_applicants = await prisma.pmb_applicants.findMany()
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.pmb_applicants`: Exposes CRUD operations for the **pmb_applicants** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pmb_applicants
    * const pmb_applicants = await prisma.pmb_applicants.findMany()
    * ```
    */
  get pmb_applicants(): Prisma.pmb_applicantsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pmb_documents`: Exposes CRUD operations for the **pmb_documents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pmb_documents
    * const pmb_documents = await prisma.pmb_documents.findMany()
    * ```
    */
  get pmb_documents(): Prisma.pmb_documentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pmb_periods`: Exposes CRUD operations for the **pmb_periods** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pmb_periods
    * const pmb_periods = await prisma.pmb_periods.findMany()
    * ```
    */
  get pmb_periods(): Prisma.pmb_periodsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pmb_prodis`: Exposes CRUD operations for the **pmb_prodis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pmb_prodis
    * const pmb_prodis = await prisma.pmb_prodis.findMany()
    * ```
    */
  get pmb_prodis(): Prisma.pmb_prodisDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.4.0
   * Query Engine version: ab56fe763f921d033a6c195e7ddeb3e255bdbb57
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
    pmb_applicants: 'pmb_applicants',
    pmb_documents: 'pmb_documents',
    pmb_periods: 'pmb_periods',
    pmb_prodis: 'pmb_prodis'
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
      modelProps: "pmb_applicants" | "pmb_documents" | "pmb_periods" | "pmb_prodis"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      pmb_applicants: {
        payload: Prisma.$pmb_applicantsPayload<ExtArgs>
        fields: Prisma.pmb_applicantsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pmb_applicantsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_applicantsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pmb_applicantsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_applicantsPayload>
          }
          findFirst: {
            args: Prisma.pmb_applicantsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_applicantsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pmb_applicantsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_applicantsPayload>
          }
          findMany: {
            args: Prisma.pmb_applicantsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_applicantsPayload>[]
          }
          create: {
            args: Prisma.pmb_applicantsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_applicantsPayload>
          }
          createMany: {
            args: Prisma.pmb_applicantsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pmb_applicantsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_applicantsPayload>[]
          }
          delete: {
            args: Prisma.pmb_applicantsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_applicantsPayload>
          }
          update: {
            args: Prisma.pmb_applicantsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_applicantsPayload>
          }
          deleteMany: {
            args: Prisma.pmb_applicantsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pmb_applicantsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pmb_applicantsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_applicantsPayload>[]
          }
          upsert: {
            args: Prisma.pmb_applicantsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_applicantsPayload>
          }
          aggregate: {
            args: Prisma.Pmb_applicantsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePmb_applicants>
          }
          groupBy: {
            args: Prisma.pmb_applicantsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Pmb_applicantsGroupByOutputType>[]
          }
          count: {
            args: Prisma.pmb_applicantsCountArgs<ExtArgs>
            result: $Utils.Optional<Pmb_applicantsCountAggregateOutputType> | number
          }
        }
      }
      pmb_documents: {
        payload: Prisma.$pmb_documentsPayload<ExtArgs>
        fields: Prisma.pmb_documentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pmb_documentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_documentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pmb_documentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_documentsPayload>
          }
          findFirst: {
            args: Prisma.pmb_documentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_documentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pmb_documentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_documentsPayload>
          }
          findMany: {
            args: Prisma.pmb_documentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_documentsPayload>[]
          }
          create: {
            args: Prisma.pmb_documentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_documentsPayload>
          }
          createMany: {
            args: Prisma.pmb_documentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pmb_documentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_documentsPayload>[]
          }
          delete: {
            args: Prisma.pmb_documentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_documentsPayload>
          }
          update: {
            args: Prisma.pmb_documentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_documentsPayload>
          }
          deleteMany: {
            args: Prisma.pmb_documentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pmb_documentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pmb_documentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_documentsPayload>[]
          }
          upsert: {
            args: Prisma.pmb_documentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_documentsPayload>
          }
          aggregate: {
            args: Prisma.Pmb_documentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePmb_documents>
          }
          groupBy: {
            args: Prisma.pmb_documentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Pmb_documentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.pmb_documentsCountArgs<ExtArgs>
            result: $Utils.Optional<Pmb_documentsCountAggregateOutputType> | number
          }
        }
      }
      pmb_periods: {
        payload: Prisma.$pmb_periodsPayload<ExtArgs>
        fields: Prisma.pmb_periodsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pmb_periodsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_periodsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pmb_periodsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_periodsPayload>
          }
          findFirst: {
            args: Prisma.pmb_periodsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_periodsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pmb_periodsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_periodsPayload>
          }
          findMany: {
            args: Prisma.pmb_periodsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_periodsPayload>[]
          }
          create: {
            args: Prisma.pmb_periodsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_periodsPayload>
          }
          createMany: {
            args: Prisma.pmb_periodsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pmb_periodsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_periodsPayload>[]
          }
          delete: {
            args: Prisma.pmb_periodsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_periodsPayload>
          }
          update: {
            args: Prisma.pmb_periodsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_periodsPayload>
          }
          deleteMany: {
            args: Prisma.pmb_periodsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pmb_periodsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pmb_periodsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_periodsPayload>[]
          }
          upsert: {
            args: Prisma.pmb_periodsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_periodsPayload>
          }
          aggregate: {
            args: Prisma.Pmb_periodsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePmb_periods>
          }
          groupBy: {
            args: Prisma.pmb_periodsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Pmb_periodsGroupByOutputType>[]
          }
          count: {
            args: Prisma.pmb_periodsCountArgs<ExtArgs>
            result: $Utils.Optional<Pmb_periodsCountAggregateOutputType> | number
          }
        }
      }
      pmb_prodis: {
        payload: Prisma.$pmb_prodisPayload<ExtArgs>
        fields: Prisma.pmb_prodisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pmb_prodisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_prodisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pmb_prodisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_prodisPayload>
          }
          findFirst: {
            args: Prisma.pmb_prodisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_prodisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pmb_prodisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_prodisPayload>
          }
          findMany: {
            args: Prisma.pmb_prodisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_prodisPayload>[]
          }
          create: {
            args: Prisma.pmb_prodisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_prodisPayload>
          }
          createMany: {
            args: Prisma.pmb_prodisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pmb_prodisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_prodisPayload>[]
          }
          delete: {
            args: Prisma.pmb_prodisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_prodisPayload>
          }
          update: {
            args: Prisma.pmb_prodisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_prodisPayload>
          }
          deleteMany: {
            args: Prisma.pmb_prodisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pmb_prodisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pmb_prodisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_prodisPayload>[]
          }
          upsert: {
            args: Prisma.pmb_prodisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pmb_prodisPayload>
          }
          aggregate: {
            args: Prisma.Pmb_prodisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePmb_prodis>
          }
          groupBy: {
            args: Prisma.pmb_prodisGroupByArgs<ExtArgs>
            result: $Utils.Optional<Pmb_prodisGroupByOutputType>[]
          }
          count: {
            args: Prisma.pmb_prodisCountArgs<ExtArgs>
            result: $Utils.Optional<Pmb_prodisCountAggregateOutputType> | number
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
    pmb_applicants?: pmb_applicantsOmit
    pmb_documents?: pmb_documentsOmit
    pmb_periods?: pmb_periodsOmit
    pmb_prodis?: pmb_prodisOmit
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
   * Count Type Pmb_applicantsCountOutputType
   */

  export type Pmb_applicantsCountOutputType = {
    pmb_documents: number
  }

  export type Pmb_applicantsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pmb_documents?: boolean | Pmb_applicantsCountOutputTypeCountPmb_documentsArgs
  }

  // Custom InputTypes
  /**
   * Pmb_applicantsCountOutputType without action
   */
  export type Pmb_applicantsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pmb_applicantsCountOutputType
     */
    select?: Pmb_applicantsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Pmb_applicantsCountOutputType without action
   */
  export type Pmb_applicantsCountOutputTypeCountPmb_documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pmb_documentsWhereInput
  }


  /**
   * Count Type Pmb_periodsCountOutputType
   */

  export type Pmb_periodsCountOutputType = {
    pmb_applicants: number
  }

  export type Pmb_periodsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pmb_applicants?: boolean | Pmb_periodsCountOutputTypeCountPmb_applicantsArgs
  }

  // Custom InputTypes
  /**
   * Pmb_periodsCountOutputType without action
   */
  export type Pmb_periodsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pmb_periodsCountOutputType
     */
    select?: Pmb_periodsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Pmb_periodsCountOutputType without action
   */
  export type Pmb_periodsCountOutputTypeCountPmb_applicantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pmb_applicantsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model pmb_applicants
   */

  export type AggregatePmb_applicants = {
    _count: Pmb_applicantsCountAggregateOutputType | null
    _avg: Pmb_applicantsAvgAggregateOutputType | null
    _sum: Pmb_applicantsSumAggregateOutputType | null
    _min: Pmb_applicantsMinAggregateOutputType | null
    _max: Pmb_applicantsMaxAggregateOutputType | null
  }

  export type Pmb_applicantsAvgAggregateOutputType = {
    selection_score: Decimal | null
  }

  export type Pmb_applicantsSumAggregateOutputType = {
    selection_score: Decimal | null
  }

  export type Pmb_applicantsMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    period_id: string | null
    registration_number: string | null
    full_name: string | null
    email: string | null
    phone_number: string | null
    identity_number: string | null
    address: string | null
    birth_place: string | null
    birth_date: Date | null
    gender: string | null
    religion: string | null
    previous_school: string | null
    first_choice_prodi_id: string | null
    second_choice_prodi_id: string | null
    status: string | null
    selection_score: Decimal | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Pmb_applicantsMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    period_id: string | null
    registration_number: string | null
    full_name: string | null
    email: string | null
    phone_number: string | null
    identity_number: string | null
    address: string | null
    birth_place: string | null
    birth_date: Date | null
    gender: string | null
    religion: string | null
    previous_school: string | null
    first_choice_prodi_id: string | null
    second_choice_prodi_id: string | null
    status: string | null
    selection_score: Decimal | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Pmb_applicantsCountAggregateOutputType = {
    id: number
    tenant_id: number
    period_id: number
    registration_number: number
    full_name: number
    email: number
    phone_number: number
    identity_number: number
    address: number
    birth_place: number
    birth_date: number
    gender: number
    religion: number
    previous_school: number
    first_choice_prodi_id: number
    second_choice_prodi_id: number
    status: number
    selection_score: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Pmb_applicantsAvgAggregateInputType = {
    selection_score?: true
  }

  export type Pmb_applicantsSumAggregateInputType = {
    selection_score?: true
  }

  export type Pmb_applicantsMinAggregateInputType = {
    id?: true
    tenant_id?: true
    period_id?: true
    registration_number?: true
    full_name?: true
    email?: true
    phone_number?: true
    identity_number?: true
    address?: true
    birth_place?: true
    birth_date?: true
    gender?: true
    religion?: true
    previous_school?: true
    first_choice_prodi_id?: true
    second_choice_prodi_id?: true
    status?: true
    selection_score?: true
    created_at?: true
    updated_at?: true
  }

  export type Pmb_applicantsMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    period_id?: true
    registration_number?: true
    full_name?: true
    email?: true
    phone_number?: true
    identity_number?: true
    address?: true
    birth_place?: true
    birth_date?: true
    gender?: true
    religion?: true
    previous_school?: true
    first_choice_prodi_id?: true
    second_choice_prodi_id?: true
    status?: true
    selection_score?: true
    created_at?: true
    updated_at?: true
  }

  export type Pmb_applicantsCountAggregateInputType = {
    id?: true
    tenant_id?: true
    period_id?: true
    registration_number?: true
    full_name?: true
    email?: true
    phone_number?: true
    identity_number?: true
    address?: true
    birth_place?: true
    birth_date?: true
    gender?: true
    religion?: true
    previous_school?: true
    first_choice_prodi_id?: true
    second_choice_prodi_id?: true
    status?: true
    selection_score?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Pmb_applicantsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pmb_applicants to aggregate.
     */
    where?: pmb_applicantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pmb_applicants to fetch.
     */
    orderBy?: pmb_applicantsOrderByWithRelationInput | pmb_applicantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pmb_applicantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pmb_applicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pmb_applicants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pmb_applicants
    **/
    _count?: true | Pmb_applicantsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Pmb_applicantsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Pmb_applicantsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Pmb_applicantsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Pmb_applicantsMaxAggregateInputType
  }

  export type GetPmb_applicantsAggregateType<T extends Pmb_applicantsAggregateArgs> = {
        [P in keyof T & keyof AggregatePmb_applicants]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePmb_applicants[P]>
      : GetScalarType<T[P], AggregatePmb_applicants[P]>
  }




  export type pmb_applicantsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pmb_applicantsWhereInput
    orderBy?: pmb_applicantsOrderByWithAggregationInput | pmb_applicantsOrderByWithAggregationInput[]
    by: Pmb_applicantsScalarFieldEnum[] | Pmb_applicantsScalarFieldEnum
    having?: pmb_applicantsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Pmb_applicantsCountAggregateInputType | true
    _avg?: Pmb_applicantsAvgAggregateInputType
    _sum?: Pmb_applicantsSumAggregateInputType
    _min?: Pmb_applicantsMinAggregateInputType
    _max?: Pmb_applicantsMaxAggregateInputType
  }

  export type Pmb_applicantsGroupByOutputType = {
    id: string
    tenant_id: string
    period_id: string | null
    registration_number: string
    full_name: string
    email: string
    phone_number: string | null
    identity_number: string | null
    address: string | null
    birth_place: string | null
    birth_date: Date | null
    gender: string | null
    religion: string | null
    previous_school: string | null
    first_choice_prodi_id: string | null
    second_choice_prodi_id: string | null
    status: string | null
    selection_score: Decimal | null
    created_at: Date | null
    updated_at: Date | null
    _count: Pmb_applicantsCountAggregateOutputType | null
    _avg: Pmb_applicantsAvgAggregateOutputType | null
    _sum: Pmb_applicantsSumAggregateOutputType | null
    _min: Pmb_applicantsMinAggregateOutputType | null
    _max: Pmb_applicantsMaxAggregateOutputType | null
  }

  type GetPmb_applicantsGroupByPayload<T extends pmb_applicantsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Pmb_applicantsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Pmb_applicantsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Pmb_applicantsGroupByOutputType[P]>
            : GetScalarType<T[P], Pmb_applicantsGroupByOutputType[P]>
        }
      >
    >


  export type pmb_applicantsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    period_id?: boolean
    registration_number?: boolean
    full_name?: boolean
    email?: boolean
    phone_number?: boolean
    identity_number?: boolean
    address?: boolean
    birth_place?: boolean
    birth_date?: boolean
    gender?: boolean
    religion?: boolean
    previous_school?: boolean
    first_choice_prodi_id?: boolean
    second_choice_prodi_id?: boolean
    status?: boolean
    selection_score?: boolean
    created_at?: boolean
    updated_at?: boolean
    pmb_periods?: boolean | pmb_applicants$pmb_periodsArgs<ExtArgs>
    pmb_documents?: boolean | pmb_applicants$pmb_documentsArgs<ExtArgs>
    _count?: boolean | Pmb_applicantsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pmb_applicants"]>

  export type pmb_applicantsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    period_id?: boolean
    registration_number?: boolean
    full_name?: boolean
    email?: boolean
    phone_number?: boolean
    identity_number?: boolean
    address?: boolean
    birth_place?: boolean
    birth_date?: boolean
    gender?: boolean
    religion?: boolean
    previous_school?: boolean
    first_choice_prodi_id?: boolean
    second_choice_prodi_id?: boolean
    status?: boolean
    selection_score?: boolean
    created_at?: boolean
    updated_at?: boolean
    pmb_periods?: boolean | pmb_applicants$pmb_periodsArgs<ExtArgs>
  }, ExtArgs["result"]["pmb_applicants"]>

  export type pmb_applicantsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    period_id?: boolean
    registration_number?: boolean
    full_name?: boolean
    email?: boolean
    phone_number?: boolean
    identity_number?: boolean
    address?: boolean
    birth_place?: boolean
    birth_date?: boolean
    gender?: boolean
    religion?: boolean
    previous_school?: boolean
    first_choice_prodi_id?: boolean
    second_choice_prodi_id?: boolean
    status?: boolean
    selection_score?: boolean
    created_at?: boolean
    updated_at?: boolean
    pmb_periods?: boolean | pmb_applicants$pmb_periodsArgs<ExtArgs>
  }, ExtArgs["result"]["pmb_applicants"]>

  export type pmb_applicantsSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    period_id?: boolean
    registration_number?: boolean
    full_name?: boolean
    email?: boolean
    phone_number?: boolean
    identity_number?: boolean
    address?: boolean
    birth_place?: boolean
    birth_date?: boolean
    gender?: boolean
    religion?: boolean
    previous_school?: boolean
    first_choice_prodi_id?: boolean
    second_choice_prodi_id?: boolean
    status?: boolean
    selection_score?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type pmb_applicantsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenant_id" | "period_id" | "registration_number" | "full_name" | "email" | "phone_number" | "identity_number" | "address" | "birth_place" | "birth_date" | "gender" | "religion" | "previous_school" | "first_choice_prodi_id" | "second_choice_prodi_id" | "status" | "selection_score" | "created_at" | "updated_at", ExtArgs["result"]["pmb_applicants"]>
  export type pmb_applicantsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pmb_periods?: boolean | pmb_applicants$pmb_periodsArgs<ExtArgs>
    pmb_documents?: boolean | pmb_applicants$pmb_documentsArgs<ExtArgs>
    _count?: boolean | Pmb_applicantsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type pmb_applicantsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pmb_periods?: boolean | pmb_applicants$pmb_periodsArgs<ExtArgs>
  }
  export type pmb_applicantsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pmb_periods?: boolean | pmb_applicants$pmb_periodsArgs<ExtArgs>
  }

  export type $pmb_applicantsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pmb_applicants"
    objects: {
      pmb_periods: Prisma.$pmb_periodsPayload<ExtArgs> | null
      pmb_documents: Prisma.$pmb_documentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      period_id: string | null
      registration_number: string
      full_name: string
      email: string
      phone_number: string | null
      identity_number: string | null
      address: string | null
      birth_place: string | null
      birth_date: Date | null
      gender: string | null
      religion: string | null
      previous_school: string | null
      first_choice_prodi_id: string | null
      second_choice_prodi_id: string | null
      status: string | null
      selection_score: Prisma.Decimal | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["pmb_applicants"]>
    composites: {}
  }

  type pmb_applicantsGetPayload<S extends boolean | null | undefined | pmb_applicantsDefaultArgs> = $Result.GetResult<Prisma.$pmb_applicantsPayload, S>

  type pmb_applicantsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pmb_applicantsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Pmb_applicantsCountAggregateInputType | true
    }

  export interface pmb_applicantsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pmb_applicants'], meta: { name: 'pmb_applicants' } }
    /**
     * Find zero or one Pmb_applicants that matches the filter.
     * @param {pmb_applicantsFindUniqueArgs} args - Arguments to find a Pmb_applicants
     * @example
     * // Get one Pmb_applicants
     * const pmb_applicants = await prisma.pmb_applicants.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pmb_applicantsFindUniqueArgs>(args: SelectSubset<T, pmb_applicantsFindUniqueArgs<ExtArgs>>): Prisma__pmb_applicantsClient<$Result.GetResult<Prisma.$pmb_applicantsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pmb_applicants that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pmb_applicantsFindUniqueOrThrowArgs} args - Arguments to find a Pmb_applicants
     * @example
     * // Get one Pmb_applicants
     * const pmb_applicants = await prisma.pmb_applicants.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pmb_applicantsFindUniqueOrThrowArgs>(args: SelectSubset<T, pmb_applicantsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pmb_applicantsClient<$Result.GetResult<Prisma.$pmb_applicantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pmb_applicants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pmb_applicantsFindFirstArgs} args - Arguments to find a Pmb_applicants
     * @example
     * // Get one Pmb_applicants
     * const pmb_applicants = await prisma.pmb_applicants.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pmb_applicantsFindFirstArgs>(args?: SelectSubset<T, pmb_applicantsFindFirstArgs<ExtArgs>>): Prisma__pmb_applicantsClient<$Result.GetResult<Prisma.$pmb_applicantsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pmb_applicants that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pmb_applicantsFindFirstOrThrowArgs} args - Arguments to find a Pmb_applicants
     * @example
     * // Get one Pmb_applicants
     * const pmb_applicants = await prisma.pmb_applicants.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pmb_applicantsFindFirstOrThrowArgs>(args?: SelectSubset<T, pmb_applicantsFindFirstOrThrowArgs<ExtArgs>>): Prisma__pmb_applicantsClient<$Result.GetResult<Prisma.$pmb_applicantsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pmb_applicants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pmb_applicantsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pmb_applicants
     * const pmb_applicants = await prisma.pmb_applicants.findMany()
     * 
     * // Get first 10 Pmb_applicants
     * const pmb_applicants = await prisma.pmb_applicants.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pmb_applicantsWithIdOnly = await prisma.pmb_applicants.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pmb_applicantsFindManyArgs>(args?: SelectSubset<T, pmb_applicantsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pmb_applicantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pmb_applicants.
     * @param {pmb_applicantsCreateArgs} args - Arguments to create a Pmb_applicants.
     * @example
     * // Create one Pmb_applicants
     * const Pmb_applicants = await prisma.pmb_applicants.create({
     *   data: {
     *     // ... data to create a Pmb_applicants
     *   }
     * })
     * 
     */
    create<T extends pmb_applicantsCreateArgs>(args: SelectSubset<T, pmb_applicantsCreateArgs<ExtArgs>>): Prisma__pmb_applicantsClient<$Result.GetResult<Prisma.$pmb_applicantsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pmb_applicants.
     * @param {pmb_applicantsCreateManyArgs} args - Arguments to create many Pmb_applicants.
     * @example
     * // Create many Pmb_applicants
     * const pmb_applicants = await prisma.pmb_applicants.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pmb_applicantsCreateManyArgs>(args?: SelectSubset<T, pmb_applicantsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pmb_applicants and returns the data saved in the database.
     * @param {pmb_applicantsCreateManyAndReturnArgs} args - Arguments to create many Pmb_applicants.
     * @example
     * // Create many Pmb_applicants
     * const pmb_applicants = await prisma.pmb_applicants.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pmb_applicants and only return the `id`
     * const pmb_applicantsWithIdOnly = await prisma.pmb_applicants.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pmb_applicantsCreateManyAndReturnArgs>(args?: SelectSubset<T, pmb_applicantsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pmb_applicantsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pmb_applicants.
     * @param {pmb_applicantsDeleteArgs} args - Arguments to delete one Pmb_applicants.
     * @example
     * // Delete one Pmb_applicants
     * const Pmb_applicants = await prisma.pmb_applicants.delete({
     *   where: {
     *     // ... filter to delete one Pmb_applicants
     *   }
     * })
     * 
     */
    delete<T extends pmb_applicantsDeleteArgs>(args: SelectSubset<T, pmb_applicantsDeleteArgs<ExtArgs>>): Prisma__pmb_applicantsClient<$Result.GetResult<Prisma.$pmb_applicantsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pmb_applicants.
     * @param {pmb_applicantsUpdateArgs} args - Arguments to update one Pmb_applicants.
     * @example
     * // Update one Pmb_applicants
     * const pmb_applicants = await prisma.pmb_applicants.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pmb_applicantsUpdateArgs>(args: SelectSubset<T, pmb_applicantsUpdateArgs<ExtArgs>>): Prisma__pmb_applicantsClient<$Result.GetResult<Prisma.$pmb_applicantsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pmb_applicants.
     * @param {pmb_applicantsDeleteManyArgs} args - Arguments to filter Pmb_applicants to delete.
     * @example
     * // Delete a few Pmb_applicants
     * const { count } = await prisma.pmb_applicants.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pmb_applicantsDeleteManyArgs>(args?: SelectSubset<T, pmb_applicantsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pmb_applicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pmb_applicantsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pmb_applicants
     * const pmb_applicants = await prisma.pmb_applicants.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pmb_applicantsUpdateManyArgs>(args: SelectSubset<T, pmb_applicantsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pmb_applicants and returns the data updated in the database.
     * @param {pmb_applicantsUpdateManyAndReturnArgs} args - Arguments to update many Pmb_applicants.
     * @example
     * // Update many Pmb_applicants
     * const pmb_applicants = await prisma.pmb_applicants.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pmb_applicants and only return the `id`
     * const pmb_applicantsWithIdOnly = await prisma.pmb_applicants.updateManyAndReturn({
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
    updateManyAndReturn<T extends pmb_applicantsUpdateManyAndReturnArgs>(args: SelectSubset<T, pmb_applicantsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pmb_applicantsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pmb_applicants.
     * @param {pmb_applicantsUpsertArgs} args - Arguments to update or create a Pmb_applicants.
     * @example
     * // Update or create a Pmb_applicants
     * const pmb_applicants = await prisma.pmb_applicants.upsert({
     *   create: {
     *     // ... data to create a Pmb_applicants
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pmb_applicants we want to update
     *   }
     * })
     */
    upsert<T extends pmb_applicantsUpsertArgs>(args: SelectSubset<T, pmb_applicantsUpsertArgs<ExtArgs>>): Prisma__pmb_applicantsClient<$Result.GetResult<Prisma.$pmb_applicantsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pmb_applicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pmb_applicantsCountArgs} args - Arguments to filter Pmb_applicants to count.
     * @example
     * // Count the number of Pmb_applicants
     * const count = await prisma.pmb_applicants.count({
     *   where: {
     *     // ... the filter for the Pmb_applicants we want to count
     *   }
     * })
    **/
    count<T extends pmb_applicantsCountArgs>(
      args?: Subset<T, pmb_applicantsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Pmb_applicantsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pmb_applicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pmb_applicantsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Pmb_applicantsAggregateArgs>(args: Subset<T, Pmb_applicantsAggregateArgs>): Prisma.PrismaPromise<GetPmb_applicantsAggregateType<T>>

    /**
     * Group by Pmb_applicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pmb_applicantsGroupByArgs} args - Group by arguments.
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
      T extends pmb_applicantsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pmb_applicantsGroupByArgs['orderBy'] }
        : { orderBy?: pmb_applicantsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pmb_applicantsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPmb_applicantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pmb_applicants model
   */
  readonly fields: pmb_applicantsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pmb_applicants.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pmb_applicantsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pmb_periods<T extends pmb_applicants$pmb_periodsArgs<ExtArgs> = {}>(args?: Subset<T, pmb_applicants$pmb_periodsArgs<ExtArgs>>): Prisma__pmb_periodsClient<$Result.GetResult<Prisma.$pmb_periodsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pmb_documents<T extends pmb_applicants$pmb_documentsArgs<ExtArgs> = {}>(args?: Subset<T, pmb_applicants$pmb_documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pmb_documentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the pmb_applicants model
   */
  interface pmb_applicantsFieldRefs {
    readonly id: FieldRef<"pmb_applicants", 'String'>
    readonly tenant_id: FieldRef<"pmb_applicants", 'String'>
    readonly period_id: FieldRef<"pmb_applicants", 'String'>
    readonly registration_number: FieldRef<"pmb_applicants", 'String'>
    readonly full_name: FieldRef<"pmb_applicants", 'String'>
    readonly email: FieldRef<"pmb_applicants", 'String'>
    readonly phone_number: FieldRef<"pmb_applicants", 'String'>
    readonly identity_number: FieldRef<"pmb_applicants", 'String'>
    readonly address: FieldRef<"pmb_applicants", 'String'>
    readonly birth_place: FieldRef<"pmb_applicants", 'String'>
    readonly birth_date: FieldRef<"pmb_applicants", 'DateTime'>
    readonly gender: FieldRef<"pmb_applicants", 'String'>
    readonly religion: FieldRef<"pmb_applicants", 'String'>
    readonly previous_school: FieldRef<"pmb_applicants", 'String'>
    readonly first_choice_prodi_id: FieldRef<"pmb_applicants", 'String'>
    readonly second_choice_prodi_id: FieldRef<"pmb_applicants", 'String'>
    readonly status: FieldRef<"pmb_applicants", 'String'>
    readonly selection_score: FieldRef<"pmb_applicants", 'Decimal'>
    readonly created_at: FieldRef<"pmb_applicants", 'DateTime'>
    readonly updated_at: FieldRef<"pmb_applicants", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * pmb_applicants findUnique
   */
  export type pmb_applicantsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_applicants
     */
    select?: pmb_applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_applicants
     */
    omit?: pmb_applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pmb_applicantsInclude<ExtArgs> | null
    /**
     * Filter, which pmb_applicants to fetch.
     */
    where: pmb_applicantsWhereUniqueInput
  }

  /**
   * pmb_applicants findUniqueOrThrow
   */
  export type pmb_applicantsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_applicants
     */
    select?: pmb_applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_applicants
     */
    omit?: pmb_applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pmb_applicantsInclude<ExtArgs> | null
    /**
     * Filter, which pmb_applicants to fetch.
     */
    where: pmb_applicantsWhereUniqueInput
  }

  /**
   * pmb_applicants findFirst
   */
  export type pmb_applicantsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_applicants
     */
    select?: pmb_applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_applicants
     */
    omit?: pmb_applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pmb_applicantsInclude<ExtArgs> | null
    /**
     * Filter, which pmb_applicants to fetch.
     */
    where?: pmb_applicantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pmb_applicants to fetch.
     */
    orderBy?: pmb_applicantsOrderByWithRelationInput | pmb_applicantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pmb_applicants.
     */
    cursor?: pmb_applicantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pmb_applicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pmb_applicants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pmb_applicants.
     */
    distinct?: Pmb_applicantsScalarFieldEnum | Pmb_applicantsScalarFieldEnum[]
  }

  /**
   * pmb_applicants findFirstOrThrow
   */
  export type pmb_applicantsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_applicants
     */
    select?: pmb_applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_applicants
     */
    omit?: pmb_applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pmb_applicantsInclude<ExtArgs> | null
    /**
     * Filter, which pmb_applicants to fetch.
     */
    where?: pmb_applicantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pmb_applicants to fetch.
     */
    orderBy?: pmb_applicantsOrderByWithRelationInput | pmb_applicantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pmb_applicants.
     */
    cursor?: pmb_applicantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pmb_applicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pmb_applicants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pmb_applicants.
     */
    distinct?: Pmb_applicantsScalarFieldEnum | Pmb_applicantsScalarFieldEnum[]
  }

  /**
   * pmb_applicants findMany
   */
  export type pmb_applicantsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_applicants
     */
    select?: pmb_applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_applicants
     */
    omit?: pmb_applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pmb_applicantsInclude<ExtArgs> | null
    /**
     * Filter, which pmb_applicants to fetch.
     */
    where?: pmb_applicantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pmb_applicants to fetch.
     */
    orderBy?: pmb_applicantsOrderByWithRelationInput | pmb_applicantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pmb_applicants.
     */
    cursor?: pmb_applicantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pmb_applicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pmb_applicants.
     */
    skip?: number
    distinct?: Pmb_applicantsScalarFieldEnum | Pmb_applicantsScalarFieldEnum[]
  }

  /**
   * pmb_applicants create
   */
  export type pmb_applicantsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_applicants
     */
    select?: pmb_applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_applicants
     */
    omit?: pmb_applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pmb_applicantsInclude<ExtArgs> | null
    /**
     * The data needed to create a pmb_applicants.
     */
    data: XOR<pmb_applicantsCreateInput, pmb_applicantsUncheckedCreateInput>
  }

  /**
   * pmb_applicants createMany
   */
  export type pmb_applicantsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pmb_applicants.
     */
    data: pmb_applicantsCreateManyInput | pmb_applicantsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pmb_applicants createManyAndReturn
   */
  export type pmb_applicantsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_applicants
     */
    select?: pmb_applicantsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_applicants
     */
    omit?: pmb_applicantsOmit<ExtArgs> | null
    /**
     * The data used to create many pmb_applicants.
     */
    data: pmb_applicantsCreateManyInput | pmb_applicantsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pmb_applicantsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pmb_applicants update
   */
  export type pmb_applicantsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_applicants
     */
    select?: pmb_applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_applicants
     */
    omit?: pmb_applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pmb_applicantsInclude<ExtArgs> | null
    /**
     * The data needed to update a pmb_applicants.
     */
    data: XOR<pmb_applicantsUpdateInput, pmb_applicantsUncheckedUpdateInput>
    /**
     * Choose, which pmb_applicants to update.
     */
    where: pmb_applicantsWhereUniqueInput
  }

  /**
   * pmb_applicants updateMany
   */
  export type pmb_applicantsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pmb_applicants.
     */
    data: XOR<pmb_applicantsUpdateManyMutationInput, pmb_applicantsUncheckedUpdateManyInput>
    /**
     * Filter which pmb_applicants to update
     */
    where?: pmb_applicantsWhereInput
    /**
     * Limit how many pmb_applicants to update.
     */
    limit?: number
  }

  /**
   * pmb_applicants updateManyAndReturn
   */
  export type pmb_applicantsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_applicants
     */
    select?: pmb_applicantsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_applicants
     */
    omit?: pmb_applicantsOmit<ExtArgs> | null
    /**
     * The data used to update pmb_applicants.
     */
    data: XOR<pmb_applicantsUpdateManyMutationInput, pmb_applicantsUncheckedUpdateManyInput>
    /**
     * Filter which pmb_applicants to update
     */
    where?: pmb_applicantsWhereInput
    /**
     * Limit how many pmb_applicants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pmb_applicantsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * pmb_applicants upsert
   */
  export type pmb_applicantsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_applicants
     */
    select?: pmb_applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_applicants
     */
    omit?: pmb_applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pmb_applicantsInclude<ExtArgs> | null
    /**
     * The filter to search for the pmb_applicants to update in case it exists.
     */
    where: pmb_applicantsWhereUniqueInput
    /**
     * In case the pmb_applicants found by the `where` argument doesn't exist, create a new pmb_applicants with this data.
     */
    create: XOR<pmb_applicantsCreateInput, pmb_applicantsUncheckedCreateInput>
    /**
     * In case the pmb_applicants was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pmb_applicantsUpdateInput, pmb_applicantsUncheckedUpdateInput>
  }

  /**
   * pmb_applicants delete
   */
  export type pmb_applicantsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_applicants
     */
    select?: pmb_applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_applicants
     */
    omit?: pmb_applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pmb_applicantsInclude<ExtArgs> | null
    /**
     * Filter which pmb_applicants to delete.
     */
    where: pmb_applicantsWhereUniqueInput
  }

  /**
   * pmb_applicants deleteMany
   */
  export type pmb_applicantsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pmb_applicants to delete
     */
    where?: pmb_applicantsWhereInput
    /**
     * Limit how many pmb_applicants to delete.
     */
    limit?: number
  }

  /**
   * pmb_applicants.pmb_periods
   */
  export type pmb_applicants$pmb_periodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_periods
     */
    select?: pmb_periodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_periods
     */
    omit?: pmb_periodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pmb_periodsInclude<ExtArgs> | null
    where?: pmb_periodsWhereInput
  }

  /**
   * pmb_applicants.pmb_documents
   */
  export type pmb_applicants$pmb_documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_documents
     */
    select?: pmb_documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_documents
     */
    omit?: pmb_documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pmb_documentsInclude<ExtArgs> | null
    where?: pmb_documentsWhereInput
    orderBy?: pmb_documentsOrderByWithRelationInput | pmb_documentsOrderByWithRelationInput[]
    cursor?: pmb_documentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Pmb_documentsScalarFieldEnum | Pmb_documentsScalarFieldEnum[]
  }

  /**
   * pmb_applicants without action
   */
  export type pmb_applicantsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_applicants
     */
    select?: pmb_applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_applicants
     */
    omit?: pmb_applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pmb_applicantsInclude<ExtArgs> | null
  }


  /**
   * Model pmb_documents
   */

  export type AggregatePmb_documents = {
    _count: Pmb_documentsCountAggregateOutputType | null
    _min: Pmb_documentsMinAggregateOutputType | null
    _max: Pmb_documentsMaxAggregateOutputType | null
  }

  export type Pmb_documentsMinAggregateOutputType = {
    id: string | null
    applicant_id: string | null
    document_type: string | null
    file_url: string | null
    status: string | null
    notes: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Pmb_documentsMaxAggregateOutputType = {
    id: string | null
    applicant_id: string | null
    document_type: string | null
    file_url: string | null
    status: string | null
    notes: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Pmb_documentsCountAggregateOutputType = {
    id: number
    applicant_id: number
    document_type: number
    file_url: number
    status: number
    notes: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Pmb_documentsMinAggregateInputType = {
    id?: true
    applicant_id?: true
    document_type?: true
    file_url?: true
    status?: true
    notes?: true
    created_at?: true
    updated_at?: true
  }

  export type Pmb_documentsMaxAggregateInputType = {
    id?: true
    applicant_id?: true
    document_type?: true
    file_url?: true
    status?: true
    notes?: true
    created_at?: true
    updated_at?: true
  }

  export type Pmb_documentsCountAggregateInputType = {
    id?: true
    applicant_id?: true
    document_type?: true
    file_url?: true
    status?: true
    notes?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Pmb_documentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pmb_documents to aggregate.
     */
    where?: pmb_documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pmb_documents to fetch.
     */
    orderBy?: pmb_documentsOrderByWithRelationInput | pmb_documentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pmb_documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pmb_documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pmb_documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pmb_documents
    **/
    _count?: true | Pmb_documentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Pmb_documentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Pmb_documentsMaxAggregateInputType
  }

  export type GetPmb_documentsAggregateType<T extends Pmb_documentsAggregateArgs> = {
        [P in keyof T & keyof AggregatePmb_documents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePmb_documents[P]>
      : GetScalarType<T[P], AggregatePmb_documents[P]>
  }




  export type pmb_documentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pmb_documentsWhereInput
    orderBy?: pmb_documentsOrderByWithAggregationInput | pmb_documentsOrderByWithAggregationInput[]
    by: Pmb_documentsScalarFieldEnum[] | Pmb_documentsScalarFieldEnum
    having?: pmb_documentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Pmb_documentsCountAggregateInputType | true
    _min?: Pmb_documentsMinAggregateInputType
    _max?: Pmb_documentsMaxAggregateInputType
  }

  export type Pmb_documentsGroupByOutputType = {
    id: string
    applicant_id: string | null
    document_type: string
    file_url: string
    status: string | null
    notes: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: Pmb_documentsCountAggregateOutputType | null
    _min: Pmb_documentsMinAggregateOutputType | null
    _max: Pmb_documentsMaxAggregateOutputType | null
  }

  type GetPmb_documentsGroupByPayload<T extends pmb_documentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Pmb_documentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Pmb_documentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Pmb_documentsGroupByOutputType[P]>
            : GetScalarType<T[P], Pmb_documentsGroupByOutputType[P]>
        }
      >
    >


  export type pmb_documentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicant_id?: boolean
    document_type?: boolean
    file_url?: boolean
    status?: boolean
    notes?: boolean
    created_at?: boolean
    updated_at?: boolean
    pmb_applicants?: boolean | pmb_documents$pmb_applicantsArgs<ExtArgs>
  }, ExtArgs["result"]["pmb_documents"]>

  export type pmb_documentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicant_id?: boolean
    document_type?: boolean
    file_url?: boolean
    status?: boolean
    notes?: boolean
    created_at?: boolean
    updated_at?: boolean
    pmb_applicants?: boolean | pmb_documents$pmb_applicantsArgs<ExtArgs>
  }, ExtArgs["result"]["pmb_documents"]>

  export type pmb_documentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicant_id?: boolean
    document_type?: boolean
    file_url?: boolean
    status?: boolean
    notes?: boolean
    created_at?: boolean
    updated_at?: boolean
    pmb_applicants?: boolean | pmb_documents$pmb_applicantsArgs<ExtArgs>
  }, ExtArgs["result"]["pmb_documents"]>

  export type pmb_documentsSelectScalar = {
    id?: boolean
    applicant_id?: boolean
    document_type?: boolean
    file_url?: boolean
    status?: boolean
    notes?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type pmb_documentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicant_id" | "document_type" | "file_url" | "status" | "notes" | "created_at" | "updated_at", ExtArgs["result"]["pmb_documents"]>
  export type pmb_documentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pmb_applicants?: boolean | pmb_documents$pmb_applicantsArgs<ExtArgs>
  }
  export type pmb_documentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pmb_applicants?: boolean | pmb_documents$pmb_applicantsArgs<ExtArgs>
  }
  export type pmb_documentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pmb_applicants?: boolean | pmb_documents$pmb_applicantsArgs<ExtArgs>
  }

  export type $pmb_documentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pmb_documents"
    objects: {
      pmb_applicants: Prisma.$pmb_applicantsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      applicant_id: string | null
      document_type: string
      file_url: string
      status: string | null
      notes: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["pmb_documents"]>
    composites: {}
  }

  type pmb_documentsGetPayload<S extends boolean | null | undefined | pmb_documentsDefaultArgs> = $Result.GetResult<Prisma.$pmb_documentsPayload, S>

  type pmb_documentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pmb_documentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Pmb_documentsCountAggregateInputType | true
    }

  export interface pmb_documentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pmb_documents'], meta: { name: 'pmb_documents' } }
    /**
     * Find zero or one Pmb_documents that matches the filter.
     * @param {pmb_documentsFindUniqueArgs} args - Arguments to find a Pmb_documents
     * @example
     * // Get one Pmb_documents
     * const pmb_documents = await prisma.pmb_documents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pmb_documentsFindUniqueArgs>(args: SelectSubset<T, pmb_documentsFindUniqueArgs<ExtArgs>>): Prisma__pmb_documentsClient<$Result.GetResult<Prisma.$pmb_documentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pmb_documents that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pmb_documentsFindUniqueOrThrowArgs} args - Arguments to find a Pmb_documents
     * @example
     * // Get one Pmb_documents
     * const pmb_documents = await prisma.pmb_documents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pmb_documentsFindUniqueOrThrowArgs>(args: SelectSubset<T, pmb_documentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pmb_documentsClient<$Result.GetResult<Prisma.$pmb_documentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pmb_documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pmb_documentsFindFirstArgs} args - Arguments to find a Pmb_documents
     * @example
     * // Get one Pmb_documents
     * const pmb_documents = await prisma.pmb_documents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pmb_documentsFindFirstArgs>(args?: SelectSubset<T, pmb_documentsFindFirstArgs<ExtArgs>>): Prisma__pmb_documentsClient<$Result.GetResult<Prisma.$pmb_documentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pmb_documents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pmb_documentsFindFirstOrThrowArgs} args - Arguments to find a Pmb_documents
     * @example
     * // Get one Pmb_documents
     * const pmb_documents = await prisma.pmb_documents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pmb_documentsFindFirstOrThrowArgs>(args?: SelectSubset<T, pmb_documentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__pmb_documentsClient<$Result.GetResult<Prisma.$pmb_documentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pmb_documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pmb_documentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pmb_documents
     * const pmb_documents = await prisma.pmb_documents.findMany()
     * 
     * // Get first 10 Pmb_documents
     * const pmb_documents = await prisma.pmb_documents.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pmb_documentsWithIdOnly = await prisma.pmb_documents.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pmb_documentsFindManyArgs>(args?: SelectSubset<T, pmb_documentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pmb_documentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pmb_documents.
     * @param {pmb_documentsCreateArgs} args - Arguments to create a Pmb_documents.
     * @example
     * // Create one Pmb_documents
     * const Pmb_documents = await prisma.pmb_documents.create({
     *   data: {
     *     // ... data to create a Pmb_documents
     *   }
     * })
     * 
     */
    create<T extends pmb_documentsCreateArgs>(args: SelectSubset<T, pmb_documentsCreateArgs<ExtArgs>>): Prisma__pmb_documentsClient<$Result.GetResult<Prisma.$pmb_documentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pmb_documents.
     * @param {pmb_documentsCreateManyArgs} args - Arguments to create many Pmb_documents.
     * @example
     * // Create many Pmb_documents
     * const pmb_documents = await prisma.pmb_documents.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pmb_documentsCreateManyArgs>(args?: SelectSubset<T, pmb_documentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pmb_documents and returns the data saved in the database.
     * @param {pmb_documentsCreateManyAndReturnArgs} args - Arguments to create many Pmb_documents.
     * @example
     * // Create many Pmb_documents
     * const pmb_documents = await prisma.pmb_documents.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pmb_documents and only return the `id`
     * const pmb_documentsWithIdOnly = await prisma.pmb_documents.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pmb_documentsCreateManyAndReturnArgs>(args?: SelectSubset<T, pmb_documentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pmb_documentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pmb_documents.
     * @param {pmb_documentsDeleteArgs} args - Arguments to delete one Pmb_documents.
     * @example
     * // Delete one Pmb_documents
     * const Pmb_documents = await prisma.pmb_documents.delete({
     *   where: {
     *     // ... filter to delete one Pmb_documents
     *   }
     * })
     * 
     */
    delete<T extends pmb_documentsDeleteArgs>(args: SelectSubset<T, pmb_documentsDeleteArgs<ExtArgs>>): Prisma__pmb_documentsClient<$Result.GetResult<Prisma.$pmb_documentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pmb_documents.
     * @param {pmb_documentsUpdateArgs} args - Arguments to update one Pmb_documents.
     * @example
     * // Update one Pmb_documents
     * const pmb_documents = await prisma.pmb_documents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pmb_documentsUpdateArgs>(args: SelectSubset<T, pmb_documentsUpdateArgs<ExtArgs>>): Prisma__pmb_documentsClient<$Result.GetResult<Prisma.$pmb_documentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pmb_documents.
     * @param {pmb_documentsDeleteManyArgs} args - Arguments to filter Pmb_documents to delete.
     * @example
     * // Delete a few Pmb_documents
     * const { count } = await prisma.pmb_documents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pmb_documentsDeleteManyArgs>(args?: SelectSubset<T, pmb_documentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pmb_documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pmb_documentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pmb_documents
     * const pmb_documents = await prisma.pmb_documents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pmb_documentsUpdateManyArgs>(args: SelectSubset<T, pmb_documentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pmb_documents and returns the data updated in the database.
     * @param {pmb_documentsUpdateManyAndReturnArgs} args - Arguments to update many Pmb_documents.
     * @example
     * // Update many Pmb_documents
     * const pmb_documents = await prisma.pmb_documents.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pmb_documents and only return the `id`
     * const pmb_documentsWithIdOnly = await prisma.pmb_documents.updateManyAndReturn({
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
    updateManyAndReturn<T extends pmb_documentsUpdateManyAndReturnArgs>(args: SelectSubset<T, pmb_documentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pmb_documentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pmb_documents.
     * @param {pmb_documentsUpsertArgs} args - Arguments to update or create a Pmb_documents.
     * @example
     * // Update or create a Pmb_documents
     * const pmb_documents = await prisma.pmb_documents.upsert({
     *   create: {
     *     // ... data to create a Pmb_documents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pmb_documents we want to update
     *   }
     * })
     */
    upsert<T extends pmb_documentsUpsertArgs>(args: SelectSubset<T, pmb_documentsUpsertArgs<ExtArgs>>): Prisma__pmb_documentsClient<$Result.GetResult<Prisma.$pmb_documentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pmb_documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pmb_documentsCountArgs} args - Arguments to filter Pmb_documents to count.
     * @example
     * // Count the number of Pmb_documents
     * const count = await prisma.pmb_documents.count({
     *   where: {
     *     // ... the filter for the Pmb_documents we want to count
     *   }
     * })
    **/
    count<T extends pmb_documentsCountArgs>(
      args?: Subset<T, pmb_documentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Pmb_documentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pmb_documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pmb_documentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Pmb_documentsAggregateArgs>(args: Subset<T, Pmb_documentsAggregateArgs>): Prisma.PrismaPromise<GetPmb_documentsAggregateType<T>>

    /**
     * Group by Pmb_documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pmb_documentsGroupByArgs} args - Group by arguments.
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
      T extends pmb_documentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pmb_documentsGroupByArgs['orderBy'] }
        : { orderBy?: pmb_documentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pmb_documentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPmb_documentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pmb_documents model
   */
  readonly fields: pmb_documentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pmb_documents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pmb_documentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pmb_applicants<T extends pmb_documents$pmb_applicantsArgs<ExtArgs> = {}>(args?: Subset<T, pmb_documents$pmb_applicantsArgs<ExtArgs>>): Prisma__pmb_applicantsClient<$Result.GetResult<Prisma.$pmb_applicantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the pmb_documents model
   */
  interface pmb_documentsFieldRefs {
    readonly id: FieldRef<"pmb_documents", 'String'>
    readonly applicant_id: FieldRef<"pmb_documents", 'String'>
    readonly document_type: FieldRef<"pmb_documents", 'String'>
    readonly file_url: FieldRef<"pmb_documents", 'String'>
    readonly status: FieldRef<"pmb_documents", 'String'>
    readonly notes: FieldRef<"pmb_documents", 'String'>
    readonly created_at: FieldRef<"pmb_documents", 'DateTime'>
    readonly updated_at: FieldRef<"pmb_documents", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * pmb_documents findUnique
   */
  export type pmb_documentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_documents
     */
    select?: pmb_documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_documents
     */
    omit?: pmb_documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pmb_documentsInclude<ExtArgs> | null
    /**
     * Filter, which pmb_documents to fetch.
     */
    where: pmb_documentsWhereUniqueInput
  }

  /**
   * pmb_documents findUniqueOrThrow
   */
  export type pmb_documentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_documents
     */
    select?: pmb_documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_documents
     */
    omit?: pmb_documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pmb_documentsInclude<ExtArgs> | null
    /**
     * Filter, which pmb_documents to fetch.
     */
    where: pmb_documentsWhereUniqueInput
  }

  /**
   * pmb_documents findFirst
   */
  export type pmb_documentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_documents
     */
    select?: pmb_documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_documents
     */
    omit?: pmb_documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pmb_documentsInclude<ExtArgs> | null
    /**
     * Filter, which pmb_documents to fetch.
     */
    where?: pmb_documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pmb_documents to fetch.
     */
    orderBy?: pmb_documentsOrderByWithRelationInput | pmb_documentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pmb_documents.
     */
    cursor?: pmb_documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pmb_documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pmb_documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pmb_documents.
     */
    distinct?: Pmb_documentsScalarFieldEnum | Pmb_documentsScalarFieldEnum[]
  }

  /**
   * pmb_documents findFirstOrThrow
   */
  export type pmb_documentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_documents
     */
    select?: pmb_documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_documents
     */
    omit?: pmb_documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pmb_documentsInclude<ExtArgs> | null
    /**
     * Filter, which pmb_documents to fetch.
     */
    where?: pmb_documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pmb_documents to fetch.
     */
    orderBy?: pmb_documentsOrderByWithRelationInput | pmb_documentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pmb_documents.
     */
    cursor?: pmb_documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pmb_documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pmb_documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pmb_documents.
     */
    distinct?: Pmb_documentsScalarFieldEnum | Pmb_documentsScalarFieldEnum[]
  }

  /**
   * pmb_documents findMany
   */
  export type pmb_documentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_documents
     */
    select?: pmb_documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_documents
     */
    omit?: pmb_documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pmb_documentsInclude<ExtArgs> | null
    /**
     * Filter, which pmb_documents to fetch.
     */
    where?: pmb_documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pmb_documents to fetch.
     */
    orderBy?: pmb_documentsOrderByWithRelationInput | pmb_documentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pmb_documents.
     */
    cursor?: pmb_documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pmb_documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pmb_documents.
     */
    skip?: number
    distinct?: Pmb_documentsScalarFieldEnum | Pmb_documentsScalarFieldEnum[]
  }

  /**
   * pmb_documents create
   */
  export type pmb_documentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_documents
     */
    select?: pmb_documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_documents
     */
    omit?: pmb_documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pmb_documentsInclude<ExtArgs> | null
    /**
     * The data needed to create a pmb_documents.
     */
    data: XOR<pmb_documentsCreateInput, pmb_documentsUncheckedCreateInput>
  }

  /**
   * pmb_documents createMany
   */
  export type pmb_documentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pmb_documents.
     */
    data: pmb_documentsCreateManyInput | pmb_documentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pmb_documents createManyAndReturn
   */
  export type pmb_documentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_documents
     */
    select?: pmb_documentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_documents
     */
    omit?: pmb_documentsOmit<ExtArgs> | null
    /**
     * The data used to create many pmb_documents.
     */
    data: pmb_documentsCreateManyInput | pmb_documentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pmb_documentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pmb_documents update
   */
  export type pmb_documentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_documents
     */
    select?: pmb_documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_documents
     */
    omit?: pmb_documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pmb_documentsInclude<ExtArgs> | null
    /**
     * The data needed to update a pmb_documents.
     */
    data: XOR<pmb_documentsUpdateInput, pmb_documentsUncheckedUpdateInput>
    /**
     * Choose, which pmb_documents to update.
     */
    where: pmb_documentsWhereUniqueInput
  }

  /**
   * pmb_documents updateMany
   */
  export type pmb_documentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pmb_documents.
     */
    data: XOR<pmb_documentsUpdateManyMutationInput, pmb_documentsUncheckedUpdateManyInput>
    /**
     * Filter which pmb_documents to update
     */
    where?: pmb_documentsWhereInput
    /**
     * Limit how many pmb_documents to update.
     */
    limit?: number
  }

  /**
   * pmb_documents updateManyAndReturn
   */
  export type pmb_documentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_documents
     */
    select?: pmb_documentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_documents
     */
    omit?: pmb_documentsOmit<ExtArgs> | null
    /**
     * The data used to update pmb_documents.
     */
    data: XOR<pmb_documentsUpdateManyMutationInput, pmb_documentsUncheckedUpdateManyInput>
    /**
     * Filter which pmb_documents to update
     */
    where?: pmb_documentsWhereInput
    /**
     * Limit how many pmb_documents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pmb_documentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * pmb_documents upsert
   */
  export type pmb_documentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_documents
     */
    select?: pmb_documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_documents
     */
    omit?: pmb_documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pmb_documentsInclude<ExtArgs> | null
    /**
     * The filter to search for the pmb_documents to update in case it exists.
     */
    where: pmb_documentsWhereUniqueInput
    /**
     * In case the pmb_documents found by the `where` argument doesn't exist, create a new pmb_documents with this data.
     */
    create: XOR<pmb_documentsCreateInput, pmb_documentsUncheckedCreateInput>
    /**
     * In case the pmb_documents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pmb_documentsUpdateInput, pmb_documentsUncheckedUpdateInput>
  }

  /**
   * pmb_documents delete
   */
  export type pmb_documentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_documents
     */
    select?: pmb_documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_documents
     */
    omit?: pmb_documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pmb_documentsInclude<ExtArgs> | null
    /**
     * Filter which pmb_documents to delete.
     */
    where: pmb_documentsWhereUniqueInput
  }

  /**
   * pmb_documents deleteMany
   */
  export type pmb_documentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pmb_documents to delete
     */
    where?: pmb_documentsWhereInput
    /**
     * Limit how many pmb_documents to delete.
     */
    limit?: number
  }

  /**
   * pmb_documents.pmb_applicants
   */
  export type pmb_documents$pmb_applicantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_applicants
     */
    select?: pmb_applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_applicants
     */
    omit?: pmb_applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pmb_applicantsInclude<ExtArgs> | null
    where?: pmb_applicantsWhereInput
  }

  /**
   * pmb_documents without action
   */
  export type pmb_documentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_documents
     */
    select?: pmb_documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_documents
     */
    omit?: pmb_documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pmb_documentsInclude<ExtArgs> | null
  }


  /**
   * Model pmb_periods
   */

  export type AggregatePmb_periods = {
    _count: Pmb_periodsCountAggregateOutputType | null
    _min: Pmb_periodsMinAggregateOutputType | null
    _max: Pmb_periodsMaxAggregateOutputType | null
  }

  export type Pmb_periodsMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    name: string | null
    start_date: Date | null
    end_date: Date | null
    is_active: boolean | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Pmb_periodsMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    name: string | null
    start_date: Date | null
    end_date: Date | null
    is_active: boolean | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Pmb_periodsCountAggregateOutputType = {
    id: number
    tenant_id: number
    name: number
    start_date: number
    end_date: number
    is_active: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Pmb_periodsMinAggregateInputType = {
    id?: true
    tenant_id?: true
    name?: true
    start_date?: true
    end_date?: true
    is_active?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type Pmb_periodsMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    name?: true
    start_date?: true
    end_date?: true
    is_active?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type Pmb_periodsCountAggregateInputType = {
    id?: true
    tenant_id?: true
    name?: true
    start_date?: true
    end_date?: true
    is_active?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Pmb_periodsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pmb_periods to aggregate.
     */
    where?: pmb_periodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pmb_periods to fetch.
     */
    orderBy?: pmb_periodsOrderByWithRelationInput | pmb_periodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pmb_periodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pmb_periods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pmb_periods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pmb_periods
    **/
    _count?: true | Pmb_periodsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Pmb_periodsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Pmb_periodsMaxAggregateInputType
  }

  export type GetPmb_periodsAggregateType<T extends Pmb_periodsAggregateArgs> = {
        [P in keyof T & keyof AggregatePmb_periods]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePmb_periods[P]>
      : GetScalarType<T[P], AggregatePmb_periods[P]>
  }




  export type pmb_periodsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pmb_periodsWhereInput
    orderBy?: pmb_periodsOrderByWithAggregationInput | pmb_periodsOrderByWithAggregationInput[]
    by: Pmb_periodsScalarFieldEnum[] | Pmb_periodsScalarFieldEnum
    having?: pmb_periodsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Pmb_periodsCountAggregateInputType | true
    _min?: Pmb_periodsMinAggregateInputType
    _max?: Pmb_periodsMaxAggregateInputType
  }

  export type Pmb_periodsGroupByOutputType = {
    id: string
    tenant_id: string
    name: string
    start_date: Date
    end_date: Date
    is_active: boolean | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: Pmb_periodsCountAggregateOutputType | null
    _min: Pmb_periodsMinAggregateOutputType | null
    _max: Pmb_periodsMaxAggregateOutputType | null
  }

  type GetPmb_periodsGroupByPayload<T extends pmb_periodsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Pmb_periodsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Pmb_periodsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Pmb_periodsGroupByOutputType[P]>
            : GetScalarType<T[P], Pmb_periodsGroupByOutputType[P]>
        }
      >
    >


  export type pmb_periodsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    name?: boolean
    start_date?: boolean
    end_date?: boolean
    is_active?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    pmb_applicants?: boolean | pmb_periods$pmb_applicantsArgs<ExtArgs>
    _count?: boolean | Pmb_periodsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pmb_periods"]>

  export type pmb_periodsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    name?: boolean
    start_date?: boolean
    end_date?: boolean
    is_active?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["pmb_periods"]>

  export type pmb_periodsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    name?: boolean
    start_date?: boolean
    end_date?: boolean
    is_active?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["pmb_periods"]>

  export type pmb_periodsSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    name?: boolean
    start_date?: boolean
    end_date?: boolean
    is_active?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type pmb_periodsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenant_id" | "name" | "start_date" | "end_date" | "is_active" | "description" | "created_at" | "updated_at", ExtArgs["result"]["pmb_periods"]>
  export type pmb_periodsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pmb_applicants?: boolean | pmb_periods$pmb_applicantsArgs<ExtArgs>
    _count?: boolean | Pmb_periodsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type pmb_periodsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type pmb_periodsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $pmb_periodsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pmb_periods"
    objects: {
      pmb_applicants: Prisma.$pmb_applicantsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      name: string
      start_date: Date
      end_date: Date
      is_active: boolean | null
      description: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["pmb_periods"]>
    composites: {}
  }

  type pmb_periodsGetPayload<S extends boolean | null | undefined | pmb_periodsDefaultArgs> = $Result.GetResult<Prisma.$pmb_periodsPayload, S>

  type pmb_periodsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pmb_periodsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Pmb_periodsCountAggregateInputType | true
    }

  export interface pmb_periodsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pmb_periods'], meta: { name: 'pmb_periods' } }
    /**
     * Find zero or one Pmb_periods that matches the filter.
     * @param {pmb_periodsFindUniqueArgs} args - Arguments to find a Pmb_periods
     * @example
     * // Get one Pmb_periods
     * const pmb_periods = await prisma.pmb_periods.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pmb_periodsFindUniqueArgs>(args: SelectSubset<T, pmb_periodsFindUniqueArgs<ExtArgs>>): Prisma__pmb_periodsClient<$Result.GetResult<Prisma.$pmb_periodsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pmb_periods that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pmb_periodsFindUniqueOrThrowArgs} args - Arguments to find a Pmb_periods
     * @example
     * // Get one Pmb_periods
     * const pmb_periods = await prisma.pmb_periods.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pmb_periodsFindUniqueOrThrowArgs>(args: SelectSubset<T, pmb_periodsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pmb_periodsClient<$Result.GetResult<Prisma.$pmb_periodsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pmb_periods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pmb_periodsFindFirstArgs} args - Arguments to find a Pmb_periods
     * @example
     * // Get one Pmb_periods
     * const pmb_periods = await prisma.pmb_periods.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pmb_periodsFindFirstArgs>(args?: SelectSubset<T, pmb_periodsFindFirstArgs<ExtArgs>>): Prisma__pmb_periodsClient<$Result.GetResult<Prisma.$pmb_periodsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pmb_periods that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pmb_periodsFindFirstOrThrowArgs} args - Arguments to find a Pmb_periods
     * @example
     * // Get one Pmb_periods
     * const pmb_periods = await prisma.pmb_periods.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pmb_periodsFindFirstOrThrowArgs>(args?: SelectSubset<T, pmb_periodsFindFirstOrThrowArgs<ExtArgs>>): Prisma__pmb_periodsClient<$Result.GetResult<Prisma.$pmb_periodsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pmb_periods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pmb_periodsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pmb_periods
     * const pmb_periods = await prisma.pmb_periods.findMany()
     * 
     * // Get first 10 Pmb_periods
     * const pmb_periods = await prisma.pmb_periods.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pmb_periodsWithIdOnly = await prisma.pmb_periods.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pmb_periodsFindManyArgs>(args?: SelectSubset<T, pmb_periodsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pmb_periodsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pmb_periods.
     * @param {pmb_periodsCreateArgs} args - Arguments to create a Pmb_periods.
     * @example
     * // Create one Pmb_periods
     * const Pmb_periods = await prisma.pmb_periods.create({
     *   data: {
     *     // ... data to create a Pmb_periods
     *   }
     * })
     * 
     */
    create<T extends pmb_periodsCreateArgs>(args: SelectSubset<T, pmb_periodsCreateArgs<ExtArgs>>): Prisma__pmb_periodsClient<$Result.GetResult<Prisma.$pmb_periodsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pmb_periods.
     * @param {pmb_periodsCreateManyArgs} args - Arguments to create many Pmb_periods.
     * @example
     * // Create many Pmb_periods
     * const pmb_periods = await prisma.pmb_periods.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pmb_periodsCreateManyArgs>(args?: SelectSubset<T, pmb_periodsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pmb_periods and returns the data saved in the database.
     * @param {pmb_periodsCreateManyAndReturnArgs} args - Arguments to create many Pmb_periods.
     * @example
     * // Create many Pmb_periods
     * const pmb_periods = await prisma.pmb_periods.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pmb_periods and only return the `id`
     * const pmb_periodsWithIdOnly = await prisma.pmb_periods.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pmb_periodsCreateManyAndReturnArgs>(args?: SelectSubset<T, pmb_periodsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pmb_periodsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pmb_periods.
     * @param {pmb_periodsDeleteArgs} args - Arguments to delete one Pmb_periods.
     * @example
     * // Delete one Pmb_periods
     * const Pmb_periods = await prisma.pmb_periods.delete({
     *   where: {
     *     // ... filter to delete one Pmb_periods
     *   }
     * })
     * 
     */
    delete<T extends pmb_periodsDeleteArgs>(args: SelectSubset<T, pmb_periodsDeleteArgs<ExtArgs>>): Prisma__pmb_periodsClient<$Result.GetResult<Prisma.$pmb_periodsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pmb_periods.
     * @param {pmb_periodsUpdateArgs} args - Arguments to update one Pmb_periods.
     * @example
     * // Update one Pmb_periods
     * const pmb_periods = await prisma.pmb_periods.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pmb_periodsUpdateArgs>(args: SelectSubset<T, pmb_periodsUpdateArgs<ExtArgs>>): Prisma__pmb_periodsClient<$Result.GetResult<Prisma.$pmb_periodsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pmb_periods.
     * @param {pmb_periodsDeleteManyArgs} args - Arguments to filter Pmb_periods to delete.
     * @example
     * // Delete a few Pmb_periods
     * const { count } = await prisma.pmb_periods.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pmb_periodsDeleteManyArgs>(args?: SelectSubset<T, pmb_periodsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pmb_periods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pmb_periodsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pmb_periods
     * const pmb_periods = await prisma.pmb_periods.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pmb_periodsUpdateManyArgs>(args: SelectSubset<T, pmb_periodsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pmb_periods and returns the data updated in the database.
     * @param {pmb_periodsUpdateManyAndReturnArgs} args - Arguments to update many Pmb_periods.
     * @example
     * // Update many Pmb_periods
     * const pmb_periods = await prisma.pmb_periods.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pmb_periods and only return the `id`
     * const pmb_periodsWithIdOnly = await prisma.pmb_periods.updateManyAndReturn({
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
    updateManyAndReturn<T extends pmb_periodsUpdateManyAndReturnArgs>(args: SelectSubset<T, pmb_periodsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pmb_periodsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pmb_periods.
     * @param {pmb_periodsUpsertArgs} args - Arguments to update or create a Pmb_periods.
     * @example
     * // Update or create a Pmb_periods
     * const pmb_periods = await prisma.pmb_periods.upsert({
     *   create: {
     *     // ... data to create a Pmb_periods
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pmb_periods we want to update
     *   }
     * })
     */
    upsert<T extends pmb_periodsUpsertArgs>(args: SelectSubset<T, pmb_periodsUpsertArgs<ExtArgs>>): Prisma__pmb_periodsClient<$Result.GetResult<Prisma.$pmb_periodsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pmb_periods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pmb_periodsCountArgs} args - Arguments to filter Pmb_periods to count.
     * @example
     * // Count the number of Pmb_periods
     * const count = await prisma.pmb_periods.count({
     *   where: {
     *     // ... the filter for the Pmb_periods we want to count
     *   }
     * })
    **/
    count<T extends pmb_periodsCountArgs>(
      args?: Subset<T, pmb_periodsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Pmb_periodsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pmb_periods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pmb_periodsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Pmb_periodsAggregateArgs>(args: Subset<T, Pmb_periodsAggregateArgs>): Prisma.PrismaPromise<GetPmb_periodsAggregateType<T>>

    /**
     * Group by Pmb_periods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pmb_periodsGroupByArgs} args - Group by arguments.
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
      T extends pmb_periodsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pmb_periodsGroupByArgs['orderBy'] }
        : { orderBy?: pmb_periodsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pmb_periodsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPmb_periodsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pmb_periods model
   */
  readonly fields: pmb_periodsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pmb_periods.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pmb_periodsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pmb_applicants<T extends pmb_periods$pmb_applicantsArgs<ExtArgs> = {}>(args?: Subset<T, pmb_periods$pmb_applicantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pmb_applicantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the pmb_periods model
   */
  interface pmb_periodsFieldRefs {
    readonly id: FieldRef<"pmb_periods", 'String'>
    readonly tenant_id: FieldRef<"pmb_periods", 'String'>
    readonly name: FieldRef<"pmb_periods", 'String'>
    readonly start_date: FieldRef<"pmb_periods", 'DateTime'>
    readonly end_date: FieldRef<"pmb_periods", 'DateTime'>
    readonly is_active: FieldRef<"pmb_periods", 'Boolean'>
    readonly description: FieldRef<"pmb_periods", 'String'>
    readonly created_at: FieldRef<"pmb_periods", 'DateTime'>
    readonly updated_at: FieldRef<"pmb_periods", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * pmb_periods findUnique
   */
  export type pmb_periodsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_periods
     */
    select?: pmb_periodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_periods
     */
    omit?: pmb_periodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pmb_periodsInclude<ExtArgs> | null
    /**
     * Filter, which pmb_periods to fetch.
     */
    where: pmb_periodsWhereUniqueInput
  }

  /**
   * pmb_periods findUniqueOrThrow
   */
  export type pmb_periodsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_periods
     */
    select?: pmb_periodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_periods
     */
    omit?: pmb_periodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pmb_periodsInclude<ExtArgs> | null
    /**
     * Filter, which pmb_periods to fetch.
     */
    where: pmb_periodsWhereUniqueInput
  }

  /**
   * pmb_periods findFirst
   */
  export type pmb_periodsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_periods
     */
    select?: pmb_periodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_periods
     */
    omit?: pmb_periodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pmb_periodsInclude<ExtArgs> | null
    /**
     * Filter, which pmb_periods to fetch.
     */
    where?: pmb_periodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pmb_periods to fetch.
     */
    orderBy?: pmb_periodsOrderByWithRelationInput | pmb_periodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pmb_periods.
     */
    cursor?: pmb_periodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pmb_periods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pmb_periods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pmb_periods.
     */
    distinct?: Pmb_periodsScalarFieldEnum | Pmb_periodsScalarFieldEnum[]
  }

  /**
   * pmb_periods findFirstOrThrow
   */
  export type pmb_periodsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_periods
     */
    select?: pmb_periodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_periods
     */
    omit?: pmb_periodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pmb_periodsInclude<ExtArgs> | null
    /**
     * Filter, which pmb_periods to fetch.
     */
    where?: pmb_periodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pmb_periods to fetch.
     */
    orderBy?: pmb_periodsOrderByWithRelationInput | pmb_periodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pmb_periods.
     */
    cursor?: pmb_periodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pmb_periods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pmb_periods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pmb_periods.
     */
    distinct?: Pmb_periodsScalarFieldEnum | Pmb_periodsScalarFieldEnum[]
  }

  /**
   * pmb_periods findMany
   */
  export type pmb_periodsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_periods
     */
    select?: pmb_periodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_periods
     */
    omit?: pmb_periodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pmb_periodsInclude<ExtArgs> | null
    /**
     * Filter, which pmb_periods to fetch.
     */
    where?: pmb_periodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pmb_periods to fetch.
     */
    orderBy?: pmb_periodsOrderByWithRelationInput | pmb_periodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pmb_periods.
     */
    cursor?: pmb_periodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pmb_periods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pmb_periods.
     */
    skip?: number
    distinct?: Pmb_periodsScalarFieldEnum | Pmb_periodsScalarFieldEnum[]
  }

  /**
   * pmb_periods create
   */
  export type pmb_periodsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_periods
     */
    select?: pmb_periodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_periods
     */
    omit?: pmb_periodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pmb_periodsInclude<ExtArgs> | null
    /**
     * The data needed to create a pmb_periods.
     */
    data: XOR<pmb_periodsCreateInput, pmb_periodsUncheckedCreateInput>
  }

  /**
   * pmb_periods createMany
   */
  export type pmb_periodsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pmb_periods.
     */
    data: pmb_periodsCreateManyInput | pmb_periodsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pmb_periods createManyAndReturn
   */
  export type pmb_periodsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_periods
     */
    select?: pmb_periodsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_periods
     */
    omit?: pmb_periodsOmit<ExtArgs> | null
    /**
     * The data used to create many pmb_periods.
     */
    data: pmb_periodsCreateManyInput | pmb_periodsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pmb_periods update
   */
  export type pmb_periodsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_periods
     */
    select?: pmb_periodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_periods
     */
    omit?: pmb_periodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pmb_periodsInclude<ExtArgs> | null
    /**
     * The data needed to update a pmb_periods.
     */
    data: XOR<pmb_periodsUpdateInput, pmb_periodsUncheckedUpdateInput>
    /**
     * Choose, which pmb_periods to update.
     */
    where: pmb_periodsWhereUniqueInput
  }

  /**
   * pmb_periods updateMany
   */
  export type pmb_periodsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pmb_periods.
     */
    data: XOR<pmb_periodsUpdateManyMutationInput, pmb_periodsUncheckedUpdateManyInput>
    /**
     * Filter which pmb_periods to update
     */
    where?: pmb_periodsWhereInput
    /**
     * Limit how many pmb_periods to update.
     */
    limit?: number
  }

  /**
   * pmb_periods updateManyAndReturn
   */
  export type pmb_periodsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_periods
     */
    select?: pmb_periodsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_periods
     */
    omit?: pmb_periodsOmit<ExtArgs> | null
    /**
     * The data used to update pmb_periods.
     */
    data: XOR<pmb_periodsUpdateManyMutationInput, pmb_periodsUncheckedUpdateManyInput>
    /**
     * Filter which pmb_periods to update
     */
    where?: pmb_periodsWhereInput
    /**
     * Limit how many pmb_periods to update.
     */
    limit?: number
  }

  /**
   * pmb_periods upsert
   */
  export type pmb_periodsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_periods
     */
    select?: pmb_periodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_periods
     */
    omit?: pmb_periodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pmb_periodsInclude<ExtArgs> | null
    /**
     * The filter to search for the pmb_periods to update in case it exists.
     */
    where: pmb_periodsWhereUniqueInput
    /**
     * In case the pmb_periods found by the `where` argument doesn't exist, create a new pmb_periods with this data.
     */
    create: XOR<pmb_periodsCreateInput, pmb_periodsUncheckedCreateInput>
    /**
     * In case the pmb_periods was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pmb_periodsUpdateInput, pmb_periodsUncheckedUpdateInput>
  }

  /**
   * pmb_periods delete
   */
  export type pmb_periodsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_periods
     */
    select?: pmb_periodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_periods
     */
    omit?: pmb_periodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pmb_periodsInclude<ExtArgs> | null
    /**
     * Filter which pmb_periods to delete.
     */
    where: pmb_periodsWhereUniqueInput
  }

  /**
   * pmb_periods deleteMany
   */
  export type pmb_periodsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pmb_periods to delete
     */
    where?: pmb_periodsWhereInput
    /**
     * Limit how many pmb_periods to delete.
     */
    limit?: number
  }

  /**
   * pmb_periods.pmb_applicants
   */
  export type pmb_periods$pmb_applicantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_applicants
     */
    select?: pmb_applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_applicants
     */
    omit?: pmb_applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pmb_applicantsInclude<ExtArgs> | null
    where?: pmb_applicantsWhereInput
    orderBy?: pmb_applicantsOrderByWithRelationInput | pmb_applicantsOrderByWithRelationInput[]
    cursor?: pmb_applicantsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Pmb_applicantsScalarFieldEnum | Pmb_applicantsScalarFieldEnum[]
  }

  /**
   * pmb_periods without action
   */
  export type pmb_periodsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_periods
     */
    select?: pmb_periodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_periods
     */
    omit?: pmb_periodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pmb_periodsInclude<ExtArgs> | null
  }


  /**
   * Model pmb_prodis
   */

  export type AggregatePmb_prodis = {
    _count: Pmb_prodisCountAggregateOutputType | null
    _min: Pmb_prodisMinAggregateOutputType | null
    _max: Pmb_prodisMaxAggregateOutputType | null
  }

  export type Pmb_prodisMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    name: string | null
    faculty: string | null
    is_active: boolean | null
    created_at: Date | null
  }

  export type Pmb_prodisMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    name: string | null
    faculty: string | null
    is_active: boolean | null
    created_at: Date | null
  }

  export type Pmb_prodisCountAggregateOutputType = {
    id: number
    tenant_id: number
    name: number
    faculty: number
    is_active: number
    created_at: number
    _all: number
  }


  export type Pmb_prodisMinAggregateInputType = {
    id?: true
    tenant_id?: true
    name?: true
    faculty?: true
    is_active?: true
    created_at?: true
  }

  export type Pmb_prodisMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    name?: true
    faculty?: true
    is_active?: true
    created_at?: true
  }

  export type Pmb_prodisCountAggregateInputType = {
    id?: true
    tenant_id?: true
    name?: true
    faculty?: true
    is_active?: true
    created_at?: true
    _all?: true
  }

  export type Pmb_prodisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pmb_prodis to aggregate.
     */
    where?: pmb_prodisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pmb_prodis to fetch.
     */
    orderBy?: pmb_prodisOrderByWithRelationInput | pmb_prodisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pmb_prodisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pmb_prodis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pmb_prodis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pmb_prodis
    **/
    _count?: true | Pmb_prodisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Pmb_prodisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Pmb_prodisMaxAggregateInputType
  }

  export type GetPmb_prodisAggregateType<T extends Pmb_prodisAggregateArgs> = {
        [P in keyof T & keyof AggregatePmb_prodis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePmb_prodis[P]>
      : GetScalarType<T[P], AggregatePmb_prodis[P]>
  }




  export type pmb_prodisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pmb_prodisWhereInput
    orderBy?: pmb_prodisOrderByWithAggregationInput | pmb_prodisOrderByWithAggregationInput[]
    by: Pmb_prodisScalarFieldEnum[] | Pmb_prodisScalarFieldEnum
    having?: pmb_prodisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Pmb_prodisCountAggregateInputType | true
    _min?: Pmb_prodisMinAggregateInputType
    _max?: Pmb_prodisMaxAggregateInputType
  }

  export type Pmb_prodisGroupByOutputType = {
    id: string
    tenant_id: string
    name: string
    faculty: string | null
    is_active: boolean | null
    created_at: Date | null
    _count: Pmb_prodisCountAggregateOutputType | null
    _min: Pmb_prodisMinAggregateOutputType | null
    _max: Pmb_prodisMaxAggregateOutputType | null
  }

  type GetPmb_prodisGroupByPayload<T extends pmb_prodisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Pmb_prodisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Pmb_prodisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Pmb_prodisGroupByOutputType[P]>
            : GetScalarType<T[P], Pmb_prodisGroupByOutputType[P]>
        }
      >
    >


  export type pmb_prodisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    name?: boolean
    faculty?: boolean
    is_active?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["pmb_prodis"]>

  export type pmb_prodisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    name?: boolean
    faculty?: boolean
    is_active?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["pmb_prodis"]>

  export type pmb_prodisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    name?: boolean
    faculty?: boolean
    is_active?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["pmb_prodis"]>

  export type pmb_prodisSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    name?: boolean
    faculty?: boolean
    is_active?: boolean
    created_at?: boolean
  }

  export type pmb_prodisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenant_id" | "name" | "faculty" | "is_active" | "created_at", ExtArgs["result"]["pmb_prodis"]>

  export type $pmb_prodisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pmb_prodis"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      name: string
      faculty: string | null
      is_active: boolean | null
      created_at: Date | null
    }, ExtArgs["result"]["pmb_prodis"]>
    composites: {}
  }

  type pmb_prodisGetPayload<S extends boolean | null | undefined | pmb_prodisDefaultArgs> = $Result.GetResult<Prisma.$pmb_prodisPayload, S>

  type pmb_prodisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pmb_prodisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Pmb_prodisCountAggregateInputType | true
    }

  export interface pmb_prodisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pmb_prodis'], meta: { name: 'pmb_prodis' } }
    /**
     * Find zero or one Pmb_prodis that matches the filter.
     * @param {pmb_prodisFindUniqueArgs} args - Arguments to find a Pmb_prodis
     * @example
     * // Get one Pmb_prodis
     * const pmb_prodis = await prisma.pmb_prodis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pmb_prodisFindUniqueArgs>(args: SelectSubset<T, pmb_prodisFindUniqueArgs<ExtArgs>>): Prisma__pmb_prodisClient<$Result.GetResult<Prisma.$pmb_prodisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pmb_prodis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pmb_prodisFindUniqueOrThrowArgs} args - Arguments to find a Pmb_prodis
     * @example
     * // Get one Pmb_prodis
     * const pmb_prodis = await prisma.pmb_prodis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pmb_prodisFindUniqueOrThrowArgs>(args: SelectSubset<T, pmb_prodisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pmb_prodisClient<$Result.GetResult<Prisma.$pmb_prodisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pmb_prodis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pmb_prodisFindFirstArgs} args - Arguments to find a Pmb_prodis
     * @example
     * // Get one Pmb_prodis
     * const pmb_prodis = await prisma.pmb_prodis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pmb_prodisFindFirstArgs>(args?: SelectSubset<T, pmb_prodisFindFirstArgs<ExtArgs>>): Prisma__pmb_prodisClient<$Result.GetResult<Prisma.$pmb_prodisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pmb_prodis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pmb_prodisFindFirstOrThrowArgs} args - Arguments to find a Pmb_prodis
     * @example
     * // Get one Pmb_prodis
     * const pmb_prodis = await prisma.pmb_prodis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pmb_prodisFindFirstOrThrowArgs>(args?: SelectSubset<T, pmb_prodisFindFirstOrThrowArgs<ExtArgs>>): Prisma__pmb_prodisClient<$Result.GetResult<Prisma.$pmb_prodisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pmb_prodis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pmb_prodisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pmb_prodis
     * const pmb_prodis = await prisma.pmb_prodis.findMany()
     * 
     * // Get first 10 Pmb_prodis
     * const pmb_prodis = await prisma.pmb_prodis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pmb_prodisWithIdOnly = await prisma.pmb_prodis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pmb_prodisFindManyArgs>(args?: SelectSubset<T, pmb_prodisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pmb_prodisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pmb_prodis.
     * @param {pmb_prodisCreateArgs} args - Arguments to create a Pmb_prodis.
     * @example
     * // Create one Pmb_prodis
     * const Pmb_prodis = await prisma.pmb_prodis.create({
     *   data: {
     *     // ... data to create a Pmb_prodis
     *   }
     * })
     * 
     */
    create<T extends pmb_prodisCreateArgs>(args: SelectSubset<T, pmb_prodisCreateArgs<ExtArgs>>): Prisma__pmb_prodisClient<$Result.GetResult<Prisma.$pmb_prodisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pmb_prodis.
     * @param {pmb_prodisCreateManyArgs} args - Arguments to create many Pmb_prodis.
     * @example
     * // Create many Pmb_prodis
     * const pmb_prodis = await prisma.pmb_prodis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pmb_prodisCreateManyArgs>(args?: SelectSubset<T, pmb_prodisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pmb_prodis and returns the data saved in the database.
     * @param {pmb_prodisCreateManyAndReturnArgs} args - Arguments to create many Pmb_prodis.
     * @example
     * // Create many Pmb_prodis
     * const pmb_prodis = await prisma.pmb_prodis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pmb_prodis and only return the `id`
     * const pmb_prodisWithIdOnly = await prisma.pmb_prodis.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pmb_prodisCreateManyAndReturnArgs>(args?: SelectSubset<T, pmb_prodisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pmb_prodisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pmb_prodis.
     * @param {pmb_prodisDeleteArgs} args - Arguments to delete one Pmb_prodis.
     * @example
     * // Delete one Pmb_prodis
     * const Pmb_prodis = await prisma.pmb_prodis.delete({
     *   where: {
     *     // ... filter to delete one Pmb_prodis
     *   }
     * })
     * 
     */
    delete<T extends pmb_prodisDeleteArgs>(args: SelectSubset<T, pmb_prodisDeleteArgs<ExtArgs>>): Prisma__pmb_prodisClient<$Result.GetResult<Prisma.$pmb_prodisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pmb_prodis.
     * @param {pmb_prodisUpdateArgs} args - Arguments to update one Pmb_prodis.
     * @example
     * // Update one Pmb_prodis
     * const pmb_prodis = await prisma.pmb_prodis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pmb_prodisUpdateArgs>(args: SelectSubset<T, pmb_prodisUpdateArgs<ExtArgs>>): Prisma__pmb_prodisClient<$Result.GetResult<Prisma.$pmb_prodisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pmb_prodis.
     * @param {pmb_prodisDeleteManyArgs} args - Arguments to filter Pmb_prodis to delete.
     * @example
     * // Delete a few Pmb_prodis
     * const { count } = await prisma.pmb_prodis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pmb_prodisDeleteManyArgs>(args?: SelectSubset<T, pmb_prodisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pmb_prodis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pmb_prodisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pmb_prodis
     * const pmb_prodis = await prisma.pmb_prodis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pmb_prodisUpdateManyArgs>(args: SelectSubset<T, pmb_prodisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pmb_prodis and returns the data updated in the database.
     * @param {pmb_prodisUpdateManyAndReturnArgs} args - Arguments to update many Pmb_prodis.
     * @example
     * // Update many Pmb_prodis
     * const pmb_prodis = await prisma.pmb_prodis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pmb_prodis and only return the `id`
     * const pmb_prodisWithIdOnly = await prisma.pmb_prodis.updateManyAndReturn({
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
    updateManyAndReturn<T extends pmb_prodisUpdateManyAndReturnArgs>(args: SelectSubset<T, pmb_prodisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pmb_prodisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pmb_prodis.
     * @param {pmb_prodisUpsertArgs} args - Arguments to update or create a Pmb_prodis.
     * @example
     * // Update or create a Pmb_prodis
     * const pmb_prodis = await prisma.pmb_prodis.upsert({
     *   create: {
     *     // ... data to create a Pmb_prodis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pmb_prodis we want to update
     *   }
     * })
     */
    upsert<T extends pmb_prodisUpsertArgs>(args: SelectSubset<T, pmb_prodisUpsertArgs<ExtArgs>>): Prisma__pmb_prodisClient<$Result.GetResult<Prisma.$pmb_prodisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pmb_prodis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pmb_prodisCountArgs} args - Arguments to filter Pmb_prodis to count.
     * @example
     * // Count the number of Pmb_prodis
     * const count = await prisma.pmb_prodis.count({
     *   where: {
     *     // ... the filter for the Pmb_prodis we want to count
     *   }
     * })
    **/
    count<T extends pmb_prodisCountArgs>(
      args?: Subset<T, pmb_prodisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Pmb_prodisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pmb_prodis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pmb_prodisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Pmb_prodisAggregateArgs>(args: Subset<T, Pmb_prodisAggregateArgs>): Prisma.PrismaPromise<GetPmb_prodisAggregateType<T>>

    /**
     * Group by Pmb_prodis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pmb_prodisGroupByArgs} args - Group by arguments.
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
      T extends pmb_prodisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pmb_prodisGroupByArgs['orderBy'] }
        : { orderBy?: pmb_prodisGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pmb_prodisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPmb_prodisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pmb_prodis model
   */
  readonly fields: pmb_prodisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pmb_prodis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pmb_prodisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the pmb_prodis model
   */
  interface pmb_prodisFieldRefs {
    readonly id: FieldRef<"pmb_prodis", 'String'>
    readonly tenant_id: FieldRef<"pmb_prodis", 'String'>
    readonly name: FieldRef<"pmb_prodis", 'String'>
    readonly faculty: FieldRef<"pmb_prodis", 'String'>
    readonly is_active: FieldRef<"pmb_prodis", 'Boolean'>
    readonly created_at: FieldRef<"pmb_prodis", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * pmb_prodis findUnique
   */
  export type pmb_prodisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_prodis
     */
    select?: pmb_prodisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_prodis
     */
    omit?: pmb_prodisOmit<ExtArgs> | null
    /**
     * Filter, which pmb_prodis to fetch.
     */
    where: pmb_prodisWhereUniqueInput
  }

  /**
   * pmb_prodis findUniqueOrThrow
   */
  export type pmb_prodisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_prodis
     */
    select?: pmb_prodisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_prodis
     */
    omit?: pmb_prodisOmit<ExtArgs> | null
    /**
     * Filter, which pmb_prodis to fetch.
     */
    where: pmb_prodisWhereUniqueInput
  }

  /**
   * pmb_prodis findFirst
   */
  export type pmb_prodisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_prodis
     */
    select?: pmb_prodisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_prodis
     */
    omit?: pmb_prodisOmit<ExtArgs> | null
    /**
     * Filter, which pmb_prodis to fetch.
     */
    where?: pmb_prodisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pmb_prodis to fetch.
     */
    orderBy?: pmb_prodisOrderByWithRelationInput | pmb_prodisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pmb_prodis.
     */
    cursor?: pmb_prodisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pmb_prodis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pmb_prodis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pmb_prodis.
     */
    distinct?: Pmb_prodisScalarFieldEnum | Pmb_prodisScalarFieldEnum[]
  }

  /**
   * pmb_prodis findFirstOrThrow
   */
  export type pmb_prodisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_prodis
     */
    select?: pmb_prodisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_prodis
     */
    omit?: pmb_prodisOmit<ExtArgs> | null
    /**
     * Filter, which pmb_prodis to fetch.
     */
    where?: pmb_prodisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pmb_prodis to fetch.
     */
    orderBy?: pmb_prodisOrderByWithRelationInput | pmb_prodisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pmb_prodis.
     */
    cursor?: pmb_prodisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pmb_prodis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pmb_prodis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pmb_prodis.
     */
    distinct?: Pmb_prodisScalarFieldEnum | Pmb_prodisScalarFieldEnum[]
  }

  /**
   * pmb_prodis findMany
   */
  export type pmb_prodisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_prodis
     */
    select?: pmb_prodisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_prodis
     */
    omit?: pmb_prodisOmit<ExtArgs> | null
    /**
     * Filter, which pmb_prodis to fetch.
     */
    where?: pmb_prodisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pmb_prodis to fetch.
     */
    orderBy?: pmb_prodisOrderByWithRelationInput | pmb_prodisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pmb_prodis.
     */
    cursor?: pmb_prodisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pmb_prodis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pmb_prodis.
     */
    skip?: number
    distinct?: Pmb_prodisScalarFieldEnum | Pmb_prodisScalarFieldEnum[]
  }

  /**
   * pmb_prodis create
   */
  export type pmb_prodisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_prodis
     */
    select?: pmb_prodisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_prodis
     */
    omit?: pmb_prodisOmit<ExtArgs> | null
    /**
     * The data needed to create a pmb_prodis.
     */
    data: XOR<pmb_prodisCreateInput, pmb_prodisUncheckedCreateInput>
  }

  /**
   * pmb_prodis createMany
   */
  export type pmb_prodisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pmb_prodis.
     */
    data: pmb_prodisCreateManyInput | pmb_prodisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pmb_prodis createManyAndReturn
   */
  export type pmb_prodisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_prodis
     */
    select?: pmb_prodisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_prodis
     */
    omit?: pmb_prodisOmit<ExtArgs> | null
    /**
     * The data used to create many pmb_prodis.
     */
    data: pmb_prodisCreateManyInput | pmb_prodisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pmb_prodis update
   */
  export type pmb_prodisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_prodis
     */
    select?: pmb_prodisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_prodis
     */
    omit?: pmb_prodisOmit<ExtArgs> | null
    /**
     * The data needed to update a pmb_prodis.
     */
    data: XOR<pmb_prodisUpdateInput, pmb_prodisUncheckedUpdateInput>
    /**
     * Choose, which pmb_prodis to update.
     */
    where: pmb_prodisWhereUniqueInput
  }

  /**
   * pmb_prodis updateMany
   */
  export type pmb_prodisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pmb_prodis.
     */
    data: XOR<pmb_prodisUpdateManyMutationInput, pmb_prodisUncheckedUpdateManyInput>
    /**
     * Filter which pmb_prodis to update
     */
    where?: pmb_prodisWhereInput
    /**
     * Limit how many pmb_prodis to update.
     */
    limit?: number
  }

  /**
   * pmb_prodis updateManyAndReturn
   */
  export type pmb_prodisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_prodis
     */
    select?: pmb_prodisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_prodis
     */
    omit?: pmb_prodisOmit<ExtArgs> | null
    /**
     * The data used to update pmb_prodis.
     */
    data: XOR<pmb_prodisUpdateManyMutationInput, pmb_prodisUncheckedUpdateManyInput>
    /**
     * Filter which pmb_prodis to update
     */
    where?: pmb_prodisWhereInput
    /**
     * Limit how many pmb_prodis to update.
     */
    limit?: number
  }

  /**
   * pmb_prodis upsert
   */
  export type pmb_prodisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_prodis
     */
    select?: pmb_prodisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_prodis
     */
    omit?: pmb_prodisOmit<ExtArgs> | null
    /**
     * The filter to search for the pmb_prodis to update in case it exists.
     */
    where: pmb_prodisWhereUniqueInput
    /**
     * In case the pmb_prodis found by the `where` argument doesn't exist, create a new pmb_prodis with this data.
     */
    create: XOR<pmb_prodisCreateInput, pmb_prodisUncheckedCreateInput>
    /**
     * In case the pmb_prodis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pmb_prodisUpdateInput, pmb_prodisUncheckedUpdateInput>
  }

  /**
   * pmb_prodis delete
   */
  export type pmb_prodisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_prodis
     */
    select?: pmb_prodisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_prodis
     */
    omit?: pmb_prodisOmit<ExtArgs> | null
    /**
     * Filter which pmb_prodis to delete.
     */
    where: pmb_prodisWhereUniqueInput
  }

  /**
   * pmb_prodis deleteMany
   */
  export type pmb_prodisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pmb_prodis to delete
     */
    where?: pmb_prodisWhereInput
    /**
     * Limit how many pmb_prodis to delete.
     */
    limit?: number
  }

  /**
   * pmb_prodis without action
   */
  export type pmb_prodisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pmb_prodis
     */
    select?: pmb_prodisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pmb_prodis
     */
    omit?: pmb_prodisOmit<ExtArgs> | null
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


  export const Pmb_applicantsScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    period_id: 'period_id',
    registration_number: 'registration_number',
    full_name: 'full_name',
    email: 'email',
    phone_number: 'phone_number',
    identity_number: 'identity_number',
    address: 'address',
    birth_place: 'birth_place',
    birth_date: 'birth_date',
    gender: 'gender',
    religion: 'religion',
    previous_school: 'previous_school',
    first_choice_prodi_id: 'first_choice_prodi_id',
    second_choice_prodi_id: 'second_choice_prodi_id',
    status: 'status',
    selection_score: 'selection_score',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Pmb_applicantsScalarFieldEnum = (typeof Pmb_applicantsScalarFieldEnum)[keyof typeof Pmb_applicantsScalarFieldEnum]


  export const Pmb_documentsScalarFieldEnum: {
    id: 'id',
    applicant_id: 'applicant_id',
    document_type: 'document_type',
    file_url: 'file_url',
    status: 'status',
    notes: 'notes',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Pmb_documentsScalarFieldEnum = (typeof Pmb_documentsScalarFieldEnum)[keyof typeof Pmb_documentsScalarFieldEnum]


  export const Pmb_periodsScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    name: 'name',
    start_date: 'start_date',
    end_date: 'end_date',
    is_active: 'is_active',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Pmb_periodsScalarFieldEnum = (typeof Pmb_periodsScalarFieldEnum)[keyof typeof Pmb_periodsScalarFieldEnum]


  export const Pmb_prodisScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    name: 'name',
    faculty: 'faculty',
    is_active: 'is_active',
    created_at: 'created_at'
  };

  export type Pmb_prodisScalarFieldEnum = (typeof Pmb_prodisScalarFieldEnum)[keyof typeof Pmb_prodisScalarFieldEnum]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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
   * Deep Input Types
   */


  export type pmb_applicantsWhereInput = {
    AND?: pmb_applicantsWhereInput | pmb_applicantsWhereInput[]
    OR?: pmb_applicantsWhereInput[]
    NOT?: pmb_applicantsWhereInput | pmb_applicantsWhereInput[]
    id?: UuidFilter<"pmb_applicants"> | string
    tenant_id?: UuidFilter<"pmb_applicants"> | string
    period_id?: UuidNullableFilter<"pmb_applicants"> | string | null
    registration_number?: StringFilter<"pmb_applicants"> | string
    full_name?: StringFilter<"pmb_applicants"> | string
    email?: StringFilter<"pmb_applicants"> | string
    phone_number?: StringNullableFilter<"pmb_applicants"> | string | null
    identity_number?: StringNullableFilter<"pmb_applicants"> | string | null
    address?: StringNullableFilter<"pmb_applicants"> | string | null
    birth_place?: StringNullableFilter<"pmb_applicants"> | string | null
    birth_date?: DateTimeNullableFilter<"pmb_applicants"> | Date | string | null
    gender?: StringNullableFilter<"pmb_applicants"> | string | null
    religion?: StringNullableFilter<"pmb_applicants"> | string | null
    previous_school?: StringNullableFilter<"pmb_applicants"> | string | null
    first_choice_prodi_id?: UuidNullableFilter<"pmb_applicants"> | string | null
    second_choice_prodi_id?: UuidNullableFilter<"pmb_applicants"> | string | null
    status?: StringNullableFilter<"pmb_applicants"> | string | null
    selection_score?: DecimalNullableFilter<"pmb_applicants"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableFilter<"pmb_applicants"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"pmb_applicants"> | Date | string | null
    pmb_periods?: XOR<Pmb_periodsNullableScalarRelationFilter, pmb_periodsWhereInput> | null
    pmb_documents?: Pmb_documentsListRelationFilter
  }

  export type pmb_applicantsOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    period_id?: SortOrderInput | SortOrder
    registration_number?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    identity_number?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    birth_place?: SortOrderInput | SortOrder
    birth_date?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    religion?: SortOrderInput | SortOrder
    previous_school?: SortOrderInput | SortOrder
    first_choice_prodi_id?: SortOrderInput | SortOrder
    second_choice_prodi_id?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    selection_score?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    pmb_periods?: pmb_periodsOrderByWithRelationInput
    pmb_documents?: pmb_documentsOrderByRelationAggregateInput
  }

  export type pmb_applicantsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    registration_number?: string
    AND?: pmb_applicantsWhereInput | pmb_applicantsWhereInput[]
    OR?: pmb_applicantsWhereInput[]
    NOT?: pmb_applicantsWhereInput | pmb_applicantsWhereInput[]
    tenant_id?: UuidFilter<"pmb_applicants"> | string
    period_id?: UuidNullableFilter<"pmb_applicants"> | string | null
    full_name?: StringFilter<"pmb_applicants"> | string
    email?: StringFilter<"pmb_applicants"> | string
    phone_number?: StringNullableFilter<"pmb_applicants"> | string | null
    identity_number?: StringNullableFilter<"pmb_applicants"> | string | null
    address?: StringNullableFilter<"pmb_applicants"> | string | null
    birth_place?: StringNullableFilter<"pmb_applicants"> | string | null
    birth_date?: DateTimeNullableFilter<"pmb_applicants"> | Date | string | null
    gender?: StringNullableFilter<"pmb_applicants"> | string | null
    religion?: StringNullableFilter<"pmb_applicants"> | string | null
    previous_school?: StringNullableFilter<"pmb_applicants"> | string | null
    first_choice_prodi_id?: UuidNullableFilter<"pmb_applicants"> | string | null
    second_choice_prodi_id?: UuidNullableFilter<"pmb_applicants"> | string | null
    status?: StringNullableFilter<"pmb_applicants"> | string | null
    selection_score?: DecimalNullableFilter<"pmb_applicants"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableFilter<"pmb_applicants"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"pmb_applicants"> | Date | string | null
    pmb_periods?: XOR<Pmb_periodsNullableScalarRelationFilter, pmb_periodsWhereInput> | null
    pmb_documents?: Pmb_documentsListRelationFilter
  }, "id" | "registration_number">

  export type pmb_applicantsOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    period_id?: SortOrderInput | SortOrder
    registration_number?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    identity_number?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    birth_place?: SortOrderInput | SortOrder
    birth_date?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    religion?: SortOrderInput | SortOrder
    previous_school?: SortOrderInput | SortOrder
    first_choice_prodi_id?: SortOrderInput | SortOrder
    second_choice_prodi_id?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    selection_score?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: pmb_applicantsCountOrderByAggregateInput
    _avg?: pmb_applicantsAvgOrderByAggregateInput
    _max?: pmb_applicantsMaxOrderByAggregateInput
    _min?: pmb_applicantsMinOrderByAggregateInput
    _sum?: pmb_applicantsSumOrderByAggregateInput
  }

  export type pmb_applicantsScalarWhereWithAggregatesInput = {
    AND?: pmb_applicantsScalarWhereWithAggregatesInput | pmb_applicantsScalarWhereWithAggregatesInput[]
    OR?: pmb_applicantsScalarWhereWithAggregatesInput[]
    NOT?: pmb_applicantsScalarWhereWithAggregatesInput | pmb_applicantsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"pmb_applicants"> | string
    tenant_id?: UuidWithAggregatesFilter<"pmb_applicants"> | string
    period_id?: UuidNullableWithAggregatesFilter<"pmb_applicants"> | string | null
    registration_number?: StringWithAggregatesFilter<"pmb_applicants"> | string
    full_name?: StringWithAggregatesFilter<"pmb_applicants"> | string
    email?: StringWithAggregatesFilter<"pmb_applicants"> | string
    phone_number?: StringNullableWithAggregatesFilter<"pmb_applicants"> | string | null
    identity_number?: StringNullableWithAggregatesFilter<"pmb_applicants"> | string | null
    address?: StringNullableWithAggregatesFilter<"pmb_applicants"> | string | null
    birth_place?: StringNullableWithAggregatesFilter<"pmb_applicants"> | string | null
    birth_date?: DateTimeNullableWithAggregatesFilter<"pmb_applicants"> | Date | string | null
    gender?: StringNullableWithAggregatesFilter<"pmb_applicants"> | string | null
    religion?: StringNullableWithAggregatesFilter<"pmb_applicants"> | string | null
    previous_school?: StringNullableWithAggregatesFilter<"pmb_applicants"> | string | null
    first_choice_prodi_id?: UuidNullableWithAggregatesFilter<"pmb_applicants"> | string | null
    second_choice_prodi_id?: UuidNullableWithAggregatesFilter<"pmb_applicants"> | string | null
    status?: StringNullableWithAggregatesFilter<"pmb_applicants"> | string | null
    selection_score?: DecimalNullableWithAggregatesFilter<"pmb_applicants"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"pmb_applicants"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"pmb_applicants"> | Date | string | null
  }

  export type pmb_documentsWhereInput = {
    AND?: pmb_documentsWhereInput | pmb_documentsWhereInput[]
    OR?: pmb_documentsWhereInput[]
    NOT?: pmb_documentsWhereInput | pmb_documentsWhereInput[]
    id?: UuidFilter<"pmb_documents"> | string
    applicant_id?: UuidNullableFilter<"pmb_documents"> | string | null
    document_type?: StringFilter<"pmb_documents"> | string
    file_url?: StringFilter<"pmb_documents"> | string
    status?: StringNullableFilter<"pmb_documents"> | string | null
    notes?: StringNullableFilter<"pmb_documents"> | string | null
    created_at?: DateTimeNullableFilter<"pmb_documents"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"pmb_documents"> | Date | string | null
    pmb_applicants?: XOR<Pmb_applicantsNullableScalarRelationFilter, pmb_applicantsWhereInput> | null
  }

  export type pmb_documentsOrderByWithRelationInput = {
    id?: SortOrder
    applicant_id?: SortOrderInput | SortOrder
    document_type?: SortOrder
    file_url?: SortOrder
    status?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    pmb_applicants?: pmb_applicantsOrderByWithRelationInput
  }

  export type pmb_documentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: pmb_documentsWhereInput | pmb_documentsWhereInput[]
    OR?: pmb_documentsWhereInput[]
    NOT?: pmb_documentsWhereInput | pmb_documentsWhereInput[]
    applicant_id?: UuidNullableFilter<"pmb_documents"> | string | null
    document_type?: StringFilter<"pmb_documents"> | string
    file_url?: StringFilter<"pmb_documents"> | string
    status?: StringNullableFilter<"pmb_documents"> | string | null
    notes?: StringNullableFilter<"pmb_documents"> | string | null
    created_at?: DateTimeNullableFilter<"pmb_documents"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"pmb_documents"> | Date | string | null
    pmb_applicants?: XOR<Pmb_applicantsNullableScalarRelationFilter, pmb_applicantsWhereInput> | null
  }, "id">

  export type pmb_documentsOrderByWithAggregationInput = {
    id?: SortOrder
    applicant_id?: SortOrderInput | SortOrder
    document_type?: SortOrder
    file_url?: SortOrder
    status?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: pmb_documentsCountOrderByAggregateInput
    _max?: pmb_documentsMaxOrderByAggregateInput
    _min?: pmb_documentsMinOrderByAggregateInput
  }

  export type pmb_documentsScalarWhereWithAggregatesInput = {
    AND?: pmb_documentsScalarWhereWithAggregatesInput | pmb_documentsScalarWhereWithAggregatesInput[]
    OR?: pmb_documentsScalarWhereWithAggregatesInput[]
    NOT?: pmb_documentsScalarWhereWithAggregatesInput | pmb_documentsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"pmb_documents"> | string
    applicant_id?: UuidNullableWithAggregatesFilter<"pmb_documents"> | string | null
    document_type?: StringWithAggregatesFilter<"pmb_documents"> | string
    file_url?: StringWithAggregatesFilter<"pmb_documents"> | string
    status?: StringNullableWithAggregatesFilter<"pmb_documents"> | string | null
    notes?: StringNullableWithAggregatesFilter<"pmb_documents"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"pmb_documents"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"pmb_documents"> | Date | string | null
  }

  export type pmb_periodsWhereInput = {
    AND?: pmb_periodsWhereInput | pmb_periodsWhereInput[]
    OR?: pmb_periodsWhereInput[]
    NOT?: pmb_periodsWhereInput | pmb_periodsWhereInput[]
    id?: UuidFilter<"pmb_periods"> | string
    tenant_id?: UuidFilter<"pmb_periods"> | string
    name?: StringFilter<"pmb_periods"> | string
    start_date?: DateTimeFilter<"pmb_periods"> | Date | string
    end_date?: DateTimeFilter<"pmb_periods"> | Date | string
    is_active?: BoolNullableFilter<"pmb_periods"> | boolean | null
    description?: StringNullableFilter<"pmb_periods"> | string | null
    created_at?: DateTimeNullableFilter<"pmb_periods"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"pmb_periods"> | Date | string | null
    pmb_applicants?: Pmb_applicantsListRelationFilter
  }

  export type pmb_periodsOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    is_active?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    pmb_applicants?: pmb_applicantsOrderByRelationAggregateInput
  }

  export type pmb_periodsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: pmb_periodsWhereInput | pmb_periodsWhereInput[]
    OR?: pmb_periodsWhereInput[]
    NOT?: pmb_periodsWhereInput | pmb_periodsWhereInput[]
    tenant_id?: UuidFilter<"pmb_periods"> | string
    name?: StringFilter<"pmb_periods"> | string
    start_date?: DateTimeFilter<"pmb_periods"> | Date | string
    end_date?: DateTimeFilter<"pmb_periods"> | Date | string
    is_active?: BoolNullableFilter<"pmb_periods"> | boolean | null
    description?: StringNullableFilter<"pmb_periods"> | string | null
    created_at?: DateTimeNullableFilter<"pmb_periods"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"pmb_periods"> | Date | string | null
    pmb_applicants?: Pmb_applicantsListRelationFilter
  }, "id">

  export type pmb_periodsOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    is_active?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: pmb_periodsCountOrderByAggregateInput
    _max?: pmb_periodsMaxOrderByAggregateInput
    _min?: pmb_periodsMinOrderByAggregateInput
  }

  export type pmb_periodsScalarWhereWithAggregatesInput = {
    AND?: pmb_periodsScalarWhereWithAggregatesInput | pmb_periodsScalarWhereWithAggregatesInput[]
    OR?: pmb_periodsScalarWhereWithAggregatesInput[]
    NOT?: pmb_periodsScalarWhereWithAggregatesInput | pmb_periodsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"pmb_periods"> | string
    tenant_id?: UuidWithAggregatesFilter<"pmb_periods"> | string
    name?: StringWithAggregatesFilter<"pmb_periods"> | string
    start_date?: DateTimeWithAggregatesFilter<"pmb_periods"> | Date | string
    end_date?: DateTimeWithAggregatesFilter<"pmb_periods"> | Date | string
    is_active?: BoolNullableWithAggregatesFilter<"pmb_periods"> | boolean | null
    description?: StringNullableWithAggregatesFilter<"pmb_periods"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"pmb_periods"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"pmb_periods"> | Date | string | null
  }

  export type pmb_prodisWhereInput = {
    AND?: pmb_prodisWhereInput | pmb_prodisWhereInput[]
    OR?: pmb_prodisWhereInput[]
    NOT?: pmb_prodisWhereInput | pmb_prodisWhereInput[]
    id?: UuidFilter<"pmb_prodis"> | string
    tenant_id?: UuidFilter<"pmb_prodis"> | string
    name?: StringFilter<"pmb_prodis"> | string
    faculty?: StringNullableFilter<"pmb_prodis"> | string | null
    is_active?: BoolNullableFilter<"pmb_prodis"> | boolean | null
    created_at?: DateTimeNullableFilter<"pmb_prodis"> | Date | string | null
  }

  export type pmb_prodisOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    faculty?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
  }

  export type pmb_prodisWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: pmb_prodisWhereInput | pmb_prodisWhereInput[]
    OR?: pmb_prodisWhereInput[]
    NOT?: pmb_prodisWhereInput | pmb_prodisWhereInput[]
    tenant_id?: UuidFilter<"pmb_prodis"> | string
    name?: StringFilter<"pmb_prodis"> | string
    faculty?: StringNullableFilter<"pmb_prodis"> | string | null
    is_active?: BoolNullableFilter<"pmb_prodis"> | boolean | null
    created_at?: DateTimeNullableFilter<"pmb_prodis"> | Date | string | null
  }, "id">

  export type pmb_prodisOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    faculty?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: pmb_prodisCountOrderByAggregateInput
    _max?: pmb_prodisMaxOrderByAggregateInput
    _min?: pmb_prodisMinOrderByAggregateInput
  }

  export type pmb_prodisScalarWhereWithAggregatesInput = {
    AND?: pmb_prodisScalarWhereWithAggregatesInput | pmb_prodisScalarWhereWithAggregatesInput[]
    OR?: pmb_prodisScalarWhereWithAggregatesInput[]
    NOT?: pmb_prodisScalarWhereWithAggregatesInput | pmb_prodisScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"pmb_prodis"> | string
    tenant_id?: UuidWithAggregatesFilter<"pmb_prodis"> | string
    name?: StringWithAggregatesFilter<"pmb_prodis"> | string
    faculty?: StringNullableWithAggregatesFilter<"pmb_prodis"> | string | null
    is_active?: BoolNullableWithAggregatesFilter<"pmb_prodis"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"pmb_prodis"> | Date | string | null
  }

  export type pmb_applicantsCreateInput = {
    id?: string
    tenant_id: string
    registration_number: string
    full_name: string
    email: string
    phone_number?: string | null
    identity_number?: string | null
    address?: string | null
    birth_place?: string | null
    birth_date?: Date | string | null
    gender?: string | null
    religion?: string | null
    previous_school?: string | null
    first_choice_prodi_id?: string | null
    second_choice_prodi_id?: string | null
    status?: string | null
    selection_score?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    pmb_periods?: pmb_periodsCreateNestedOneWithoutPmb_applicantsInput
    pmb_documents?: pmb_documentsCreateNestedManyWithoutPmb_applicantsInput
  }

  export type pmb_applicantsUncheckedCreateInput = {
    id?: string
    tenant_id: string
    period_id?: string | null
    registration_number: string
    full_name: string
    email: string
    phone_number?: string | null
    identity_number?: string | null
    address?: string | null
    birth_place?: string | null
    birth_date?: Date | string | null
    gender?: string | null
    religion?: string | null
    previous_school?: string | null
    first_choice_prodi_id?: string | null
    second_choice_prodi_id?: string | null
    status?: string | null
    selection_score?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    pmb_documents?: pmb_documentsUncheckedCreateNestedManyWithoutPmb_applicantsInput
  }

  export type pmb_applicantsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    registration_number?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    identity_number?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth_place?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    previous_school?: NullableStringFieldUpdateOperationsInput | string | null
    first_choice_prodi_id?: NullableStringFieldUpdateOperationsInput | string | null
    second_choice_prodi_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    selection_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pmb_periods?: pmb_periodsUpdateOneWithoutPmb_applicantsNestedInput
    pmb_documents?: pmb_documentsUpdateManyWithoutPmb_applicantsNestedInput
  }

  export type pmb_applicantsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    period_id?: NullableStringFieldUpdateOperationsInput | string | null
    registration_number?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    identity_number?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth_place?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    previous_school?: NullableStringFieldUpdateOperationsInput | string | null
    first_choice_prodi_id?: NullableStringFieldUpdateOperationsInput | string | null
    second_choice_prodi_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    selection_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pmb_documents?: pmb_documentsUncheckedUpdateManyWithoutPmb_applicantsNestedInput
  }

  export type pmb_applicantsCreateManyInput = {
    id?: string
    tenant_id: string
    period_id?: string | null
    registration_number: string
    full_name: string
    email: string
    phone_number?: string | null
    identity_number?: string | null
    address?: string | null
    birth_place?: string | null
    birth_date?: Date | string | null
    gender?: string | null
    religion?: string | null
    previous_school?: string | null
    first_choice_prodi_id?: string | null
    second_choice_prodi_id?: string | null
    status?: string | null
    selection_score?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type pmb_applicantsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    registration_number?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    identity_number?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth_place?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    previous_school?: NullableStringFieldUpdateOperationsInput | string | null
    first_choice_prodi_id?: NullableStringFieldUpdateOperationsInput | string | null
    second_choice_prodi_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    selection_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pmb_applicantsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    period_id?: NullableStringFieldUpdateOperationsInput | string | null
    registration_number?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    identity_number?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth_place?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    previous_school?: NullableStringFieldUpdateOperationsInput | string | null
    first_choice_prodi_id?: NullableStringFieldUpdateOperationsInput | string | null
    second_choice_prodi_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    selection_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pmb_documentsCreateInput = {
    id?: string
    document_type: string
    file_url: string
    status?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    pmb_applicants?: pmb_applicantsCreateNestedOneWithoutPmb_documentsInput
  }

  export type pmb_documentsUncheckedCreateInput = {
    id?: string
    applicant_id?: string | null
    document_type: string
    file_url: string
    status?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type pmb_documentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_type?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pmb_applicants?: pmb_applicantsUpdateOneWithoutPmb_documentsNestedInput
  }

  export type pmb_documentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicant_id?: NullableStringFieldUpdateOperationsInput | string | null
    document_type?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pmb_documentsCreateManyInput = {
    id?: string
    applicant_id?: string | null
    document_type: string
    file_url: string
    status?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type pmb_documentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_type?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pmb_documentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicant_id?: NullableStringFieldUpdateOperationsInput | string | null
    document_type?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pmb_periodsCreateInput = {
    id?: string
    tenant_id: string
    name: string
    start_date: Date | string
    end_date: Date | string
    is_active?: boolean | null
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    pmb_applicants?: pmb_applicantsCreateNestedManyWithoutPmb_periodsInput
  }

  export type pmb_periodsUncheckedCreateInput = {
    id?: string
    tenant_id: string
    name: string
    start_date: Date | string
    end_date: Date | string
    is_active?: boolean | null
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    pmb_applicants?: pmb_applicantsUncheckedCreateNestedManyWithoutPmb_periodsInput
  }

  export type pmb_periodsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pmb_applicants?: pmb_applicantsUpdateManyWithoutPmb_periodsNestedInput
  }

  export type pmb_periodsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pmb_applicants?: pmb_applicantsUncheckedUpdateManyWithoutPmb_periodsNestedInput
  }

  export type pmb_periodsCreateManyInput = {
    id?: string
    tenant_id: string
    name: string
    start_date: Date | string
    end_date: Date | string
    is_active?: boolean | null
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type pmb_periodsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pmb_periodsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pmb_prodisCreateInput = {
    id?: string
    tenant_id: string
    name: string
    faculty?: string | null
    is_active?: boolean | null
    created_at?: Date | string | null
  }

  export type pmb_prodisUncheckedCreateInput = {
    id?: string
    tenant_id: string
    name: string
    faculty?: string | null
    is_active?: boolean | null
    created_at?: Date | string | null
  }

  export type pmb_prodisUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    faculty?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pmb_prodisUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    faculty?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pmb_prodisCreateManyInput = {
    id?: string
    tenant_id: string
    name: string
    faculty?: string | null
    is_active?: boolean | null
    created_at?: Date | string | null
  }

  export type pmb_prodisUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    faculty?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pmb_prodisUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    faculty?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
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

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type Pmb_periodsNullableScalarRelationFilter = {
    is?: pmb_periodsWhereInput | null
    isNot?: pmb_periodsWhereInput | null
  }

  export type Pmb_documentsListRelationFilter = {
    every?: pmb_documentsWhereInput
    some?: pmb_documentsWhereInput
    none?: pmb_documentsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type pmb_documentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pmb_applicantsCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    period_id?: SortOrder
    registration_number?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    identity_number?: SortOrder
    address?: SortOrder
    birth_place?: SortOrder
    birth_date?: SortOrder
    gender?: SortOrder
    religion?: SortOrder
    previous_school?: SortOrder
    first_choice_prodi_id?: SortOrder
    second_choice_prodi_id?: SortOrder
    status?: SortOrder
    selection_score?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type pmb_applicantsAvgOrderByAggregateInput = {
    selection_score?: SortOrder
  }

  export type pmb_applicantsMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    period_id?: SortOrder
    registration_number?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    identity_number?: SortOrder
    address?: SortOrder
    birth_place?: SortOrder
    birth_date?: SortOrder
    gender?: SortOrder
    religion?: SortOrder
    previous_school?: SortOrder
    first_choice_prodi_id?: SortOrder
    second_choice_prodi_id?: SortOrder
    status?: SortOrder
    selection_score?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type pmb_applicantsMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    period_id?: SortOrder
    registration_number?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    identity_number?: SortOrder
    address?: SortOrder
    birth_place?: SortOrder
    birth_date?: SortOrder
    gender?: SortOrder
    religion?: SortOrder
    previous_school?: SortOrder
    first_choice_prodi_id?: SortOrder
    second_choice_prodi_id?: SortOrder
    status?: SortOrder
    selection_score?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type pmb_applicantsSumOrderByAggregateInput = {
    selection_score?: SortOrder
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

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type Pmb_applicantsNullableScalarRelationFilter = {
    is?: pmb_applicantsWhereInput | null
    isNot?: pmb_applicantsWhereInput | null
  }

  export type pmb_documentsCountOrderByAggregateInput = {
    id?: SortOrder
    applicant_id?: SortOrder
    document_type?: SortOrder
    file_url?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type pmb_documentsMaxOrderByAggregateInput = {
    id?: SortOrder
    applicant_id?: SortOrder
    document_type?: SortOrder
    file_url?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type pmb_documentsMinOrderByAggregateInput = {
    id?: SortOrder
    applicant_id?: SortOrder
    document_type?: SortOrder
    file_url?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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

  export type Pmb_applicantsListRelationFilter = {
    every?: pmb_applicantsWhereInput
    some?: pmb_applicantsWhereInput
    none?: pmb_applicantsWhereInput
  }

  export type pmb_applicantsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pmb_periodsCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    is_active?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type pmb_periodsMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    is_active?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type pmb_periodsMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    is_active?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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

  export type pmb_prodisCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    faculty?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type pmb_prodisMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    faculty?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type pmb_prodisMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    faculty?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type pmb_periodsCreateNestedOneWithoutPmb_applicantsInput = {
    create?: XOR<pmb_periodsCreateWithoutPmb_applicantsInput, pmb_periodsUncheckedCreateWithoutPmb_applicantsInput>
    connectOrCreate?: pmb_periodsCreateOrConnectWithoutPmb_applicantsInput
    connect?: pmb_periodsWhereUniqueInput
  }

  export type pmb_documentsCreateNestedManyWithoutPmb_applicantsInput = {
    create?: XOR<pmb_documentsCreateWithoutPmb_applicantsInput, pmb_documentsUncheckedCreateWithoutPmb_applicantsInput> | pmb_documentsCreateWithoutPmb_applicantsInput[] | pmb_documentsUncheckedCreateWithoutPmb_applicantsInput[]
    connectOrCreate?: pmb_documentsCreateOrConnectWithoutPmb_applicantsInput | pmb_documentsCreateOrConnectWithoutPmb_applicantsInput[]
    createMany?: pmb_documentsCreateManyPmb_applicantsInputEnvelope
    connect?: pmb_documentsWhereUniqueInput | pmb_documentsWhereUniqueInput[]
  }

  export type pmb_documentsUncheckedCreateNestedManyWithoutPmb_applicantsInput = {
    create?: XOR<pmb_documentsCreateWithoutPmb_applicantsInput, pmb_documentsUncheckedCreateWithoutPmb_applicantsInput> | pmb_documentsCreateWithoutPmb_applicantsInput[] | pmb_documentsUncheckedCreateWithoutPmb_applicantsInput[]
    connectOrCreate?: pmb_documentsCreateOrConnectWithoutPmb_applicantsInput | pmb_documentsCreateOrConnectWithoutPmb_applicantsInput[]
    createMany?: pmb_documentsCreateManyPmb_applicantsInputEnvelope
    connect?: pmb_documentsWhereUniqueInput | pmb_documentsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type pmb_periodsUpdateOneWithoutPmb_applicantsNestedInput = {
    create?: XOR<pmb_periodsCreateWithoutPmb_applicantsInput, pmb_periodsUncheckedCreateWithoutPmb_applicantsInput>
    connectOrCreate?: pmb_periodsCreateOrConnectWithoutPmb_applicantsInput
    upsert?: pmb_periodsUpsertWithoutPmb_applicantsInput
    disconnect?: pmb_periodsWhereInput | boolean
    delete?: pmb_periodsWhereInput | boolean
    connect?: pmb_periodsWhereUniqueInput
    update?: XOR<XOR<pmb_periodsUpdateToOneWithWhereWithoutPmb_applicantsInput, pmb_periodsUpdateWithoutPmb_applicantsInput>, pmb_periodsUncheckedUpdateWithoutPmb_applicantsInput>
  }

  export type pmb_documentsUpdateManyWithoutPmb_applicantsNestedInput = {
    create?: XOR<pmb_documentsCreateWithoutPmb_applicantsInput, pmb_documentsUncheckedCreateWithoutPmb_applicantsInput> | pmb_documentsCreateWithoutPmb_applicantsInput[] | pmb_documentsUncheckedCreateWithoutPmb_applicantsInput[]
    connectOrCreate?: pmb_documentsCreateOrConnectWithoutPmb_applicantsInput | pmb_documentsCreateOrConnectWithoutPmb_applicantsInput[]
    upsert?: pmb_documentsUpsertWithWhereUniqueWithoutPmb_applicantsInput | pmb_documentsUpsertWithWhereUniqueWithoutPmb_applicantsInput[]
    createMany?: pmb_documentsCreateManyPmb_applicantsInputEnvelope
    set?: pmb_documentsWhereUniqueInput | pmb_documentsWhereUniqueInput[]
    disconnect?: pmb_documentsWhereUniqueInput | pmb_documentsWhereUniqueInput[]
    delete?: pmb_documentsWhereUniqueInput | pmb_documentsWhereUniqueInput[]
    connect?: pmb_documentsWhereUniqueInput | pmb_documentsWhereUniqueInput[]
    update?: pmb_documentsUpdateWithWhereUniqueWithoutPmb_applicantsInput | pmb_documentsUpdateWithWhereUniqueWithoutPmb_applicantsInput[]
    updateMany?: pmb_documentsUpdateManyWithWhereWithoutPmb_applicantsInput | pmb_documentsUpdateManyWithWhereWithoutPmb_applicantsInput[]
    deleteMany?: pmb_documentsScalarWhereInput | pmb_documentsScalarWhereInput[]
  }

  export type pmb_documentsUncheckedUpdateManyWithoutPmb_applicantsNestedInput = {
    create?: XOR<pmb_documentsCreateWithoutPmb_applicantsInput, pmb_documentsUncheckedCreateWithoutPmb_applicantsInput> | pmb_documentsCreateWithoutPmb_applicantsInput[] | pmb_documentsUncheckedCreateWithoutPmb_applicantsInput[]
    connectOrCreate?: pmb_documentsCreateOrConnectWithoutPmb_applicantsInput | pmb_documentsCreateOrConnectWithoutPmb_applicantsInput[]
    upsert?: pmb_documentsUpsertWithWhereUniqueWithoutPmb_applicantsInput | pmb_documentsUpsertWithWhereUniqueWithoutPmb_applicantsInput[]
    createMany?: pmb_documentsCreateManyPmb_applicantsInputEnvelope
    set?: pmb_documentsWhereUniqueInput | pmb_documentsWhereUniqueInput[]
    disconnect?: pmb_documentsWhereUniqueInput | pmb_documentsWhereUniqueInput[]
    delete?: pmb_documentsWhereUniqueInput | pmb_documentsWhereUniqueInput[]
    connect?: pmb_documentsWhereUniqueInput | pmb_documentsWhereUniqueInput[]
    update?: pmb_documentsUpdateWithWhereUniqueWithoutPmb_applicantsInput | pmb_documentsUpdateWithWhereUniqueWithoutPmb_applicantsInput[]
    updateMany?: pmb_documentsUpdateManyWithWhereWithoutPmb_applicantsInput | pmb_documentsUpdateManyWithWhereWithoutPmb_applicantsInput[]
    deleteMany?: pmb_documentsScalarWhereInput | pmb_documentsScalarWhereInput[]
  }

  export type pmb_applicantsCreateNestedOneWithoutPmb_documentsInput = {
    create?: XOR<pmb_applicantsCreateWithoutPmb_documentsInput, pmb_applicantsUncheckedCreateWithoutPmb_documentsInput>
    connectOrCreate?: pmb_applicantsCreateOrConnectWithoutPmb_documentsInput
    connect?: pmb_applicantsWhereUniqueInput
  }

  export type pmb_applicantsUpdateOneWithoutPmb_documentsNestedInput = {
    create?: XOR<pmb_applicantsCreateWithoutPmb_documentsInput, pmb_applicantsUncheckedCreateWithoutPmb_documentsInput>
    connectOrCreate?: pmb_applicantsCreateOrConnectWithoutPmb_documentsInput
    upsert?: pmb_applicantsUpsertWithoutPmb_documentsInput
    disconnect?: pmb_applicantsWhereInput | boolean
    delete?: pmb_applicantsWhereInput | boolean
    connect?: pmb_applicantsWhereUniqueInput
    update?: XOR<XOR<pmb_applicantsUpdateToOneWithWhereWithoutPmb_documentsInput, pmb_applicantsUpdateWithoutPmb_documentsInput>, pmb_applicantsUncheckedUpdateWithoutPmb_documentsInput>
  }

  export type pmb_applicantsCreateNestedManyWithoutPmb_periodsInput = {
    create?: XOR<pmb_applicantsCreateWithoutPmb_periodsInput, pmb_applicantsUncheckedCreateWithoutPmb_periodsInput> | pmb_applicantsCreateWithoutPmb_periodsInput[] | pmb_applicantsUncheckedCreateWithoutPmb_periodsInput[]
    connectOrCreate?: pmb_applicantsCreateOrConnectWithoutPmb_periodsInput | pmb_applicantsCreateOrConnectWithoutPmb_periodsInput[]
    createMany?: pmb_applicantsCreateManyPmb_periodsInputEnvelope
    connect?: pmb_applicantsWhereUniqueInput | pmb_applicantsWhereUniqueInput[]
  }

  export type pmb_applicantsUncheckedCreateNestedManyWithoutPmb_periodsInput = {
    create?: XOR<pmb_applicantsCreateWithoutPmb_periodsInput, pmb_applicantsUncheckedCreateWithoutPmb_periodsInput> | pmb_applicantsCreateWithoutPmb_periodsInput[] | pmb_applicantsUncheckedCreateWithoutPmb_periodsInput[]
    connectOrCreate?: pmb_applicantsCreateOrConnectWithoutPmb_periodsInput | pmb_applicantsCreateOrConnectWithoutPmb_periodsInput[]
    createMany?: pmb_applicantsCreateManyPmb_periodsInputEnvelope
    connect?: pmb_applicantsWhereUniqueInput | pmb_applicantsWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type pmb_applicantsUpdateManyWithoutPmb_periodsNestedInput = {
    create?: XOR<pmb_applicantsCreateWithoutPmb_periodsInput, pmb_applicantsUncheckedCreateWithoutPmb_periodsInput> | pmb_applicantsCreateWithoutPmb_periodsInput[] | pmb_applicantsUncheckedCreateWithoutPmb_periodsInput[]
    connectOrCreate?: pmb_applicantsCreateOrConnectWithoutPmb_periodsInput | pmb_applicantsCreateOrConnectWithoutPmb_periodsInput[]
    upsert?: pmb_applicantsUpsertWithWhereUniqueWithoutPmb_periodsInput | pmb_applicantsUpsertWithWhereUniqueWithoutPmb_periodsInput[]
    createMany?: pmb_applicantsCreateManyPmb_periodsInputEnvelope
    set?: pmb_applicantsWhereUniqueInput | pmb_applicantsWhereUniqueInput[]
    disconnect?: pmb_applicantsWhereUniqueInput | pmb_applicantsWhereUniqueInput[]
    delete?: pmb_applicantsWhereUniqueInput | pmb_applicantsWhereUniqueInput[]
    connect?: pmb_applicantsWhereUniqueInput | pmb_applicantsWhereUniqueInput[]
    update?: pmb_applicantsUpdateWithWhereUniqueWithoutPmb_periodsInput | pmb_applicantsUpdateWithWhereUniqueWithoutPmb_periodsInput[]
    updateMany?: pmb_applicantsUpdateManyWithWhereWithoutPmb_periodsInput | pmb_applicantsUpdateManyWithWhereWithoutPmb_periodsInput[]
    deleteMany?: pmb_applicantsScalarWhereInput | pmb_applicantsScalarWhereInput[]
  }

  export type pmb_applicantsUncheckedUpdateManyWithoutPmb_periodsNestedInput = {
    create?: XOR<pmb_applicantsCreateWithoutPmb_periodsInput, pmb_applicantsUncheckedCreateWithoutPmb_periodsInput> | pmb_applicantsCreateWithoutPmb_periodsInput[] | pmb_applicantsUncheckedCreateWithoutPmb_periodsInput[]
    connectOrCreate?: pmb_applicantsCreateOrConnectWithoutPmb_periodsInput | pmb_applicantsCreateOrConnectWithoutPmb_periodsInput[]
    upsert?: pmb_applicantsUpsertWithWhereUniqueWithoutPmb_periodsInput | pmb_applicantsUpsertWithWhereUniqueWithoutPmb_periodsInput[]
    createMany?: pmb_applicantsCreateManyPmb_periodsInputEnvelope
    set?: pmb_applicantsWhereUniqueInput | pmb_applicantsWhereUniqueInput[]
    disconnect?: pmb_applicantsWhereUniqueInput | pmb_applicantsWhereUniqueInput[]
    delete?: pmb_applicantsWhereUniqueInput | pmb_applicantsWhereUniqueInput[]
    connect?: pmb_applicantsWhereUniqueInput | pmb_applicantsWhereUniqueInput[]
    update?: pmb_applicantsUpdateWithWhereUniqueWithoutPmb_periodsInput | pmb_applicantsUpdateWithWhereUniqueWithoutPmb_periodsInput[]
    updateMany?: pmb_applicantsUpdateManyWithWhereWithoutPmb_periodsInput | pmb_applicantsUpdateManyWithWhereWithoutPmb_periodsInput[]
    deleteMany?: pmb_applicantsScalarWhereInput | pmb_applicantsScalarWhereInput[]
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

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
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

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
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

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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

  export type pmb_periodsCreateWithoutPmb_applicantsInput = {
    id?: string
    tenant_id: string
    name: string
    start_date: Date | string
    end_date: Date | string
    is_active?: boolean | null
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type pmb_periodsUncheckedCreateWithoutPmb_applicantsInput = {
    id?: string
    tenant_id: string
    name: string
    start_date: Date | string
    end_date: Date | string
    is_active?: boolean | null
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type pmb_periodsCreateOrConnectWithoutPmb_applicantsInput = {
    where: pmb_periodsWhereUniqueInput
    create: XOR<pmb_periodsCreateWithoutPmb_applicantsInput, pmb_periodsUncheckedCreateWithoutPmb_applicantsInput>
  }

  export type pmb_documentsCreateWithoutPmb_applicantsInput = {
    id?: string
    document_type: string
    file_url: string
    status?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type pmb_documentsUncheckedCreateWithoutPmb_applicantsInput = {
    id?: string
    document_type: string
    file_url: string
    status?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type pmb_documentsCreateOrConnectWithoutPmb_applicantsInput = {
    where: pmb_documentsWhereUniqueInput
    create: XOR<pmb_documentsCreateWithoutPmb_applicantsInput, pmb_documentsUncheckedCreateWithoutPmb_applicantsInput>
  }

  export type pmb_documentsCreateManyPmb_applicantsInputEnvelope = {
    data: pmb_documentsCreateManyPmb_applicantsInput | pmb_documentsCreateManyPmb_applicantsInput[]
    skipDuplicates?: boolean
  }

  export type pmb_periodsUpsertWithoutPmb_applicantsInput = {
    update: XOR<pmb_periodsUpdateWithoutPmb_applicantsInput, pmb_periodsUncheckedUpdateWithoutPmb_applicantsInput>
    create: XOR<pmb_periodsCreateWithoutPmb_applicantsInput, pmb_periodsUncheckedCreateWithoutPmb_applicantsInput>
    where?: pmb_periodsWhereInput
  }

  export type pmb_periodsUpdateToOneWithWhereWithoutPmb_applicantsInput = {
    where?: pmb_periodsWhereInput
    data: XOR<pmb_periodsUpdateWithoutPmb_applicantsInput, pmb_periodsUncheckedUpdateWithoutPmb_applicantsInput>
  }

  export type pmb_periodsUpdateWithoutPmb_applicantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pmb_periodsUncheckedUpdateWithoutPmb_applicantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pmb_documentsUpsertWithWhereUniqueWithoutPmb_applicantsInput = {
    where: pmb_documentsWhereUniqueInput
    update: XOR<pmb_documentsUpdateWithoutPmb_applicantsInput, pmb_documentsUncheckedUpdateWithoutPmb_applicantsInput>
    create: XOR<pmb_documentsCreateWithoutPmb_applicantsInput, pmb_documentsUncheckedCreateWithoutPmb_applicantsInput>
  }

  export type pmb_documentsUpdateWithWhereUniqueWithoutPmb_applicantsInput = {
    where: pmb_documentsWhereUniqueInput
    data: XOR<pmb_documentsUpdateWithoutPmb_applicantsInput, pmb_documentsUncheckedUpdateWithoutPmb_applicantsInput>
  }

  export type pmb_documentsUpdateManyWithWhereWithoutPmb_applicantsInput = {
    where: pmb_documentsScalarWhereInput
    data: XOR<pmb_documentsUpdateManyMutationInput, pmb_documentsUncheckedUpdateManyWithoutPmb_applicantsInput>
  }

  export type pmb_documentsScalarWhereInput = {
    AND?: pmb_documentsScalarWhereInput | pmb_documentsScalarWhereInput[]
    OR?: pmb_documentsScalarWhereInput[]
    NOT?: pmb_documentsScalarWhereInput | pmb_documentsScalarWhereInput[]
    id?: UuidFilter<"pmb_documents"> | string
    applicant_id?: UuidNullableFilter<"pmb_documents"> | string | null
    document_type?: StringFilter<"pmb_documents"> | string
    file_url?: StringFilter<"pmb_documents"> | string
    status?: StringNullableFilter<"pmb_documents"> | string | null
    notes?: StringNullableFilter<"pmb_documents"> | string | null
    created_at?: DateTimeNullableFilter<"pmb_documents"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"pmb_documents"> | Date | string | null
  }

  export type pmb_applicantsCreateWithoutPmb_documentsInput = {
    id?: string
    tenant_id: string
    registration_number: string
    full_name: string
    email: string
    phone_number?: string | null
    identity_number?: string | null
    address?: string | null
    birth_place?: string | null
    birth_date?: Date | string | null
    gender?: string | null
    religion?: string | null
    previous_school?: string | null
    first_choice_prodi_id?: string | null
    second_choice_prodi_id?: string | null
    status?: string | null
    selection_score?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    pmb_periods?: pmb_periodsCreateNestedOneWithoutPmb_applicantsInput
  }

  export type pmb_applicantsUncheckedCreateWithoutPmb_documentsInput = {
    id?: string
    tenant_id: string
    period_id?: string | null
    registration_number: string
    full_name: string
    email: string
    phone_number?: string | null
    identity_number?: string | null
    address?: string | null
    birth_place?: string | null
    birth_date?: Date | string | null
    gender?: string | null
    religion?: string | null
    previous_school?: string | null
    first_choice_prodi_id?: string | null
    second_choice_prodi_id?: string | null
    status?: string | null
    selection_score?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type pmb_applicantsCreateOrConnectWithoutPmb_documentsInput = {
    where: pmb_applicantsWhereUniqueInput
    create: XOR<pmb_applicantsCreateWithoutPmb_documentsInput, pmb_applicantsUncheckedCreateWithoutPmb_documentsInput>
  }

  export type pmb_applicantsUpsertWithoutPmb_documentsInput = {
    update: XOR<pmb_applicantsUpdateWithoutPmb_documentsInput, pmb_applicantsUncheckedUpdateWithoutPmb_documentsInput>
    create: XOR<pmb_applicantsCreateWithoutPmb_documentsInput, pmb_applicantsUncheckedCreateWithoutPmb_documentsInput>
    where?: pmb_applicantsWhereInput
  }

  export type pmb_applicantsUpdateToOneWithWhereWithoutPmb_documentsInput = {
    where?: pmb_applicantsWhereInput
    data: XOR<pmb_applicantsUpdateWithoutPmb_documentsInput, pmb_applicantsUncheckedUpdateWithoutPmb_documentsInput>
  }

  export type pmb_applicantsUpdateWithoutPmb_documentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    registration_number?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    identity_number?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth_place?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    previous_school?: NullableStringFieldUpdateOperationsInput | string | null
    first_choice_prodi_id?: NullableStringFieldUpdateOperationsInput | string | null
    second_choice_prodi_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    selection_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pmb_periods?: pmb_periodsUpdateOneWithoutPmb_applicantsNestedInput
  }

  export type pmb_applicantsUncheckedUpdateWithoutPmb_documentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    period_id?: NullableStringFieldUpdateOperationsInput | string | null
    registration_number?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    identity_number?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth_place?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    previous_school?: NullableStringFieldUpdateOperationsInput | string | null
    first_choice_prodi_id?: NullableStringFieldUpdateOperationsInput | string | null
    second_choice_prodi_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    selection_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pmb_applicantsCreateWithoutPmb_periodsInput = {
    id?: string
    tenant_id: string
    registration_number: string
    full_name: string
    email: string
    phone_number?: string | null
    identity_number?: string | null
    address?: string | null
    birth_place?: string | null
    birth_date?: Date | string | null
    gender?: string | null
    religion?: string | null
    previous_school?: string | null
    first_choice_prodi_id?: string | null
    second_choice_prodi_id?: string | null
    status?: string | null
    selection_score?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    pmb_documents?: pmb_documentsCreateNestedManyWithoutPmb_applicantsInput
  }

  export type pmb_applicantsUncheckedCreateWithoutPmb_periodsInput = {
    id?: string
    tenant_id: string
    registration_number: string
    full_name: string
    email: string
    phone_number?: string | null
    identity_number?: string | null
    address?: string | null
    birth_place?: string | null
    birth_date?: Date | string | null
    gender?: string | null
    religion?: string | null
    previous_school?: string | null
    first_choice_prodi_id?: string | null
    second_choice_prodi_id?: string | null
    status?: string | null
    selection_score?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    pmb_documents?: pmb_documentsUncheckedCreateNestedManyWithoutPmb_applicantsInput
  }

  export type pmb_applicantsCreateOrConnectWithoutPmb_periodsInput = {
    where: pmb_applicantsWhereUniqueInput
    create: XOR<pmb_applicantsCreateWithoutPmb_periodsInput, pmb_applicantsUncheckedCreateWithoutPmb_periodsInput>
  }

  export type pmb_applicantsCreateManyPmb_periodsInputEnvelope = {
    data: pmb_applicantsCreateManyPmb_periodsInput | pmb_applicantsCreateManyPmb_periodsInput[]
    skipDuplicates?: boolean
  }

  export type pmb_applicantsUpsertWithWhereUniqueWithoutPmb_periodsInput = {
    where: pmb_applicantsWhereUniqueInput
    update: XOR<pmb_applicantsUpdateWithoutPmb_periodsInput, pmb_applicantsUncheckedUpdateWithoutPmb_periodsInput>
    create: XOR<pmb_applicantsCreateWithoutPmb_periodsInput, pmb_applicantsUncheckedCreateWithoutPmb_periodsInput>
  }

  export type pmb_applicantsUpdateWithWhereUniqueWithoutPmb_periodsInput = {
    where: pmb_applicantsWhereUniqueInput
    data: XOR<pmb_applicantsUpdateWithoutPmb_periodsInput, pmb_applicantsUncheckedUpdateWithoutPmb_periodsInput>
  }

  export type pmb_applicantsUpdateManyWithWhereWithoutPmb_periodsInput = {
    where: pmb_applicantsScalarWhereInput
    data: XOR<pmb_applicantsUpdateManyMutationInput, pmb_applicantsUncheckedUpdateManyWithoutPmb_periodsInput>
  }

  export type pmb_applicantsScalarWhereInput = {
    AND?: pmb_applicantsScalarWhereInput | pmb_applicantsScalarWhereInput[]
    OR?: pmb_applicantsScalarWhereInput[]
    NOT?: pmb_applicantsScalarWhereInput | pmb_applicantsScalarWhereInput[]
    id?: UuidFilter<"pmb_applicants"> | string
    tenant_id?: UuidFilter<"pmb_applicants"> | string
    period_id?: UuidNullableFilter<"pmb_applicants"> | string | null
    registration_number?: StringFilter<"pmb_applicants"> | string
    full_name?: StringFilter<"pmb_applicants"> | string
    email?: StringFilter<"pmb_applicants"> | string
    phone_number?: StringNullableFilter<"pmb_applicants"> | string | null
    identity_number?: StringNullableFilter<"pmb_applicants"> | string | null
    address?: StringNullableFilter<"pmb_applicants"> | string | null
    birth_place?: StringNullableFilter<"pmb_applicants"> | string | null
    birth_date?: DateTimeNullableFilter<"pmb_applicants"> | Date | string | null
    gender?: StringNullableFilter<"pmb_applicants"> | string | null
    religion?: StringNullableFilter<"pmb_applicants"> | string | null
    previous_school?: StringNullableFilter<"pmb_applicants"> | string | null
    first_choice_prodi_id?: UuidNullableFilter<"pmb_applicants"> | string | null
    second_choice_prodi_id?: UuidNullableFilter<"pmb_applicants"> | string | null
    status?: StringNullableFilter<"pmb_applicants"> | string | null
    selection_score?: DecimalNullableFilter<"pmb_applicants"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableFilter<"pmb_applicants"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"pmb_applicants"> | Date | string | null
  }

  export type pmb_documentsCreateManyPmb_applicantsInput = {
    id?: string
    document_type: string
    file_url: string
    status?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type pmb_documentsUpdateWithoutPmb_applicantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_type?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pmb_documentsUncheckedUpdateWithoutPmb_applicantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_type?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pmb_documentsUncheckedUpdateManyWithoutPmb_applicantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_type?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pmb_applicantsCreateManyPmb_periodsInput = {
    id?: string
    tenant_id: string
    registration_number: string
    full_name: string
    email: string
    phone_number?: string | null
    identity_number?: string | null
    address?: string | null
    birth_place?: string | null
    birth_date?: Date | string | null
    gender?: string | null
    religion?: string | null
    previous_school?: string | null
    first_choice_prodi_id?: string | null
    second_choice_prodi_id?: string | null
    status?: string | null
    selection_score?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type pmb_applicantsUpdateWithoutPmb_periodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    registration_number?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    identity_number?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth_place?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    previous_school?: NullableStringFieldUpdateOperationsInput | string | null
    first_choice_prodi_id?: NullableStringFieldUpdateOperationsInput | string | null
    second_choice_prodi_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    selection_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pmb_documents?: pmb_documentsUpdateManyWithoutPmb_applicantsNestedInput
  }

  export type pmb_applicantsUncheckedUpdateWithoutPmb_periodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    registration_number?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    identity_number?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth_place?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    previous_school?: NullableStringFieldUpdateOperationsInput | string | null
    first_choice_prodi_id?: NullableStringFieldUpdateOperationsInput | string | null
    second_choice_prodi_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    selection_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pmb_documents?: pmb_documentsUncheckedUpdateManyWithoutPmb_applicantsNestedInput
  }

  export type pmb_applicantsUncheckedUpdateManyWithoutPmb_periodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    registration_number?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    identity_number?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth_place?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    previous_school?: NullableStringFieldUpdateOperationsInput | string | null
    first_choice_prodi_id?: NullableStringFieldUpdateOperationsInput | string | null
    second_choice_prodi_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    selection_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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