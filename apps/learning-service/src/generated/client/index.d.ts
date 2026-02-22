
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
 * Model assignments
 * 
 */
export type assignments = $Result.DefaultSelection<Prisma.$assignmentsPayload>
/**
 * Model discussions
 * 
 */
export type discussions = $Result.DefaultSelection<Prisma.$discussionsPayload>
/**
 * Model materials
 * 
 */
export type materials = $Result.DefaultSelection<Prisma.$materialsPayload>
/**
 * Model messages
 * 
 */
export type messages = $Result.DefaultSelection<Prisma.$messagesPayload>
/**
 * Model notifications
 * 
 */
export type notifications = $Result.DefaultSelection<Prisma.$notificationsPayload>
/**
 * Model quiz_attempts
 * 
 */
export type quiz_attempts = $Result.DefaultSelection<Prisma.$quiz_attemptsPayload>
/**
 * Model quizzes
 * 
 */
export type quizzes = $Result.DefaultSelection<Prisma.$quizzesPayload>
/**
 * Model submissions
 * 
 */
export type submissions = $Result.DefaultSelection<Prisma.$submissionsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Assignments
 * const assignments = await prisma.assignments.findMany()
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
   * // Fetch zero or more Assignments
   * const assignments = await prisma.assignments.findMany()
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
   * `prisma.assignments`: Exposes CRUD operations for the **assignments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assignments
    * const assignments = await prisma.assignments.findMany()
    * ```
    */
  get assignments(): Prisma.assignmentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.discussions`: Exposes CRUD operations for the **discussions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Discussions
    * const discussions = await prisma.discussions.findMany()
    * ```
    */
  get discussions(): Prisma.discussionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.materials`: Exposes CRUD operations for the **materials** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materials
    * const materials = await prisma.materials.findMany()
    * ```
    */
  get materials(): Prisma.materialsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messages`: Exposes CRUD operations for the **messages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.messages.findMany()
    * ```
    */
  get messages(): Prisma.messagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notifications`: Exposes CRUD operations for the **notifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notifications.findMany()
    * ```
    */
  get notifications(): Prisma.notificationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quiz_attempts`: Exposes CRUD operations for the **quiz_attempts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quiz_attempts
    * const quiz_attempts = await prisma.quiz_attempts.findMany()
    * ```
    */
  get quiz_attempts(): Prisma.quiz_attemptsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizzes`: Exposes CRUD operations for the **quizzes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quizzes
    * const quizzes = await prisma.quizzes.findMany()
    * ```
    */
  get quizzes(): Prisma.quizzesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.submissions`: Exposes CRUD operations for the **submissions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submissions
    * const submissions = await prisma.submissions.findMany()
    * ```
    */
  get submissions(): Prisma.submissionsDelegate<ExtArgs, ClientOptions>;
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
    assignments: 'assignments',
    discussions: 'discussions',
    materials: 'materials',
    messages: 'messages',
    notifications: 'notifications',
    quiz_attempts: 'quiz_attempts',
    quizzes: 'quizzes',
    submissions: 'submissions'
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
      modelProps: "assignments" | "discussions" | "materials" | "messages" | "notifications" | "quiz_attempts" | "quizzes" | "submissions"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      assignments: {
        payload: Prisma.$assignmentsPayload<ExtArgs>
        fields: Prisma.assignmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.assignmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.assignmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignmentsPayload>
          }
          findFirst: {
            args: Prisma.assignmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.assignmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignmentsPayload>
          }
          findMany: {
            args: Prisma.assignmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignmentsPayload>[]
          }
          create: {
            args: Prisma.assignmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignmentsPayload>
          }
          createMany: {
            args: Prisma.assignmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.assignmentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignmentsPayload>[]
          }
          delete: {
            args: Prisma.assignmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignmentsPayload>
          }
          update: {
            args: Prisma.assignmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignmentsPayload>
          }
          deleteMany: {
            args: Prisma.assignmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.assignmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.assignmentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignmentsPayload>[]
          }
          upsert: {
            args: Prisma.assignmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignmentsPayload>
          }
          aggregate: {
            args: Prisma.AssignmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssignments>
          }
          groupBy: {
            args: Prisma.assignmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssignmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.assignmentsCountArgs<ExtArgs>
            result: $Utils.Optional<AssignmentsCountAggregateOutputType> | number
          }
        }
      }
      discussions: {
        payload: Prisma.$discussionsPayload<ExtArgs>
        fields: Prisma.discussionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.discussionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$discussionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.discussionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$discussionsPayload>
          }
          findFirst: {
            args: Prisma.discussionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$discussionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.discussionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$discussionsPayload>
          }
          findMany: {
            args: Prisma.discussionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$discussionsPayload>[]
          }
          create: {
            args: Prisma.discussionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$discussionsPayload>
          }
          createMany: {
            args: Prisma.discussionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.discussionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$discussionsPayload>[]
          }
          delete: {
            args: Prisma.discussionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$discussionsPayload>
          }
          update: {
            args: Prisma.discussionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$discussionsPayload>
          }
          deleteMany: {
            args: Prisma.discussionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.discussionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.discussionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$discussionsPayload>[]
          }
          upsert: {
            args: Prisma.discussionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$discussionsPayload>
          }
          aggregate: {
            args: Prisma.DiscussionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiscussions>
          }
          groupBy: {
            args: Prisma.discussionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiscussionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.discussionsCountArgs<ExtArgs>
            result: $Utils.Optional<DiscussionsCountAggregateOutputType> | number
          }
        }
      }
      materials: {
        payload: Prisma.$materialsPayload<ExtArgs>
        fields: Prisma.materialsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.materialsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.materialsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialsPayload>
          }
          findFirst: {
            args: Prisma.materialsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.materialsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialsPayload>
          }
          findMany: {
            args: Prisma.materialsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialsPayload>[]
          }
          create: {
            args: Prisma.materialsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialsPayload>
          }
          createMany: {
            args: Prisma.materialsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.materialsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialsPayload>[]
          }
          delete: {
            args: Prisma.materialsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialsPayload>
          }
          update: {
            args: Prisma.materialsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialsPayload>
          }
          deleteMany: {
            args: Prisma.materialsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.materialsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.materialsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialsPayload>[]
          }
          upsert: {
            args: Prisma.materialsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialsPayload>
          }
          aggregate: {
            args: Prisma.MaterialsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaterials>
          }
          groupBy: {
            args: Prisma.materialsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaterialsGroupByOutputType>[]
          }
          count: {
            args: Prisma.materialsCountArgs<ExtArgs>
            result: $Utils.Optional<MaterialsCountAggregateOutputType> | number
          }
        }
      }
      messages: {
        payload: Prisma.$messagesPayload<ExtArgs>
        fields: Prisma.messagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.messagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.messagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          findFirst: {
            args: Prisma.messagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.messagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          findMany: {
            args: Prisma.messagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          create: {
            args: Prisma.messagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          createMany: {
            args: Prisma.messagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.messagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          delete: {
            args: Prisma.messagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          update: {
            args: Prisma.messagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          deleteMany: {
            args: Prisma.messagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.messagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.messagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          upsert: {
            args: Prisma.messagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          aggregate: {
            args: Prisma.MessagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessages>
          }
          groupBy: {
            args: Prisma.messagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.messagesCountArgs<ExtArgs>
            result: $Utils.Optional<MessagesCountAggregateOutputType> | number
          }
        }
      }
      notifications: {
        payload: Prisma.$notificationsPayload<ExtArgs>
        fields: Prisma.notificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          findFirst: {
            args: Prisma.notificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          findMany: {
            args: Prisma.notificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[]
          }
          create: {
            args: Prisma.notificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          createMany: {
            args: Prisma.notificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.notificationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[]
          }
          delete: {
            args: Prisma.notificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          update: {
            args: Prisma.notificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          deleteMany: {
            args: Prisma.notificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.notificationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[]
          }
          upsert: {
            args: Prisma.notificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          aggregate: {
            args: Prisma.NotificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotifications>
          }
          groupBy: {
            args: Prisma.notificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.notificationsCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationsCountAggregateOutputType> | number
          }
        }
      }
      quiz_attempts: {
        payload: Prisma.$quiz_attemptsPayload<ExtArgs>
        fields: Prisma.quiz_attemptsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.quiz_attemptsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quiz_attemptsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.quiz_attemptsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quiz_attemptsPayload>
          }
          findFirst: {
            args: Prisma.quiz_attemptsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quiz_attemptsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.quiz_attemptsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quiz_attemptsPayload>
          }
          findMany: {
            args: Prisma.quiz_attemptsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quiz_attemptsPayload>[]
          }
          create: {
            args: Prisma.quiz_attemptsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quiz_attemptsPayload>
          }
          createMany: {
            args: Prisma.quiz_attemptsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.quiz_attemptsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quiz_attemptsPayload>[]
          }
          delete: {
            args: Prisma.quiz_attemptsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quiz_attemptsPayload>
          }
          update: {
            args: Prisma.quiz_attemptsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quiz_attemptsPayload>
          }
          deleteMany: {
            args: Prisma.quiz_attemptsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.quiz_attemptsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.quiz_attemptsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quiz_attemptsPayload>[]
          }
          upsert: {
            args: Prisma.quiz_attemptsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quiz_attemptsPayload>
          }
          aggregate: {
            args: Prisma.Quiz_attemptsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuiz_attempts>
          }
          groupBy: {
            args: Prisma.quiz_attemptsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Quiz_attemptsGroupByOutputType>[]
          }
          count: {
            args: Prisma.quiz_attemptsCountArgs<ExtArgs>
            result: $Utils.Optional<Quiz_attemptsCountAggregateOutputType> | number
          }
        }
      }
      quizzes: {
        payload: Prisma.$quizzesPayload<ExtArgs>
        fields: Prisma.quizzesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.quizzesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quizzesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.quizzesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quizzesPayload>
          }
          findFirst: {
            args: Prisma.quizzesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quizzesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.quizzesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quizzesPayload>
          }
          findMany: {
            args: Prisma.quizzesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quizzesPayload>[]
          }
          create: {
            args: Prisma.quizzesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quizzesPayload>
          }
          createMany: {
            args: Prisma.quizzesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.quizzesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quizzesPayload>[]
          }
          delete: {
            args: Prisma.quizzesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quizzesPayload>
          }
          update: {
            args: Prisma.quizzesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quizzesPayload>
          }
          deleteMany: {
            args: Prisma.quizzesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.quizzesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.quizzesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quizzesPayload>[]
          }
          upsert: {
            args: Prisma.quizzesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quizzesPayload>
          }
          aggregate: {
            args: Prisma.QuizzesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizzes>
          }
          groupBy: {
            args: Prisma.quizzesGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizzesGroupByOutputType>[]
          }
          count: {
            args: Prisma.quizzesCountArgs<ExtArgs>
            result: $Utils.Optional<QuizzesCountAggregateOutputType> | number
          }
        }
      }
      submissions: {
        payload: Prisma.$submissionsPayload<ExtArgs>
        fields: Prisma.submissionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.submissionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.submissionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload>
          }
          findFirst: {
            args: Prisma.submissionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.submissionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload>
          }
          findMany: {
            args: Prisma.submissionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload>[]
          }
          create: {
            args: Prisma.submissionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload>
          }
          createMany: {
            args: Prisma.submissionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.submissionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload>[]
          }
          delete: {
            args: Prisma.submissionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload>
          }
          update: {
            args: Prisma.submissionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload>
          }
          deleteMany: {
            args: Prisma.submissionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.submissionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.submissionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload>[]
          }
          upsert: {
            args: Prisma.submissionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload>
          }
          aggregate: {
            args: Prisma.SubmissionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmissions>
          }
          groupBy: {
            args: Prisma.submissionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubmissionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.submissionsCountArgs<ExtArgs>
            result: $Utils.Optional<SubmissionsCountAggregateOutputType> | number
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
    assignments?: assignmentsOmit
    discussions?: discussionsOmit
    materials?: materialsOmit
    messages?: messagesOmit
    notifications?: notificationsOmit
    quiz_attempts?: quiz_attemptsOmit
    quizzes?: quizzesOmit
    submissions?: submissionsOmit
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
   * Count Type AssignmentsCountOutputType
   */

  export type AssignmentsCountOutputType = {
    submissions: number
  }

  export type AssignmentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | AssignmentsCountOutputTypeCountSubmissionsArgs
  }

  // Custom InputTypes
  /**
   * AssignmentsCountOutputType without action
   */
  export type AssignmentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentsCountOutputType
     */
    select?: AssignmentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssignmentsCountOutputType without action
   */
  export type AssignmentsCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: submissionsWhereInput
  }


  /**
   * Count Type QuizzesCountOutputType
   */

  export type QuizzesCountOutputType = {
    quiz_attempts: number
  }

  export type QuizzesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz_attempts?: boolean | QuizzesCountOutputTypeCountQuiz_attemptsArgs
  }

  // Custom InputTypes
  /**
   * QuizzesCountOutputType without action
   */
  export type QuizzesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizzesCountOutputType
     */
    select?: QuizzesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizzesCountOutputType without action
   */
  export type QuizzesCountOutputTypeCountQuiz_attemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: quiz_attemptsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model assignments
   */

  export type AggregateAssignments = {
    _count: AssignmentsCountAggregateOutputType | null
    _min: AssignmentsMinAggregateOutputType | null
    _max: AssignmentsMaxAggregateOutputType | null
  }

  export type AssignmentsMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    class_id: string | null
    title: string | null
    description: string | null
    deadline: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AssignmentsMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    class_id: string | null
    title: string | null
    description: string | null
    deadline: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AssignmentsCountAggregateOutputType = {
    id: number
    tenant_id: number
    class_id: number
    title: number
    description: number
    deadline: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AssignmentsMinAggregateInputType = {
    id?: true
    tenant_id?: true
    class_id?: true
    title?: true
    description?: true
    deadline?: true
    created_at?: true
    updated_at?: true
  }

  export type AssignmentsMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    class_id?: true
    title?: true
    description?: true
    deadline?: true
    created_at?: true
    updated_at?: true
  }

  export type AssignmentsCountAggregateInputType = {
    id?: true
    tenant_id?: true
    class_id?: true
    title?: true
    description?: true
    deadline?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AssignmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which assignments to aggregate.
     */
    where?: assignmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of assignments to fetch.
     */
    orderBy?: assignmentsOrderByWithRelationInput | assignmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: assignmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned assignments
    **/
    _count?: true | AssignmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssignmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssignmentsMaxAggregateInputType
  }

  export type GetAssignmentsAggregateType<T extends AssignmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateAssignments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignments[P]>
      : GetScalarType<T[P], AggregateAssignments[P]>
  }




  export type assignmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: assignmentsWhereInput
    orderBy?: assignmentsOrderByWithAggregationInput | assignmentsOrderByWithAggregationInput[]
    by: AssignmentsScalarFieldEnum[] | AssignmentsScalarFieldEnum
    having?: assignmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssignmentsCountAggregateInputType | true
    _min?: AssignmentsMinAggregateInputType
    _max?: AssignmentsMaxAggregateInputType
  }

  export type AssignmentsGroupByOutputType = {
    id: string
    tenant_id: string
    class_id: string
    title: string
    description: string | null
    deadline: Date | null
    created_at: Date | null
    updated_at: Date | null
    _count: AssignmentsCountAggregateOutputType | null
    _min: AssignmentsMinAggregateOutputType | null
    _max: AssignmentsMaxAggregateOutputType | null
  }

  type GetAssignmentsGroupByPayload<T extends assignmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssignmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssignmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssignmentsGroupByOutputType[P]>
            : GetScalarType<T[P], AssignmentsGroupByOutputType[P]>
        }
      >
    >


  export type assignmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    class_id?: boolean
    title?: boolean
    description?: boolean
    deadline?: boolean
    created_at?: boolean
    updated_at?: boolean
    submissions?: boolean | assignments$submissionsArgs<ExtArgs>
    _count?: boolean | AssignmentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignments"]>

  export type assignmentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    class_id?: boolean
    title?: boolean
    description?: boolean
    deadline?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["assignments"]>

  export type assignmentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    class_id?: boolean
    title?: boolean
    description?: boolean
    deadline?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["assignments"]>

  export type assignmentsSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    class_id?: boolean
    title?: boolean
    description?: boolean
    deadline?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type assignmentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenant_id" | "class_id" | "title" | "description" | "deadline" | "created_at" | "updated_at", ExtArgs["result"]["assignments"]>
  export type assignmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | assignments$submissionsArgs<ExtArgs>
    _count?: boolean | AssignmentsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type assignmentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type assignmentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $assignmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "assignments"
    objects: {
      submissions: Prisma.$submissionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      class_id: string
      title: string
      description: string | null
      deadline: Date | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["assignments"]>
    composites: {}
  }

  type assignmentsGetPayload<S extends boolean | null | undefined | assignmentsDefaultArgs> = $Result.GetResult<Prisma.$assignmentsPayload, S>

  type assignmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<assignmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssignmentsCountAggregateInputType | true
    }

  export interface assignmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['assignments'], meta: { name: 'assignments' } }
    /**
     * Find zero or one Assignments that matches the filter.
     * @param {assignmentsFindUniqueArgs} args - Arguments to find a Assignments
     * @example
     * // Get one Assignments
     * const assignments = await prisma.assignments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends assignmentsFindUniqueArgs>(args: SelectSubset<T, assignmentsFindUniqueArgs<ExtArgs>>): Prisma__assignmentsClient<$Result.GetResult<Prisma.$assignmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Assignments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {assignmentsFindUniqueOrThrowArgs} args - Arguments to find a Assignments
     * @example
     * // Get one Assignments
     * const assignments = await prisma.assignments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends assignmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, assignmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__assignmentsClient<$Result.GetResult<Prisma.$assignmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assignmentsFindFirstArgs} args - Arguments to find a Assignments
     * @example
     * // Get one Assignments
     * const assignments = await prisma.assignments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends assignmentsFindFirstArgs>(args?: SelectSubset<T, assignmentsFindFirstArgs<ExtArgs>>): Prisma__assignmentsClient<$Result.GetResult<Prisma.$assignmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assignmentsFindFirstOrThrowArgs} args - Arguments to find a Assignments
     * @example
     * // Get one Assignments
     * const assignments = await prisma.assignments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends assignmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, assignmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__assignmentsClient<$Result.GetResult<Prisma.$assignmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assignmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assignments
     * const assignments = await prisma.assignments.findMany()
     * 
     * // Get first 10 Assignments
     * const assignments = await prisma.assignments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assignmentsWithIdOnly = await prisma.assignments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends assignmentsFindManyArgs>(args?: SelectSubset<T, assignmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$assignmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Assignments.
     * @param {assignmentsCreateArgs} args - Arguments to create a Assignments.
     * @example
     * // Create one Assignments
     * const Assignments = await prisma.assignments.create({
     *   data: {
     *     // ... data to create a Assignments
     *   }
     * })
     * 
     */
    create<T extends assignmentsCreateArgs>(args: SelectSubset<T, assignmentsCreateArgs<ExtArgs>>): Prisma__assignmentsClient<$Result.GetResult<Prisma.$assignmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assignments.
     * @param {assignmentsCreateManyArgs} args - Arguments to create many Assignments.
     * @example
     * // Create many Assignments
     * const assignments = await prisma.assignments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends assignmentsCreateManyArgs>(args?: SelectSubset<T, assignmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assignments and returns the data saved in the database.
     * @param {assignmentsCreateManyAndReturnArgs} args - Arguments to create many Assignments.
     * @example
     * // Create many Assignments
     * const assignments = await prisma.assignments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assignments and only return the `id`
     * const assignmentsWithIdOnly = await prisma.assignments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends assignmentsCreateManyAndReturnArgs>(args?: SelectSubset<T, assignmentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$assignmentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Assignments.
     * @param {assignmentsDeleteArgs} args - Arguments to delete one Assignments.
     * @example
     * // Delete one Assignments
     * const Assignments = await prisma.assignments.delete({
     *   where: {
     *     // ... filter to delete one Assignments
     *   }
     * })
     * 
     */
    delete<T extends assignmentsDeleteArgs>(args: SelectSubset<T, assignmentsDeleteArgs<ExtArgs>>): Prisma__assignmentsClient<$Result.GetResult<Prisma.$assignmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Assignments.
     * @param {assignmentsUpdateArgs} args - Arguments to update one Assignments.
     * @example
     * // Update one Assignments
     * const assignments = await prisma.assignments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends assignmentsUpdateArgs>(args: SelectSubset<T, assignmentsUpdateArgs<ExtArgs>>): Prisma__assignmentsClient<$Result.GetResult<Prisma.$assignmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assignments.
     * @param {assignmentsDeleteManyArgs} args - Arguments to filter Assignments to delete.
     * @example
     * // Delete a few Assignments
     * const { count } = await prisma.assignments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends assignmentsDeleteManyArgs>(args?: SelectSubset<T, assignmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assignmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assignments
     * const assignments = await prisma.assignments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends assignmentsUpdateManyArgs>(args: SelectSubset<T, assignmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignments and returns the data updated in the database.
     * @param {assignmentsUpdateManyAndReturnArgs} args - Arguments to update many Assignments.
     * @example
     * // Update many Assignments
     * const assignments = await prisma.assignments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Assignments and only return the `id`
     * const assignmentsWithIdOnly = await prisma.assignments.updateManyAndReturn({
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
    updateManyAndReturn<T extends assignmentsUpdateManyAndReturnArgs>(args: SelectSubset<T, assignmentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$assignmentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Assignments.
     * @param {assignmentsUpsertArgs} args - Arguments to update or create a Assignments.
     * @example
     * // Update or create a Assignments
     * const assignments = await prisma.assignments.upsert({
     *   create: {
     *     // ... data to create a Assignments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assignments we want to update
     *   }
     * })
     */
    upsert<T extends assignmentsUpsertArgs>(args: SelectSubset<T, assignmentsUpsertArgs<ExtArgs>>): Prisma__assignmentsClient<$Result.GetResult<Prisma.$assignmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assignmentsCountArgs} args - Arguments to filter Assignments to count.
     * @example
     * // Count the number of Assignments
     * const count = await prisma.assignments.count({
     *   where: {
     *     // ... the filter for the Assignments we want to count
     *   }
     * })
    **/
    count<T extends assignmentsCountArgs>(
      args?: Subset<T, assignmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssignmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssignmentsAggregateArgs>(args: Subset<T, AssignmentsAggregateArgs>): Prisma.PrismaPromise<GetAssignmentsAggregateType<T>>

    /**
     * Group by Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assignmentsGroupByArgs} args - Group by arguments.
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
      T extends assignmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: assignmentsGroupByArgs['orderBy'] }
        : { orderBy?: assignmentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, assignmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the assignments model
   */
  readonly fields: assignmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for assignments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__assignmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submissions<T extends assignments$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, assignments$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the assignments model
   */
  interface assignmentsFieldRefs {
    readonly id: FieldRef<"assignments", 'String'>
    readonly tenant_id: FieldRef<"assignments", 'String'>
    readonly class_id: FieldRef<"assignments", 'String'>
    readonly title: FieldRef<"assignments", 'String'>
    readonly description: FieldRef<"assignments", 'String'>
    readonly deadline: FieldRef<"assignments", 'DateTime'>
    readonly created_at: FieldRef<"assignments", 'DateTime'>
    readonly updated_at: FieldRef<"assignments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * assignments findUnique
   */
  export type assignmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignments
     */
    select?: assignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignments
     */
    omit?: assignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentsInclude<ExtArgs> | null
    /**
     * Filter, which assignments to fetch.
     */
    where: assignmentsWhereUniqueInput
  }

  /**
   * assignments findUniqueOrThrow
   */
  export type assignmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignments
     */
    select?: assignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignments
     */
    omit?: assignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentsInclude<ExtArgs> | null
    /**
     * Filter, which assignments to fetch.
     */
    where: assignmentsWhereUniqueInput
  }

  /**
   * assignments findFirst
   */
  export type assignmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignments
     */
    select?: assignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignments
     */
    omit?: assignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentsInclude<ExtArgs> | null
    /**
     * Filter, which assignments to fetch.
     */
    where?: assignmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of assignments to fetch.
     */
    orderBy?: assignmentsOrderByWithRelationInput | assignmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for assignments.
     */
    cursor?: assignmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of assignments.
     */
    distinct?: AssignmentsScalarFieldEnum | AssignmentsScalarFieldEnum[]
  }

  /**
   * assignments findFirstOrThrow
   */
  export type assignmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignments
     */
    select?: assignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignments
     */
    omit?: assignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentsInclude<ExtArgs> | null
    /**
     * Filter, which assignments to fetch.
     */
    where?: assignmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of assignments to fetch.
     */
    orderBy?: assignmentsOrderByWithRelationInput | assignmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for assignments.
     */
    cursor?: assignmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of assignments.
     */
    distinct?: AssignmentsScalarFieldEnum | AssignmentsScalarFieldEnum[]
  }

  /**
   * assignments findMany
   */
  export type assignmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignments
     */
    select?: assignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignments
     */
    omit?: assignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentsInclude<ExtArgs> | null
    /**
     * Filter, which assignments to fetch.
     */
    where?: assignmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of assignments to fetch.
     */
    orderBy?: assignmentsOrderByWithRelationInput | assignmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing assignments.
     */
    cursor?: assignmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` assignments.
     */
    skip?: number
    distinct?: AssignmentsScalarFieldEnum | AssignmentsScalarFieldEnum[]
  }

  /**
   * assignments create
   */
  export type assignmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignments
     */
    select?: assignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignments
     */
    omit?: assignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a assignments.
     */
    data: XOR<assignmentsCreateInput, assignmentsUncheckedCreateInput>
  }

  /**
   * assignments createMany
   */
  export type assignmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many assignments.
     */
    data: assignmentsCreateManyInput | assignmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * assignments createManyAndReturn
   */
  export type assignmentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignments
     */
    select?: assignmentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the assignments
     */
    omit?: assignmentsOmit<ExtArgs> | null
    /**
     * The data used to create many assignments.
     */
    data: assignmentsCreateManyInput | assignmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * assignments update
   */
  export type assignmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignments
     */
    select?: assignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignments
     */
    omit?: assignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a assignments.
     */
    data: XOR<assignmentsUpdateInput, assignmentsUncheckedUpdateInput>
    /**
     * Choose, which assignments to update.
     */
    where: assignmentsWhereUniqueInput
  }

  /**
   * assignments updateMany
   */
  export type assignmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update assignments.
     */
    data: XOR<assignmentsUpdateManyMutationInput, assignmentsUncheckedUpdateManyInput>
    /**
     * Filter which assignments to update
     */
    where?: assignmentsWhereInput
    /**
     * Limit how many assignments to update.
     */
    limit?: number
  }

  /**
   * assignments updateManyAndReturn
   */
  export type assignmentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignments
     */
    select?: assignmentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the assignments
     */
    omit?: assignmentsOmit<ExtArgs> | null
    /**
     * The data used to update assignments.
     */
    data: XOR<assignmentsUpdateManyMutationInput, assignmentsUncheckedUpdateManyInput>
    /**
     * Filter which assignments to update
     */
    where?: assignmentsWhereInput
    /**
     * Limit how many assignments to update.
     */
    limit?: number
  }

  /**
   * assignments upsert
   */
  export type assignmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignments
     */
    select?: assignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignments
     */
    omit?: assignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the assignments to update in case it exists.
     */
    where: assignmentsWhereUniqueInput
    /**
     * In case the assignments found by the `where` argument doesn't exist, create a new assignments with this data.
     */
    create: XOR<assignmentsCreateInput, assignmentsUncheckedCreateInput>
    /**
     * In case the assignments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<assignmentsUpdateInput, assignmentsUncheckedUpdateInput>
  }

  /**
   * assignments delete
   */
  export type assignmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignments
     */
    select?: assignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignments
     */
    omit?: assignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentsInclude<ExtArgs> | null
    /**
     * Filter which assignments to delete.
     */
    where: assignmentsWhereUniqueInput
  }

  /**
   * assignments deleteMany
   */
  export type assignmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which assignments to delete
     */
    where?: assignmentsWhereInput
    /**
     * Limit how many assignments to delete.
     */
    limit?: number
  }

  /**
   * assignments.submissions
   */
  export type assignments$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
    where?: submissionsWhereInput
    orderBy?: submissionsOrderByWithRelationInput | submissionsOrderByWithRelationInput[]
    cursor?: submissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionsScalarFieldEnum | SubmissionsScalarFieldEnum[]
  }

  /**
   * assignments without action
   */
  export type assignmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignments
     */
    select?: assignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignments
     */
    omit?: assignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentsInclude<ExtArgs> | null
  }


  /**
   * Model discussions
   */

  export type AggregateDiscussions = {
    _count: DiscussionsCountAggregateOutputType | null
    _min: DiscussionsMinAggregateOutputType | null
    _max: DiscussionsMaxAggregateOutputType | null
  }

  export type DiscussionsMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    class_id: string | null
    user_id: string | null
    user_email: string | null
    content: string | null
    created_at: Date | null
  }

  export type DiscussionsMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    class_id: string | null
    user_id: string | null
    user_email: string | null
    content: string | null
    created_at: Date | null
  }

  export type DiscussionsCountAggregateOutputType = {
    id: number
    tenant_id: number
    class_id: number
    user_id: number
    user_email: number
    content: number
    created_at: number
    _all: number
  }


  export type DiscussionsMinAggregateInputType = {
    id?: true
    tenant_id?: true
    class_id?: true
    user_id?: true
    user_email?: true
    content?: true
    created_at?: true
  }

  export type DiscussionsMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    class_id?: true
    user_id?: true
    user_email?: true
    content?: true
    created_at?: true
  }

  export type DiscussionsCountAggregateInputType = {
    id?: true
    tenant_id?: true
    class_id?: true
    user_id?: true
    user_email?: true
    content?: true
    created_at?: true
    _all?: true
  }

  export type DiscussionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which discussions to aggregate.
     */
    where?: discussionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of discussions to fetch.
     */
    orderBy?: discussionsOrderByWithRelationInput | discussionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: discussionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` discussions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` discussions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned discussions
    **/
    _count?: true | DiscussionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiscussionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiscussionsMaxAggregateInputType
  }

  export type GetDiscussionsAggregateType<T extends DiscussionsAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscussions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscussions[P]>
      : GetScalarType<T[P], AggregateDiscussions[P]>
  }




  export type discussionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: discussionsWhereInput
    orderBy?: discussionsOrderByWithAggregationInput | discussionsOrderByWithAggregationInput[]
    by: DiscussionsScalarFieldEnum[] | DiscussionsScalarFieldEnum
    having?: discussionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiscussionsCountAggregateInputType | true
    _min?: DiscussionsMinAggregateInputType
    _max?: DiscussionsMaxAggregateInputType
  }

  export type DiscussionsGroupByOutputType = {
    id: string
    tenant_id: string
    class_id: string
    user_id: string
    user_email: string | null
    content: string
    created_at: Date | null
    _count: DiscussionsCountAggregateOutputType | null
    _min: DiscussionsMinAggregateOutputType | null
    _max: DiscussionsMaxAggregateOutputType | null
  }

  type GetDiscussionsGroupByPayload<T extends discussionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiscussionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiscussionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiscussionsGroupByOutputType[P]>
            : GetScalarType<T[P], DiscussionsGroupByOutputType[P]>
        }
      >
    >


  export type discussionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    class_id?: boolean
    user_id?: boolean
    user_email?: boolean
    content?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["discussions"]>

  export type discussionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    class_id?: boolean
    user_id?: boolean
    user_email?: boolean
    content?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["discussions"]>

  export type discussionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    class_id?: boolean
    user_id?: boolean
    user_email?: boolean
    content?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["discussions"]>

  export type discussionsSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    class_id?: boolean
    user_id?: boolean
    user_email?: boolean
    content?: boolean
    created_at?: boolean
  }

  export type discussionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenant_id" | "class_id" | "user_id" | "user_email" | "content" | "created_at", ExtArgs["result"]["discussions"]>

  export type $discussionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "discussions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      class_id: string
      user_id: string
      user_email: string | null
      content: string
      created_at: Date | null
    }, ExtArgs["result"]["discussions"]>
    composites: {}
  }

  type discussionsGetPayload<S extends boolean | null | undefined | discussionsDefaultArgs> = $Result.GetResult<Prisma.$discussionsPayload, S>

  type discussionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<discussionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiscussionsCountAggregateInputType | true
    }

  export interface discussionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['discussions'], meta: { name: 'discussions' } }
    /**
     * Find zero or one Discussions that matches the filter.
     * @param {discussionsFindUniqueArgs} args - Arguments to find a Discussions
     * @example
     * // Get one Discussions
     * const discussions = await prisma.discussions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends discussionsFindUniqueArgs>(args: SelectSubset<T, discussionsFindUniqueArgs<ExtArgs>>): Prisma__discussionsClient<$Result.GetResult<Prisma.$discussionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Discussions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {discussionsFindUniqueOrThrowArgs} args - Arguments to find a Discussions
     * @example
     * // Get one Discussions
     * const discussions = await prisma.discussions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends discussionsFindUniqueOrThrowArgs>(args: SelectSubset<T, discussionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__discussionsClient<$Result.GetResult<Prisma.$discussionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Discussions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {discussionsFindFirstArgs} args - Arguments to find a Discussions
     * @example
     * // Get one Discussions
     * const discussions = await prisma.discussions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends discussionsFindFirstArgs>(args?: SelectSubset<T, discussionsFindFirstArgs<ExtArgs>>): Prisma__discussionsClient<$Result.GetResult<Prisma.$discussionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Discussions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {discussionsFindFirstOrThrowArgs} args - Arguments to find a Discussions
     * @example
     * // Get one Discussions
     * const discussions = await prisma.discussions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends discussionsFindFirstOrThrowArgs>(args?: SelectSubset<T, discussionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__discussionsClient<$Result.GetResult<Prisma.$discussionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Discussions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {discussionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Discussions
     * const discussions = await prisma.discussions.findMany()
     * 
     * // Get first 10 Discussions
     * const discussions = await prisma.discussions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const discussionsWithIdOnly = await prisma.discussions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends discussionsFindManyArgs>(args?: SelectSubset<T, discussionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$discussionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Discussions.
     * @param {discussionsCreateArgs} args - Arguments to create a Discussions.
     * @example
     * // Create one Discussions
     * const Discussions = await prisma.discussions.create({
     *   data: {
     *     // ... data to create a Discussions
     *   }
     * })
     * 
     */
    create<T extends discussionsCreateArgs>(args: SelectSubset<T, discussionsCreateArgs<ExtArgs>>): Prisma__discussionsClient<$Result.GetResult<Prisma.$discussionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Discussions.
     * @param {discussionsCreateManyArgs} args - Arguments to create many Discussions.
     * @example
     * // Create many Discussions
     * const discussions = await prisma.discussions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends discussionsCreateManyArgs>(args?: SelectSubset<T, discussionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Discussions and returns the data saved in the database.
     * @param {discussionsCreateManyAndReturnArgs} args - Arguments to create many Discussions.
     * @example
     * // Create many Discussions
     * const discussions = await prisma.discussions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Discussions and only return the `id`
     * const discussionsWithIdOnly = await prisma.discussions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends discussionsCreateManyAndReturnArgs>(args?: SelectSubset<T, discussionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$discussionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Discussions.
     * @param {discussionsDeleteArgs} args - Arguments to delete one Discussions.
     * @example
     * // Delete one Discussions
     * const Discussions = await prisma.discussions.delete({
     *   where: {
     *     // ... filter to delete one Discussions
     *   }
     * })
     * 
     */
    delete<T extends discussionsDeleteArgs>(args: SelectSubset<T, discussionsDeleteArgs<ExtArgs>>): Prisma__discussionsClient<$Result.GetResult<Prisma.$discussionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Discussions.
     * @param {discussionsUpdateArgs} args - Arguments to update one Discussions.
     * @example
     * // Update one Discussions
     * const discussions = await prisma.discussions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends discussionsUpdateArgs>(args: SelectSubset<T, discussionsUpdateArgs<ExtArgs>>): Prisma__discussionsClient<$Result.GetResult<Prisma.$discussionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Discussions.
     * @param {discussionsDeleteManyArgs} args - Arguments to filter Discussions to delete.
     * @example
     * // Delete a few Discussions
     * const { count } = await prisma.discussions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends discussionsDeleteManyArgs>(args?: SelectSubset<T, discussionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Discussions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {discussionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Discussions
     * const discussions = await prisma.discussions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends discussionsUpdateManyArgs>(args: SelectSubset<T, discussionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Discussions and returns the data updated in the database.
     * @param {discussionsUpdateManyAndReturnArgs} args - Arguments to update many Discussions.
     * @example
     * // Update many Discussions
     * const discussions = await prisma.discussions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Discussions and only return the `id`
     * const discussionsWithIdOnly = await prisma.discussions.updateManyAndReturn({
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
    updateManyAndReturn<T extends discussionsUpdateManyAndReturnArgs>(args: SelectSubset<T, discussionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$discussionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Discussions.
     * @param {discussionsUpsertArgs} args - Arguments to update or create a Discussions.
     * @example
     * // Update or create a Discussions
     * const discussions = await prisma.discussions.upsert({
     *   create: {
     *     // ... data to create a Discussions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Discussions we want to update
     *   }
     * })
     */
    upsert<T extends discussionsUpsertArgs>(args: SelectSubset<T, discussionsUpsertArgs<ExtArgs>>): Prisma__discussionsClient<$Result.GetResult<Prisma.$discussionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Discussions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {discussionsCountArgs} args - Arguments to filter Discussions to count.
     * @example
     * // Count the number of Discussions
     * const count = await prisma.discussions.count({
     *   where: {
     *     // ... the filter for the Discussions we want to count
     *   }
     * })
    **/
    count<T extends discussionsCountArgs>(
      args?: Subset<T, discussionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiscussionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Discussions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiscussionsAggregateArgs>(args: Subset<T, DiscussionsAggregateArgs>): Prisma.PrismaPromise<GetDiscussionsAggregateType<T>>

    /**
     * Group by Discussions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {discussionsGroupByArgs} args - Group by arguments.
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
      T extends discussionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: discussionsGroupByArgs['orderBy'] }
        : { orderBy?: discussionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, discussionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiscussionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the discussions model
   */
  readonly fields: discussionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for discussions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__discussionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the discussions model
   */
  interface discussionsFieldRefs {
    readonly id: FieldRef<"discussions", 'String'>
    readonly tenant_id: FieldRef<"discussions", 'String'>
    readonly class_id: FieldRef<"discussions", 'String'>
    readonly user_id: FieldRef<"discussions", 'String'>
    readonly user_email: FieldRef<"discussions", 'String'>
    readonly content: FieldRef<"discussions", 'String'>
    readonly created_at: FieldRef<"discussions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * discussions findUnique
   */
  export type discussionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discussions
     */
    select?: discussionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the discussions
     */
    omit?: discussionsOmit<ExtArgs> | null
    /**
     * Filter, which discussions to fetch.
     */
    where: discussionsWhereUniqueInput
  }

  /**
   * discussions findUniqueOrThrow
   */
  export type discussionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discussions
     */
    select?: discussionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the discussions
     */
    omit?: discussionsOmit<ExtArgs> | null
    /**
     * Filter, which discussions to fetch.
     */
    where: discussionsWhereUniqueInput
  }

  /**
   * discussions findFirst
   */
  export type discussionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discussions
     */
    select?: discussionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the discussions
     */
    omit?: discussionsOmit<ExtArgs> | null
    /**
     * Filter, which discussions to fetch.
     */
    where?: discussionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of discussions to fetch.
     */
    orderBy?: discussionsOrderByWithRelationInput | discussionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for discussions.
     */
    cursor?: discussionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` discussions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` discussions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of discussions.
     */
    distinct?: DiscussionsScalarFieldEnum | DiscussionsScalarFieldEnum[]
  }

  /**
   * discussions findFirstOrThrow
   */
  export type discussionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discussions
     */
    select?: discussionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the discussions
     */
    omit?: discussionsOmit<ExtArgs> | null
    /**
     * Filter, which discussions to fetch.
     */
    where?: discussionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of discussions to fetch.
     */
    orderBy?: discussionsOrderByWithRelationInput | discussionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for discussions.
     */
    cursor?: discussionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` discussions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` discussions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of discussions.
     */
    distinct?: DiscussionsScalarFieldEnum | DiscussionsScalarFieldEnum[]
  }

  /**
   * discussions findMany
   */
  export type discussionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discussions
     */
    select?: discussionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the discussions
     */
    omit?: discussionsOmit<ExtArgs> | null
    /**
     * Filter, which discussions to fetch.
     */
    where?: discussionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of discussions to fetch.
     */
    orderBy?: discussionsOrderByWithRelationInput | discussionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing discussions.
     */
    cursor?: discussionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` discussions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` discussions.
     */
    skip?: number
    distinct?: DiscussionsScalarFieldEnum | DiscussionsScalarFieldEnum[]
  }

  /**
   * discussions create
   */
  export type discussionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discussions
     */
    select?: discussionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the discussions
     */
    omit?: discussionsOmit<ExtArgs> | null
    /**
     * The data needed to create a discussions.
     */
    data: XOR<discussionsCreateInput, discussionsUncheckedCreateInput>
  }

  /**
   * discussions createMany
   */
  export type discussionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many discussions.
     */
    data: discussionsCreateManyInput | discussionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * discussions createManyAndReturn
   */
  export type discussionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discussions
     */
    select?: discussionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the discussions
     */
    omit?: discussionsOmit<ExtArgs> | null
    /**
     * The data used to create many discussions.
     */
    data: discussionsCreateManyInput | discussionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * discussions update
   */
  export type discussionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discussions
     */
    select?: discussionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the discussions
     */
    omit?: discussionsOmit<ExtArgs> | null
    /**
     * The data needed to update a discussions.
     */
    data: XOR<discussionsUpdateInput, discussionsUncheckedUpdateInput>
    /**
     * Choose, which discussions to update.
     */
    where: discussionsWhereUniqueInput
  }

  /**
   * discussions updateMany
   */
  export type discussionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update discussions.
     */
    data: XOR<discussionsUpdateManyMutationInput, discussionsUncheckedUpdateManyInput>
    /**
     * Filter which discussions to update
     */
    where?: discussionsWhereInput
    /**
     * Limit how many discussions to update.
     */
    limit?: number
  }

  /**
   * discussions updateManyAndReturn
   */
  export type discussionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discussions
     */
    select?: discussionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the discussions
     */
    omit?: discussionsOmit<ExtArgs> | null
    /**
     * The data used to update discussions.
     */
    data: XOR<discussionsUpdateManyMutationInput, discussionsUncheckedUpdateManyInput>
    /**
     * Filter which discussions to update
     */
    where?: discussionsWhereInput
    /**
     * Limit how many discussions to update.
     */
    limit?: number
  }

  /**
   * discussions upsert
   */
  export type discussionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discussions
     */
    select?: discussionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the discussions
     */
    omit?: discussionsOmit<ExtArgs> | null
    /**
     * The filter to search for the discussions to update in case it exists.
     */
    where: discussionsWhereUniqueInput
    /**
     * In case the discussions found by the `where` argument doesn't exist, create a new discussions with this data.
     */
    create: XOR<discussionsCreateInput, discussionsUncheckedCreateInput>
    /**
     * In case the discussions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<discussionsUpdateInput, discussionsUncheckedUpdateInput>
  }

  /**
   * discussions delete
   */
  export type discussionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discussions
     */
    select?: discussionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the discussions
     */
    omit?: discussionsOmit<ExtArgs> | null
    /**
     * Filter which discussions to delete.
     */
    where: discussionsWhereUniqueInput
  }

  /**
   * discussions deleteMany
   */
  export type discussionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which discussions to delete
     */
    where?: discussionsWhereInput
    /**
     * Limit how many discussions to delete.
     */
    limit?: number
  }

  /**
   * discussions without action
   */
  export type discussionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discussions
     */
    select?: discussionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the discussions
     */
    omit?: discussionsOmit<ExtArgs> | null
  }


  /**
   * Model materials
   */

  export type AggregateMaterials = {
    _count: MaterialsCountAggregateOutputType | null
    _min: MaterialsMinAggregateOutputType | null
    _max: MaterialsMaxAggregateOutputType | null
  }

  export type MaterialsMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    class_id: string | null
    title: string | null
    content: string | null
    type: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MaterialsMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    class_id: string | null
    title: string | null
    content: string | null
    type: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MaterialsCountAggregateOutputType = {
    id: number
    tenant_id: number
    class_id: number
    title: number
    content: number
    type: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type MaterialsMinAggregateInputType = {
    id?: true
    tenant_id?: true
    class_id?: true
    title?: true
    content?: true
    type?: true
    created_at?: true
    updated_at?: true
  }

  export type MaterialsMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    class_id?: true
    title?: true
    content?: true
    type?: true
    created_at?: true
    updated_at?: true
  }

  export type MaterialsCountAggregateInputType = {
    id?: true
    tenant_id?: true
    class_id?: true
    title?: true
    content?: true
    type?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type MaterialsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which materials to aggregate.
     */
    where?: materialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of materials to fetch.
     */
    orderBy?: materialsOrderByWithRelationInput | materialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: materialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned materials
    **/
    _count?: true | MaterialsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaterialsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaterialsMaxAggregateInputType
  }

  export type GetMaterialsAggregateType<T extends MaterialsAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterials]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterials[P]>
      : GetScalarType<T[P], AggregateMaterials[P]>
  }




  export type materialsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: materialsWhereInput
    orderBy?: materialsOrderByWithAggregationInput | materialsOrderByWithAggregationInput[]
    by: MaterialsScalarFieldEnum[] | MaterialsScalarFieldEnum
    having?: materialsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaterialsCountAggregateInputType | true
    _min?: MaterialsMinAggregateInputType
    _max?: MaterialsMaxAggregateInputType
  }

  export type MaterialsGroupByOutputType = {
    id: string
    tenant_id: string
    class_id: string
    title: string
    content: string | null
    type: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: MaterialsCountAggregateOutputType | null
    _min: MaterialsMinAggregateOutputType | null
    _max: MaterialsMaxAggregateOutputType | null
  }

  type GetMaterialsGroupByPayload<T extends materialsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaterialsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaterialsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaterialsGroupByOutputType[P]>
            : GetScalarType<T[P], MaterialsGroupByOutputType[P]>
        }
      >
    >


  export type materialsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    class_id?: boolean
    title?: boolean
    content?: boolean
    type?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["materials"]>

  export type materialsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    class_id?: boolean
    title?: boolean
    content?: boolean
    type?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["materials"]>

  export type materialsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    class_id?: boolean
    title?: boolean
    content?: boolean
    type?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["materials"]>

  export type materialsSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    class_id?: boolean
    title?: boolean
    content?: boolean
    type?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type materialsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenant_id" | "class_id" | "title" | "content" | "type" | "created_at" | "updated_at", ExtArgs["result"]["materials"]>

  export type $materialsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "materials"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      class_id: string
      title: string
      content: string | null
      type: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["materials"]>
    composites: {}
  }

  type materialsGetPayload<S extends boolean | null | undefined | materialsDefaultArgs> = $Result.GetResult<Prisma.$materialsPayload, S>

  type materialsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<materialsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaterialsCountAggregateInputType | true
    }

  export interface materialsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['materials'], meta: { name: 'materials' } }
    /**
     * Find zero or one Materials that matches the filter.
     * @param {materialsFindUniqueArgs} args - Arguments to find a Materials
     * @example
     * // Get one Materials
     * const materials = await prisma.materials.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends materialsFindUniqueArgs>(args: SelectSubset<T, materialsFindUniqueArgs<ExtArgs>>): Prisma__materialsClient<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Materials that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {materialsFindUniqueOrThrowArgs} args - Arguments to find a Materials
     * @example
     * // Get one Materials
     * const materials = await prisma.materials.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends materialsFindUniqueOrThrowArgs>(args: SelectSubset<T, materialsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__materialsClient<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materialsFindFirstArgs} args - Arguments to find a Materials
     * @example
     * // Get one Materials
     * const materials = await prisma.materials.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends materialsFindFirstArgs>(args?: SelectSubset<T, materialsFindFirstArgs<ExtArgs>>): Prisma__materialsClient<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materials that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materialsFindFirstOrThrowArgs} args - Arguments to find a Materials
     * @example
     * // Get one Materials
     * const materials = await prisma.materials.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends materialsFindFirstOrThrowArgs>(args?: SelectSubset<T, materialsFindFirstOrThrowArgs<ExtArgs>>): Prisma__materialsClient<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materialsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materials
     * const materials = await prisma.materials.findMany()
     * 
     * // Get first 10 Materials
     * const materials = await prisma.materials.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materialsWithIdOnly = await prisma.materials.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends materialsFindManyArgs>(args?: SelectSubset<T, materialsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Materials.
     * @param {materialsCreateArgs} args - Arguments to create a Materials.
     * @example
     * // Create one Materials
     * const Materials = await prisma.materials.create({
     *   data: {
     *     // ... data to create a Materials
     *   }
     * })
     * 
     */
    create<T extends materialsCreateArgs>(args: SelectSubset<T, materialsCreateArgs<ExtArgs>>): Prisma__materialsClient<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Materials.
     * @param {materialsCreateManyArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const materials = await prisma.materials.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends materialsCreateManyArgs>(args?: SelectSubset<T, materialsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Materials and returns the data saved in the database.
     * @param {materialsCreateManyAndReturnArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const materials = await prisma.materials.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Materials and only return the `id`
     * const materialsWithIdOnly = await prisma.materials.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends materialsCreateManyAndReturnArgs>(args?: SelectSubset<T, materialsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Materials.
     * @param {materialsDeleteArgs} args - Arguments to delete one Materials.
     * @example
     * // Delete one Materials
     * const Materials = await prisma.materials.delete({
     *   where: {
     *     // ... filter to delete one Materials
     *   }
     * })
     * 
     */
    delete<T extends materialsDeleteArgs>(args: SelectSubset<T, materialsDeleteArgs<ExtArgs>>): Prisma__materialsClient<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Materials.
     * @param {materialsUpdateArgs} args - Arguments to update one Materials.
     * @example
     * // Update one Materials
     * const materials = await prisma.materials.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends materialsUpdateArgs>(args: SelectSubset<T, materialsUpdateArgs<ExtArgs>>): Prisma__materialsClient<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Materials.
     * @param {materialsDeleteManyArgs} args - Arguments to filter Materials to delete.
     * @example
     * // Delete a few Materials
     * const { count } = await prisma.materials.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends materialsDeleteManyArgs>(args?: SelectSubset<T, materialsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materialsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materials
     * const materials = await prisma.materials.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends materialsUpdateManyArgs>(args: SelectSubset<T, materialsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials and returns the data updated in the database.
     * @param {materialsUpdateManyAndReturnArgs} args - Arguments to update many Materials.
     * @example
     * // Update many Materials
     * const materials = await prisma.materials.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Materials and only return the `id`
     * const materialsWithIdOnly = await prisma.materials.updateManyAndReturn({
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
    updateManyAndReturn<T extends materialsUpdateManyAndReturnArgs>(args: SelectSubset<T, materialsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Materials.
     * @param {materialsUpsertArgs} args - Arguments to update or create a Materials.
     * @example
     * // Update or create a Materials
     * const materials = await prisma.materials.upsert({
     *   create: {
     *     // ... data to create a Materials
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Materials we want to update
     *   }
     * })
     */
    upsert<T extends materialsUpsertArgs>(args: SelectSubset<T, materialsUpsertArgs<ExtArgs>>): Prisma__materialsClient<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materialsCountArgs} args - Arguments to filter Materials to count.
     * @example
     * // Count the number of Materials
     * const count = await prisma.materials.count({
     *   where: {
     *     // ... the filter for the Materials we want to count
     *   }
     * })
    **/
    count<T extends materialsCountArgs>(
      args?: Subset<T, materialsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaterialsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaterialsAggregateArgs>(args: Subset<T, MaterialsAggregateArgs>): Prisma.PrismaPromise<GetMaterialsAggregateType<T>>

    /**
     * Group by Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materialsGroupByArgs} args - Group by arguments.
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
      T extends materialsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: materialsGroupByArgs['orderBy'] }
        : { orderBy?: materialsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, materialsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the materials model
   */
  readonly fields: materialsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for materials.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__materialsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the materials model
   */
  interface materialsFieldRefs {
    readonly id: FieldRef<"materials", 'String'>
    readonly tenant_id: FieldRef<"materials", 'String'>
    readonly class_id: FieldRef<"materials", 'String'>
    readonly title: FieldRef<"materials", 'String'>
    readonly content: FieldRef<"materials", 'String'>
    readonly type: FieldRef<"materials", 'String'>
    readonly created_at: FieldRef<"materials", 'DateTime'>
    readonly updated_at: FieldRef<"materials", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * materials findUnique
   */
  export type materialsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * Filter, which materials to fetch.
     */
    where: materialsWhereUniqueInput
  }

  /**
   * materials findUniqueOrThrow
   */
  export type materialsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * Filter, which materials to fetch.
     */
    where: materialsWhereUniqueInput
  }

  /**
   * materials findFirst
   */
  export type materialsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * Filter, which materials to fetch.
     */
    where?: materialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of materials to fetch.
     */
    orderBy?: materialsOrderByWithRelationInput | materialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for materials.
     */
    cursor?: materialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of materials.
     */
    distinct?: MaterialsScalarFieldEnum | MaterialsScalarFieldEnum[]
  }

  /**
   * materials findFirstOrThrow
   */
  export type materialsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * Filter, which materials to fetch.
     */
    where?: materialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of materials to fetch.
     */
    orderBy?: materialsOrderByWithRelationInput | materialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for materials.
     */
    cursor?: materialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of materials.
     */
    distinct?: MaterialsScalarFieldEnum | MaterialsScalarFieldEnum[]
  }

  /**
   * materials findMany
   */
  export type materialsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * Filter, which materials to fetch.
     */
    where?: materialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of materials to fetch.
     */
    orderBy?: materialsOrderByWithRelationInput | materialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing materials.
     */
    cursor?: materialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` materials.
     */
    skip?: number
    distinct?: MaterialsScalarFieldEnum | MaterialsScalarFieldEnum[]
  }

  /**
   * materials create
   */
  export type materialsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * The data needed to create a materials.
     */
    data: XOR<materialsCreateInput, materialsUncheckedCreateInput>
  }

  /**
   * materials createMany
   */
  export type materialsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many materials.
     */
    data: materialsCreateManyInput | materialsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * materials createManyAndReturn
   */
  export type materialsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * The data used to create many materials.
     */
    data: materialsCreateManyInput | materialsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * materials update
   */
  export type materialsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * The data needed to update a materials.
     */
    data: XOR<materialsUpdateInput, materialsUncheckedUpdateInput>
    /**
     * Choose, which materials to update.
     */
    where: materialsWhereUniqueInput
  }

  /**
   * materials updateMany
   */
  export type materialsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update materials.
     */
    data: XOR<materialsUpdateManyMutationInput, materialsUncheckedUpdateManyInput>
    /**
     * Filter which materials to update
     */
    where?: materialsWhereInput
    /**
     * Limit how many materials to update.
     */
    limit?: number
  }

  /**
   * materials updateManyAndReturn
   */
  export type materialsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * The data used to update materials.
     */
    data: XOR<materialsUpdateManyMutationInput, materialsUncheckedUpdateManyInput>
    /**
     * Filter which materials to update
     */
    where?: materialsWhereInput
    /**
     * Limit how many materials to update.
     */
    limit?: number
  }

  /**
   * materials upsert
   */
  export type materialsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * The filter to search for the materials to update in case it exists.
     */
    where: materialsWhereUniqueInput
    /**
     * In case the materials found by the `where` argument doesn't exist, create a new materials with this data.
     */
    create: XOR<materialsCreateInput, materialsUncheckedCreateInput>
    /**
     * In case the materials was found with the provided `where` argument, update it with this data.
     */
    update: XOR<materialsUpdateInput, materialsUncheckedUpdateInput>
  }

  /**
   * materials delete
   */
  export type materialsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * Filter which materials to delete.
     */
    where: materialsWhereUniqueInput
  }

  /**
   * materials deleteMany
   */
  export type materialsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which materials to delete
     */
    where?: materialsWhereInput
    /**
     * Limit how many materials to delete.
     */
    limit?: number
  }

  /**
   * materials without action
   */
  export type materialsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
  }


  /**
   * Model messages
   */

  export type AggregateMessages = {
    _count: MessagesCountAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  export type MessagesMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    sender_id: string | null
    sender_email: string | null
    receiver_id: string | null
    content: string | null
    is_read: boolean | null
    created_at: Date | null
  }

  export type MessagesMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    sender_id: string | null
    sender_email: string | null
    receiver_id: string | null
    content: string | null
    is_read: boolean | null
    created_at: Date | null
  }

  export type MessagesCountAggregateOutputType = {
    id: number
    tenant_id: number
    sender_id: number
    sender_email: number
    receiver_id: number
    content: number
    is_read: number
    created_at: number
    _all: number
  }


  export type MessagesMinAggregateInputType = {
    id?: true
    tenant_id?: true
    sender_id?: true
    sender_email?: true
    receiver_id?: true
    content?: true
    is_read?: true
    created_at?: true
  }

  export type MessagesMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    sender_id?: true
    sender_email?: true
    receiver_id?: true
    content?: true
    is_read?: true
    created_at?: true
  }

  export type MessagesCountAggregateInputType = {
    id?: true
    tenant_id?: true
    sender_id?: true
    sender_email?: true
    receiver_id?: true
    content?: true
    is_read?: true
    created_at?: true
    _all?: true
  }

  export type MessagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to aggregate.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned messages
    **/
    _count?: true | MessagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessagesMaxAggregateInputType
  }

  export type GetMessagesAggregateType<T extends MessagesAggregateArgs> = {
        [P in keyof T & keyof AggregateMessages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessages[P]>
      : GetScalarType<T[P], AggregateMessages[P]>
  }




  export type messagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithAggregationInput | messagesOrderByWithAggregationInput[]
    by: MessagesScalarFieldEnum[] | MessagesScalarFieldEnum
    having?: messagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessagesCountAggregateInputType | true
    _min?: MessagesMinAggregateInputType
    _max?: MessagesMaxAggregateInputType
  }

  export type MessagesGroupByOutputType = {
    id: string
    tenant_id: string
    sender_id: string
    sender_email: string | null
    receiver_id: string
    content: string
    is_read: boolean | null
    created_at: Date | null
    _count: MessagesCountAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  type GetMessagesGroupByPayload<T extends messagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessagesGroupByOutputType[P]>
            : GetScalarType<T[P], MessagesGroupByOutputType[P]>
        }
      >
    >


  export type messagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    sender_id?: boolean
    sender_email?: boolean
    receiver_id?: boolean
    content?: boolean
    is_read?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["messages"]>

  export type messagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    sender_id?: boolean
    sender_email?: boolean
    receiver_id?: boolean
    content?: boolean
    is_read?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["messages"]>

  export type messagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    sender_id?: boolean
    sender_email?: boolean
    receiver_id?: boolean
    content?: boolean
    is_read?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["messages"]>

  export type messagesSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    sender_id?: boolean
    sender_email?: boolean
    receiver_id?: boolean
    content?: boolean
    is_read?: boolean
    created_at?: boolean
  }

  export type messagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenant_id" | "sender_id" | "sender_email" | "receiver_id" | "content" | "is_read" | "created_at", ExtArgs["result"]["messages"]>

  export type $messagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "messages"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      sender_id: string
      sender_email: string | null
      receiver_id: string
      content: string
      is_read: boolean | null
      created_at: Date | null
    }, ExtArgs["result"]["messages"]>
    composites: {}
  }

  type messagesGetPayload<S extends boolean | null | undefined | messagesDefaultArgs> = $Result.GetResult<Prisma.$messagesPayload, S>

  type messagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<messagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessagesCountAggregateInputType | true
    }

  export interface messagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['messages'], meta: { name: 'messages' } }
    /**
     * Find zero or one Messages that matches the filter.
     * @param {messagesFindUniqueArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends messagesFindUniqueArgs>(args: SelectSubset<T, messagesFindUniqueArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Messages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {messagesFindUniqueOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends messagesFindUniqueOrThrowArgs>(args: SelectSubset<T, messagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindFirstArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends messagesFindFirstArgs>(args?: SelectSubset<T, messagesFindFirstArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindFirstOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends messagesFindFirstOrThrowArgs>(args?: SelectSubset<T, messagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.messages.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.messages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messagesWithIdOnly = await prisma.messages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends messagesFindManyArgs>(args?: SelectSubset<T, messagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Messages.
     * @param {messagesCreateArgs} args - Arguments to create a Messages.
     * @example
     * // Create one Messages
     * const Messages = await prisma.messages.create({
     *   data: {
     *     // ... data to create a Messages
     *   }
     * })
     * 
     */
    create<T extends messagesCreateArgs>(args: SelectSubset<T, messagesCreateArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {messagesCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends messagesCreateManyArgs>(args?: SelectSubset<T, messagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {messagesCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends messagesCreateManyAndReturnArgs>(args?: SelectSubset<T, messagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Messages.
     * @param {messagesDeleteArgs} args - Arguments to delete one Messages.
     * @example
     * // Delete one Messages
     * const Messages = await prisma.messages.delete({
     *   where: {
     *     // ... filter to delete one Messages
     *   }
     * })
     * 
     */
    delete<T extends messagesDeleteArgs>(args: SelectSubset<T, messagesDeleteArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Messages.
     * @param {messagesUpdateArgs} args - Arguments to update one Messages.
     * @example
     * // Update one Messages
     * const messages = await prisma.messages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends messagesUpdateArgs>(args: SelectSubset<T, messagesUpdateArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {messagesDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.messages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends messagesDeleteManyArgs>(args?: SelectSubset<T, messagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends messagesUpdateManyArgs>(args: SelectSubset<T, messagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {messagesUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.updateManyAndReturn({
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
    updateManyAndReturn<T extends messagesUpdateManyAndReturnArgs>(args: SelectSubset<T, messagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Messages.
     * @param {messagesUpsertArgs} args - Arguments to update or create a Messages.
     * @example
     * // Update or create a Messages
     * const messages = await prisma.messages.upsert({
     *   create: {
     *     // ... data to create a Messages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Messages we want to update
     *   }
     * })
     */
    upsert<T extends messagesUpsertArgs>(args: SelectSubset<T, messagesUpsertArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.messages.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends messagesCountArgs>(
      args?: Subset<T, messagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessagesAggregateArgs>(args: Subset<T, MessagesAggregateArgs>): Prisma.PrismaPromise<GetMessagesAggregateType<T>>

    /**
     * Group by Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesGroupByArgs} args - Group by arguments.
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
      T extends messagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: messagesGroupByArgs['orderBy'] }
        : { orderBy?: messagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, messagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the messages model
   */
  readonly fields: messagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for messages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__messagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the messages model
   */
  interface messagesFieldRefs {
    readonly id: FieldRef<"messages", 'String'>
    readonly tenant_id: FieldRef<"messages", 'String'>
    readonly sender_id: FieldRef<"messages", 'String'>
    readonly sender_email: FieldRef<"messages", 'String'>
    readonly receiver_id: FieldRef<"messages", 'String'>
    readonly content: FieldRef<"messages", 'String'>
    readonly is_read: FieldRef<"messages", 'Boolean'>
    readonly created_at: FieldRef<"messages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * messages findUnique
   */
  export type messagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages findUniqueOrThrow
   */
  export type messagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages findFirst
   */
  export type messagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages findFirstOrThrow
   */
  export type messagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages findMany
   */
  export type messagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages create
   */
  export type messagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * The data needed to create a messages.
     */
    data: XOR<messagesCreateInput, messagesUncheckedCreateInput>
  }

  /**
   * messages createMany
   */
  export type messagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many messages.
     */
    data: messagesCreateManyInput | messagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * messages createManyAndReturn
   */
  export type messagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * The data used to create many messages.
     */
    data: messagesCreateManyInput | messagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * messages update
   */
  export type messagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * The data needed to update a messages.
     */
    data: XOR<messagesUpdateInput, messagesUncheckedUpdateInput>
    /**
     * Choose, which messages to update.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages updateMany
   */
  export type messagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update messages.
     */
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyInput>
    /**
     * Filter which messages to update
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to update.
     */
    limit?: number
  }

  /**
   * messages updateManyAndReturn
   */
  export type messagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * The data used to update messages.
     */
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyInput>
    /**
     * Filter which messages to update
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to update.
     */
    limit?: number
  }

  /**
   * messages upsert
   */
  export type messagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * The filter to search for the messages to update in case it exists.
     */
    where: messagesWhereUniqueInput
    /**
     * In case the messages found by the `where` argument doesn't exist, create a new messages with this data.
     */
    create: XOR<messagesCreateInput, messagesUncheckedCreateInput>
    /**
     * In case the messages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<messagesUpdateInput, messagesUncheckedUpdateInput>
  }

  /**
   * messages delete
   */
  export type messagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Filter which messages to delete.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages deleteMany
   */
  export type messagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to delete
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to delete.
     */
    limit?: number
  }

  /**
   * messages without action
   */
  export type messagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
  }


  /**
   * Model notifications
   */

  export type AggregateNotifications = {
    _count: NotificationsCountAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  export type NotificationsMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    user_id: string | null
    type: string | null
    title: string | null
    message: string | null
    link: string | null
    is_read: boolean | null
    created_at: Date | null
  }

  export type NotificationsMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    user_id: string | null
    type: string | null
    title: string | null
    message: string | null
    link: string | null
    is_read: boolean | null
    created_at: Date | null
  }

  export type NotificationsCountAggregateOutputType = {
    id: number
    tenant_id: number
    user_id: number
    type: number
    title: number
    message: number
    link: number
    is_read: number
    created_at: number
    _all: number
  }


  export type NotificationsMinAggregateInputType = {
    id?: true
    tenant_id?: true
    user_id?: true
    type?: true
    title?: true
    message?: true
    link?: true
    is_read?: true
    created_at?: true
  }

  export type NotificationsMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    user_id?: true
    type?: true
    title?: true
    message?: true
    link?: true
    is_read?: true
    created_at?: true
  }

  export type NotificationsCountAggregateInputType = {
    id?: true
    tenant_id?: true
    user_id?: true
    type?: true
    title?: true
    message?: true
    link?: true
    is_read?: true
    created_at?: true
    _all?: true
  }

  export type NotificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to aggregate.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notifications
    **/
    _count?: true | NotificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationsMaxAggregateInputType
  }

  export type GetNotificationsAggregateType<T extends NotificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateNotifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotifications[P]>
      : GetScalarType<T[P], AggregateNotifications[P]>
  }




  export type notificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationsWhereInput
    orderBy?: notificationsOrderByWithAggregationInput | notificationsOrderByWithAggregationInput[]
    by: NotificationsScalarFieldEnum[] | NotificationsScalarFieldEnum
    having?: notificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationsCountAggregateInputType | true
    _min?: NotificationsMinAggregateInputType
    _max?: NotificationsMaxAggregateInputType
  }

  export type NotificationsGroupByOutputType = {
    id: string
    tenant_id: string
    user_id: string
    type: string
    title: string
    message: string | null
    link: string | null
    is_read: boolean | null
    created_at: Date | null
    _count: NotificationsCountAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  type GetNotificationsGroupByPayload<T extends notificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
        }
      >
    >


  export type notificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    user_id?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    link?: boolean
    is_read?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["notifications"]>

  export type notificationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    user_id?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    link?: boolean
    is_read?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["notifications"]>

  export type notificationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    user_id?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    link?: boolean
    is_read?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["notifications"]>

  export type notificationsSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    user_id?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    link?: boolean
    is_read?: boolean
    created_at?: boolean
  }

  export type notificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenant_id" | "user_id" | "type" | "title" | "message" | "link" | "is_read" | "created_at", ExtArgs["result"]["notifications"]>

  export type $notificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notifications"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      user_id: string
      type: string
      title: string
      message: string | null
      link: string | null
      is_read: boolean | null
      created_at: Date | null
    }, ExtArgs["result"]["notifications"]>
    composites: {}
  }

  type notificationsGetPayload<S extends boolean | null | undefined | notificationsDefaultArgs> = $Result.GetResult<Prisma.$notificationsPayload, S>

  type notificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationsCountAggregateInputType | true
    }

  export interface notificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notifications'], meta: { name: 'notifications' } }
    /**
     * Find zero or one Notifications that matches the filter.
     * @param {notificationsFindUniqueArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notificationsFindUniqueArgs>(args: SelectSubset<T, notificationsFindUniqueArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notificationsFindUniqueOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, notificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notificationsFindFirstArgs>(args?: SelectSubset<T, notificationsFindFirstArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, notificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notifications.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notifications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationsWithIdOnly = await prisma.notifications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends notificationsFindManyArgs>(args?: SelectSubset<T, notificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notifications.
     * @param {notificationsCreateArgs} args - Arguments to create a Notifications.
     * @example
     * // Create one Notifications
     * const Notifications = await prisma.notifications.create({
     *   data: {
     *     // ... data to create a Notifications
     *   }
     * })
     * 
     */
    create<T extends notificationsCreateArgs>(args: SelectSubset<T, notificationsCreateArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {notificationsCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notificationsCreateManyArgs>(args?: SelectSubset<T, notificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {notificationsCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationsWithIdOnly = await prisma.notifications.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends notificationsCreateManyAndReturnArgs>(args?: SelectSubset<T, notificationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notifications.
     * @param {notificationsDeleteArgs} args - Arguments to delete one Notifications.
     * @example
     * // Delete one Notifications
     * const Notifications = await prisma.notifications.delete({
     *   where: {
     *     // ... filter to delete one Notifications
     *   }
     * })
     * 
     */
    delete<T extends notificationsDeleteArgs>(args: SelectSubset<T, notificationsDeleteArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notifications.
     * @param {notificationsUpdateArgs} args - Arguments to update one Notifications.
     * @example
     * // Update one Notifications
     * const notifications = await prisma.notifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notificationsUpdateArgs>(args: SelectSubset<T, notificationsUpdateArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {notificationsDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notificationsDeleteManyArgs>(args?: SelectSubset<T, notificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notificationsUpdateManyArgs>(args: SelectSubset<T, notificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {notificationsUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationsWithIdOnly = await prisma.notifications.updateManyAndReturn({
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
    updateManyAndReturn<T extends notificationsUpdateManyAndReturnArgs>(args: SelectSubset<T, notificationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notifications.
     * @param {notificationsUpsertArgs} args - Arguments to update or create a Notifications.
     * @example
     * // Update or create a Notifications
     * const notifications = await prisma.notifications.upsert({
     *   create: {
     *     // ... data to create a Notifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notifications we want to update
     *   }
     * })
     */
    upsert<T extends notificationsUpsertArgs>(args: SelectSubset<T, notificationsUpsertArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notifications.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends notificationsCountArgs>(
      args?: Subset<T, notificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationsAggregateArgs>(args: Subset<T, NotificationsAggregateArgs>): Prisma.PrismaPromise<GetNotificationsAggregateType<T>>

    /**
     * Group by Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsGroupByArgs} args - Group by arguments.
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
      T extends notificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notificationsGroupByArgs['orderBy'] }
        : { orderBy?: notificationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, notificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notifications model
   */
  readonly fields: notificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the notifications model
   */
  interface notificationsFieldRefs {
    readonly id: FieldRef<"notifications", 'String'>
    readonly tenant_id: FieldRef<"notifications", 'String'>
    readonly user_id: FieldRef<"notifications", 'String'>
    readonly type: FieldRef<"notifications", 'String'>
    readonly title: FieldRef<"notifications", 'String'>
    readonly message: FieldRef<"notifications", 'String'>
    readonly link: FieldRef<"notifications", 'String'>
    readonly is_read: FieldRef<"notifications", 'Boolean'>
    readonly created_at: FieldRef<"notifications", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * notifications findUnique
   */
  export type notificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications findUniqueOrThrow
   */
  export type notificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications findFirst
   */
  export type notificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications findFirstOrThrow
   */
  export type notificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications findMany
   */
  export type notificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications create
   */
  export type notificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * The data needed to create a notifications.
     */
    data: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>
  }

  /**
   * notifications createMany
   */
  export type notificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notifications.
     */
    data: notificationsCreateManyInput | notificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notifications createManyAndReturn
   */
  export type notificationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * The data used to create many notifications.
     */
    data: notificationsCreateManyInput | notificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notifications update
   */
  export type notificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * The data needed to update a notifications.
     */
    data: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>
    /**
     * Choose, which notifications to update.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications updateMany
   */
  export type notificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
  }

  /**
   * notifications updateManyAndReturn
   */
  export type notificationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
  }

  /**
   * notifications upsert
   */
  export type notificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * The filter to search for the notifications to update in case it exists.
     */
    where: notificationsWhereUniqueInput
    /**
     * In case the notifications found by the `where` argument doesn't exist, create a new notifications with this data.
     */
    create: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>
    /**
     * In case the notifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>
  }

  /**
   * notifications delete
   */
  export type notificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Filter which notifications to delete.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications deleteMany
   */
  export type notificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to delete
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to delete.
     */
    limit?: number
  }

  /**
   * notifications without action
   */
  export type notificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
  }


  /**
   * Model quiz_attempts
   */

  export type AggregateQuiz_attempts = {
    _count: Quiz_attemptsCountAggregateOutputType | null
    _avg: Quiz_attemptsAvgAggregateOutputType | null
    _sum: Quiz_attemptsSumAggregateOutputType | null
    _min: Quiz_attemptsMinAggregateOutputType | null
    _max: Quiz_attemptsMaxAggregateOutputType | null
  }

  export type Quiz_attemptsAvgAggregateOutputType = {
    score: number | null
  }

  export type Quiz_attemptsSumAggregateOutputType = {
    score: number | null
  }

  export type Quiz_attemptsMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    quiz_id: string | null
    student_id: string | null
    score: number | null
    started_at: Date | null
    finished_at: Date | null
  }

  export type Quiz_attemptsMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    quiz_id: string | null
    student_id: string | null
    score: number | null
    started_at: Date | null
    finished_at: Date | null
  }

  export type Quiz_attemptsCountAggregateOutputType = {
    id: number
    tenant_id: number
    quiz_id: number
    student_id: number
    score: number
    started_at: number
    finished_at: number
    _all: number
  }


  export type Quiz_attemptsAvgAggregateInputType = {
    score?: true
  }

  export type Quiz_attemptsSumAggregateInputType = {
    score?: true
  }

  export type Quiz_attemptsMinAggregateInputType = {
    id?: true
    tenant_id?: true
    quiz_id?: true
    student_id?: true
    score?: true
    started_at?: true
    finished_at?: true
  }

  export type Quiz_attemptsMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    quiz_id?: true
    student_id?: true
    score?: true
    started_at?: true
    finished_at?: true
  }

  export type Quiz_attemptsCountAggregateInputType = {
    id?: true
    tenant_id?: true
    quiz_id?: true
    student_id?: true
    score?: true
    started_at?: true
    finished_at?: true
    _all?: true
  }

  export type Quiz_attemptsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which quiz_attempts to aggregate.
     */
    where?: quiz_attemptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quiz_attempts to fetch.
     */
    orderBy?: quiz_attemptsOrderByWithRelationInput | quiz_attemptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: quiz_attemptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quiz_attempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quiz_attempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned quiz_attempts
    **/
    _count?: true | Quiz_attemptsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Quiz_attemptsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Quiz_attemptsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Quiz_attemptsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Quiz_attemptsMaxAggregateInputType
  }

  export type GetQuiz_attemptsAggregateType<T extends Quiz_attemptsAggregateArgs> = {
        [P in keyof T & keyof AggregateQuiz_attempts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuiz_attempts[P]>
      : GetScalarType<T[P], AggregateQuiz_attempts[P]>
  }




  export type quiz_attemptsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: quiz_attemptsWhereInput
    orderBy?: quiz_attemptsOrderByWithAggregationInput | quiz_attemptsOrderByWithAggregationInput[]
    by: Quiz_attemptsScalarFieldEnum[] | Quiz_attemptsScalarFieldEnum
    having?: quiz_attemptsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Quiz_attemptsCountAggregateInputType | true
    _avg?: Quiz_attemptsAvgAggregateInputType
    _sum?: Quiz_attemptsSumAggregateInputType
    _min?: Quiz_attemptsMinAggregateInputType
    _max?: Quiz_attemptsMaxAggregateInputType
  }

  export type Quiz_attemptsGroupByOutputType = {
    id: string
    tenant_id: string
    quiz_id: string
    student_id: string
    score: number | null
    started_at: Date | null
    finished_at: Date | null
    _count: Quiz_attemptsCountAggregateOutputType | null
    _avg: Quiz_attemptsAvgAggregateOutputType | null
    _sum: Quiz_attemptsSumAggregateOutputType | null
    _min: Quiz_attemptsMinAggregateOutputType | null
    _max: Quiz_attemptsMaxAggregateOutputType | null
  }

  type GetQuiz_attemptsGroupByPayload<T extends quiz_attemptsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Quiz_attemptsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Quiz_attemptsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Quiz_attemptsGroupByOutputType[P]>
            : GetScalarType<T[P], Quiz_attemptsGroupByOutputType[P]>
        }
      >
    >


  export type quiz_attemptsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    quiz_id?: boolean
    student_id?: boolean
    score?: boolean
    started_at?: boolean
    finished_at?: boolean
    quizzes?: boolean | quizzesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz_attempts"]>

  export type quiz_attemptsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    quiz_id?: boolean
    student_id?: boolean
    score?: boolean
    started_at?: boolean
    finished_at?: boolean
    quizzes?: boolean | quizzesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz_attempts"]>

  export type quiz_attemptsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    quiz_id?: boolean
    student_id?: boolean
    score?: boolean
    started_at?: boolean
    finished_at?: boolean
    quizzes?: boolean | quizzesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz_attempts"]>

  export type quiz_attemptsSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    quiz_id?: boolean
    student_id?: boolean
    score?: boolean
    started_at?: boolean
    finished_at?: boolean
  }

  export type quiz_attemptsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenant_id" | "quiz_id" | "student_id" | "score" | "started_at" | "finished_at", ExtArgs["result"]["quiz_attempts"]>
  export type quiz_attemptsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizzes?: boolean | quizzesDefaultArgs<ExtArgs>
  }
  export type quiz_attemptsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizzes?: boolean | quizzesDefaultArgs<ExtArgs>
  }
  export type quiz_attemptsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizzes?: boolean | quizzesDefaultArgs<ExtArgs>
  }

  export type $quiz_attemptsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "quiz_attempts"
    objects: {
      quizzes: Prisma.$quizzesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      quiz_id: string
      student_id: string
      score: number | null
      started_at: Date | null
      finished_at: Date | null
    }, ExtArgs["result"]["quiz_attempts"]>
    composites: {}
  }

  type quiz_attemptsGetPayload<S extends boolean | null | undefined | quiz_attemptsDefaultArgs> = $Result.GetResult<Prisma.$quiz_attemptsPayload, S>

  type quiz_attemptsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<quiz_attemptsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Quiz_attemptsCountAggregateInputType | true
    }

  export interface quiz_attemptsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['quiz_attempts'], meta: { name: 'quiz_attempts' } }
    /**
     * Find zero or one Quiz_attempts that matches the filter.
     * @param {quiz_attemptsFindUniqueArgs} args - Arguments to find a Quiz_attempts
     * @example
     * // Get one Quiz_attempts
     * const quiz_attempts = await prisma.quiz_attempts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends quiz_attemptsFindUniqueArgs>(args: SelectSubset<T, quiz_attemptsFindUniqueArgs<ExtArgs>>): Prisma__quiz_attemptsClient<$Result.GetResult<Prisma.$quiz_attemptsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quiz_attempts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {quiz_attemptsFindUniqueOrThrowArgs} args - Arguments to find a Quiz_attempts
     * @example
     * // Get one Quiz_attempts
     * const quiz_attempts = await prisma.quiz_attempts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends quiz_attemptsFindUniqueOrThrowArgs>(args: SelectSubset<T, quiz_attemptsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__quiz_attemptsClient<$Result.GetResult<Prisma.$quiz_attemptsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz_attempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quiz_attemptsFindFirstArgs} args - Arguments to find a Quiz_attempts
     * @example
     * // Get one Quiz_attempts
     * const quiz_attempts = await prisma.quiz_attempts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends quiz_attemptsFindFirstArgs>(args?: SelectSubset<T, quiz_attemptsFindFirstArgs<ExtArgs>>): Prisma__quiz_attemptsClient<$Result.GetResult<Prisma.$quiz_attemptsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz_attempts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quiz_attemptsFindFirstOrThrowArgs} args - Arguments to find a Quiz_attempts
     * @example
     * // Get one Quiz_attempts
     * const quiz_attempts = await prisma.quiz_attempts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends quiz_attemptsFindFirstOrThrowArgs>(args?: SelectSubset<T, quiz_attemptsFindFirstOrThrowArgs<ExtArgs>>): Prisma__quiz_attemptsClient<$Result.GetResult<Prisma.$quiz_attemptsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quiz_attempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quiz_attemptsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quiz_attempts
     * const quiz_attempts = await prisma.quiz_attempts.findMany()
     * 
     * // Get first 10 Quiz_attempts
     * const quiz_attempts = await prisma.quiz_attempts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quiz_attemptsWithIdOnly = await prisma.quiz_attempts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends quiz_attemptsFindManyArgs>(args?: SelectSubset<T, quiz_attemptsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$quiz_attemptsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quiz_attempts.
     * @param {quiz_attemptsCreateArgs} args - Arguments to create a Quiz_attempts.
     * @example
     * // Create one Quiz_attempts
     * const Quiz_attempts = await prisma.quiz_attempts.create({
     *   data: {
     *     // ... data to create a Quiz_attempts
     *   }
     * })
     * 
     */
    create<T extends quiz_attemptsCreateArgs>(args: SelectSubset<T, quiz_attemptsCreateArgs<ExtArgs>>): Prisma__quiz_attemptsClient<$Result.GetResult<Prisma.$quiz_attemptsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quiz_attempts.
     * @param {quiz_attemptsCreateManyArgs} args - Arguments to create many Quiz_attempts.
     * @example
     * // Create many Quiz_attempts
     * const quiz_attempts = await prisma.quiz_attempts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends quiz_attemptsCreateManyArgs>(args?: SelectSubset<T, quiz_attemptsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Quiz_attempts and returns the data saved in the database.
     * @param {quiz_attemptsCreateManyAndReturnArgs} args - Arguments to create many Quiz_attempts.
     * @example
     * // Create many Quiz_attempts
     * const quiz_attempts = await prisma.quiz_attempts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Quiz_attempts and only return the `id`
     * const quiz_attemptsWithIdOnly = await prisma.quiz_attempts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends quiz_attemptsCreateManyAndReturnArgs>(args?: SelectSubset<T, quiz_attemptsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$quiz_attemptsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Quiz_attempts.
     * @param {quiz_attemptsDeleteArgs} args - Arguments to delete one Quiz_attempts.
     * @example
     * // Delete one Quiz_attempts
     * const Quiz_attempts = await prisma.quiz_attempts.delete({
     *   where: {
     *     // ... filter to delete one Quiz_attempts
     *   }
     * })
     * 
     */
    delete<T extends quiz_attemptsDeleteArgs>(args: SelectSubset<T, quiz_attemptsDeleteArgs<ExtArgs>>): Prisma__quiz_attemptsClient<$Result.GetResult<Prisma.$quiz_attemptsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quiz_attempts.
     * @param {quiz_attemptsUpdateArgs} args - Arguments to update one Quiz_attempts.
     * @example
     * // Update one Quiz_attempts
     * const quiz_attempts = await prisma.quiz_attempts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends quiz_attemptsUpdateArgs>(args: SelectSubset<T, quiz_attemptsUpdateArgs<ExtArgs>>): Prisma__quiz_attemptsClient<$Result.GetResult<Prisma.$quiz_attemptsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quiz_attempts.
     * @param {quiz_attemptsDeleteManyArgs} args - Arguments to filter Quiz_attempts to delete.
     * @example
     * // Delete a few Quiz_attempts
     * const { count } = await prisma.quiz_attempts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends quiz_attemptsDeleteManyArgs>(args?: SelectSubset<T, quiz_attemptsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quiz_attempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quiz_attemptsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quiz_attempts
     * const quiz_attempts = await prisma.quiz_attempts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends quiz_attemptsUpdateManyArgs>(args: SelectSubset<T, quiz_attemptsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quiz_attempts and returns the data updated in the database.
     * @param {quiz_attemptsUpdateManyAndReturnArgs} args - Arguments to update many Quiz_attempts.
     * @example
     * // Update many Quiz_attempts
     * const quiz_attempts = await prisma.quiz_attempts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Quiz_attempts and only return the `id`
     * const quiz_attemptsWithIdOnly = await prisma.quiz_attempts.updateManyAndReturn({
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
    updateManyAndReturn<T extends quiz_attemptsUpdateManyAndReturnArgs>(args: SelectSubset<T, quiz_attemptsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$quiz_attemptsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Quiz_attempts.
     * @param {quiz_attemptsUpsertArgs} args - Arguments to update or create a Quiz_attempts.
     * @example
     * // Update or create a Quiz_attempts
     * const quiz_attempts = await prisma.quiz_attempts.upsert({
     *   create: {
     *     // ... data to create a Quiz_attempts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quiz_attempts we want to update
     *   }
     * })
     */
    upsert<T extends quiz_attemptsUpsertArgs>(args: SelectSubset<T, quiz_attemptsUpsertArgs<ExtArgs>>): Prisma__quiz_attemptsClient<$Result.GetResult<Prisma.$quiz_attemptsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quiz_attempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quiz_attemptsCountArgs} args - Arguments to filter Quiz_attempts to count.
     * @example
     * // Count the number of Quiz_attempts
     * const count = await prisma.quiz_attempts.count({
     *   where: {
     *     // ... the filter for the Quiz_attempts we want to count
     *   }
     * })
    **/
    count<T extends quiz_attemptsCountArgs>(
      args?: Subset<T, quiz_attemptsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Quiz_attemptsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quiz_attempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Quiz_attemptsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Quiz_attemptsAggregateArgs>(args: Subset<T, Quiz_attemptsAggregateArgs>): Prisma.PrismaPromise<GetQuiz_attemptsAggregateType<T>>

    /**
     * Group by Quiz_attempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quiz_attemptsGroupByArgs} args - Group by arguments.
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
      T extends quiz_attemptsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: quiz_attemptsGroupByArgs['orderBy'] }
        : { orderBy?: quiz_attemptsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, quiz_attemptsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuiz_attemptsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the quiz_attempts model
   */
  readonly fields: quiz_attemptsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for quiz_attempts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__quiz_attemptsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quizzes<T extends quizzesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, quizzesDefaultArgs<ExtArgs>>): Prisma__quizzesClient<$Result.GetResult<Prisma.$quizzesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the quiz_attempts model
   */
  interface quiz_attemptsFieldRefs {
    readonly id: FieldRef<"quiz_attempts", 'String'>
    readonly tenant_id: FieldRef<"quiz_attempts", 'String'>
    readonly quiz_id: FieldRef<"quiz_attempts", 'String'>
    readonly student_id: FieldRef<"quiz_attempts", 'String'>
    readonly score: FieldRef<"quiz_attempts", 'Float'>
    readonly started_at: FieldRef<"quiz_attempts", 'DateTime'>
    readonly finished_at: FieldRef<"quiz_attempts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * quiz_attempts findUnique
   */
  export type quiz_attemptsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quiz_attempts
     */
    select?: quiz_attemptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quiz_attempts
     */
    omit?: quiz_attemptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quiz_attemptsInclude<ExtArgs> | null
    /**
     * Filter, which quiz_attempts to fetch.
     */
    where: quiz_attemptsWhereUniqueInput
  }

  /**
   * quiz_attempts findUniqueOrThrow
   */
  export type quiz_attemptsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quiz_attempts
     */
    select?: quiz_attemptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quiz_attempts
     */
    omit?: quiz_attemptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quiz_attemptsInclude<ExtArgs> | null
    /**
     * Filter, which quiz_attempts to fetch.
     */
    where: quiz_attemptsWhereUniqueInput
  }

  /**
   * quiz_attempts findFirst
   */
  export type quiz_attemptsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quiz_attempts
     */
    select?: quiz_attemptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quiz_attempts
     */
    omit?: quiz_attemptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quiz_attemptsInclude<ExtArgs> | null
    /**
     * Filter, which quiz_attempts to fetch.
     */
    where?: quiz_attemptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quiz_attempts to fetch.
     */
    orderBy?: quiz_attemptsOrderByWithRelationInput | quiz_attemptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for quiz_attempts.
     */
    cursor?: quiz_attemptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quiz_attempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quiz_attempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of quiz_attempts.
     */
    distinct?: Quiz_attemptsScalarFieldEnum | Quiz_attemptsScalarFieldEnum[]
  }

  /**
   * quiz_attempts findFirstOrThrow
   */
  export type quiz_attemptsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quiz_attempts
     */
    select?: quiz_attemptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quiz_attempts
     */
    omit?: quiz_attemptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quiz_attemptsInclude<ExtArgs> | null
    /**
     * Filter, which quiz_attempts to fetch.
     */
    where?: quiz_attemptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quiz_attempts to fetch.
     */
    orderBy?: quiz_attemptsOrderByWithRelationInput | quiz_attemptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for quiz_attempts.
     */
    cursor?: quiz_attemptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quiz_attempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quiz_attempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of quiz_attempts.
     */
    distinct?: Quiz_attemptsScalarFieldEnum | Quiz_attemptsScalarFieldEnum[]
  }

  /**
   * quiz_attempts findMany
   */
  export type quiz_attemptsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quiz_attempts
     */
    select?: quiz_attemptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quiz_attempts
     */
    omit?: quiz_attemptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quiz_attemptsInclude<ExtArgs> | null
    /**
     * Filter, which quiz_attempts to fetch.
     */
    where?: quiz_attemptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quiz_attempts to fetch.
     */
    orderBy?: quiz_attemptsOrderByWithRelationInput | quiz_attemptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing quiz_attempts.
     */
    cursor?: quiz_attemptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quiz_attempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quiz_attempts.
     */
    skip?: number
    distinct?: Quiz_attemptsScalarFieldEnum | Quiz_attemptsScalarFieldEnum[]
  }

  /**
   * quiz_attempts create
   */
  export type quiz_attemptsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quiz_attempts
     */
    select?: quiz_attemptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quiz_attempts
     */
    omit?: quiz_attemptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quiz_attemptsInclude<ExtArgs> | null
    /**
     * The data needed to create a quiz_attempts.
     */
    data: XOR<quiz_attemptsCreateInput, quiz_attemptsUncheckedCreateInput>
  }

  /**
   * quiz_attempts createMany
   */
  export type quiz_attemptsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many quiz_attempts.
     */
    data: quiz_attemptsCreateManyInput | quiz_attemptsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * quiz_attempts createManyAndReturn
   */
  export type quiz_attemptsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quiz_attempts
     */
    select?: quiz_attemptsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the quiz_attempts
     */
    omit?: quiz_attemptsOmit<ExtArgs> | null
    /**
     * The data used to create many quiz_attempts.
     */
    data: quiz_attemptsCreateManyInput | quiz_attemptsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quiz_attemptsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * quiz_attempts update
   */
  export type quiz_attemptsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quiz_attempts
     */
    select?: quiz_attemptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quiz_attempts
     */
    omit?: quiz_attemptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quiz_attemptsInclude<ExtArgs> | null
    /**
     * The data needed to update a quiz_attempts.
     */
    data: XOR<quiz_attemptsUpdateInput, quiz_attemptsUncheckedUpdateInput>
    /**
     * Choose, which quiz_attempts to update.
     */
    where: quiz_attemptsWhereUniqueInput
  }

  /**
   * quiz_attempts updateMany
   */
  export type quiz_attemptsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update quiz_attempts.
     */
    data: XOR<quiz_attemptsUpdateManyMutationInput, quiz_attemptsUncheckedUpdateManyInput>
    /**
     * Filter which quiz_attempts to update
     */
    where?: quiz_attemptsWhereInput
    /**
     * Limit how many quiz_attempts to update.
     */
    limit?: number
  }

  /**
   * quiz_attempts updateManyAndReturn
   */
  export type quiz_attemptsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quiz_attempts
     */
    select?: quiz_attemptsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the quiz_attempts
     */
    omit?: quiz_attemptsOmit<ExtArgs> | null
    /**
     * The data used to update quiz_attempts.
     */
    data: XOR<quiz_attemptsUpdateManyMutationInput, quiz_attemptsUncheckedUpdateManyInput>
    /**
     * Filter which quiz_attempts to update
     */
    where?: quiz_attemptsWhereInput
    /**
     * Limit how many quiz_attempts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quiz_attemptsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * quiz_attempts upsert
   */
  export type quiz_attemptsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quiz_attempts
     */
    select?: quiz_attemptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quiz_attempts
     */
    omit?: quiz_attemptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quiz_attemptsInclude<ExtArgs> | null
    /**
     * The filter to search for the quiz_attempts to update in case it exists.
     */
    where: quiz_attemptsWhereUniqueInput
    /**
     * In case the quiz_attempts found by the `where` argument doesn't exist, create a new quiz_attempts with this data.
     */
    create: XOR<quiz_attemptsCreateInput, quiz_attemptsUncheckedCreateInput>
    /**
     * In case the quiz_attempts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<quiz_attemptsUpdateInput, quiz_attemptsUncheckedUpdateInput>
  }

  /**
   * quiz_attempts delete
   */
  export type quiz_attemptsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quiz_attempts
     */
    select?: quiz_attemptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quiz_attempts
     */
    omit?: quiz_attemptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quiz_attemptsInclude<ExtArgs> | null
    /**
     * Filter which quiz_attempts to delete.
     */
    where: quiz_attemptsWhereUniqueInput
  }

  /**
   * quiz_attempts deleteMany
   */
  export type quiz_attemptsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which quiz_attempts to delete
     */
    where?: quiz_attemptsWhereInput
    /**
     * Limit how many quiz_attempts to delete.
     */
    limit?: number
  }

  /**
   * quiz_attempts without action
   */
  export type quiz_attemptsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quiz_attempts
     */
    select?: quiz_attemptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quiz_attempts
     */
    omit?: quiz_attemptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quiz_attemptsInclude<ExtArgs> | null
  }


  /**
   * Model quizzes
   */

  export type AggregateQuizzes = {
    _count: QuizzesCountAggregateOutputType | null
    _min: QuizzesMinAggregateOutputType | null
    _max: QuizzesMaxAggregateOutputType | null
  }

  export type QuizzesMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    class_id: string | null
    title: string | null
    created_at: Date | null
  }

  export type QuizzesMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    class_id: string | null
    title: string | null
    created_at: Date | null
  }

  export type QuizzesCountAggregateOutputType = {
    id: number
    tenant_id: number
    class_id: number
    title: number
    created_at: number
    _all: number
  }


  export type QuizzesMinAggregateInputType = {
    id?: true
    tenant_id?: true
    class_id?: true
    title?: true
    created_at?: true
  }

  export type QuizzesMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    class_id?: true
    title?: true
    created_at?: true
  }

  export type QuizzesCountAggregateInputType = {
    id?: true
    tenant_id?: true
    class_id?: true
    title?: true
    created_at?: true
    _all?: true
  }

  export type QuizzesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which quizzes to aggregate.
     */
    where?: quizzesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quizzes to fetch.
     */
    orderBy?: quizzesOrderByWithRelationInput | quizzesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: quizzesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned quizzes
    **/
    _count?: true | QuizzesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizzesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizzesMaxAggregateInputType
  }

  export type GetQuizzesAggregateType<T extends QuizzesAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizzes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizzes[P]>
      : GetScalarType<T[P], AggregateQuizzes[P]>
  }




  export type quizzesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: quizzesWhereInput
    orderBy?: quizzesOrderByWithAggregationInput | quizzesOrderByWithAggregationInput[]
    by: QuizzesScalarFieldEnum[] | QuizzesScalarFieldEnum
    having?: quizzesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizzesCountAggregateInputType | true
    _min?: QuizzesMinAggregateInputType
    _max?: QuizzesMaxAggregateInputType
  }

  export type QuizzesGroupByOutputType = {
    id: string
    tenant_id: string
    class_id: string
    title: string
    created_at: Date | null
    _count: QuizzesCountAggregateOutputType | null
    _min: QuizzesMinAggregateOutputType | null
    _max: QuizzesMaxAggregateOutputType | null
  }

  type GetQuizzesGroupByPayload<T extends quizzesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizzesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizzesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizzesGroupByOutputType[P]>
            : GetScalarType<T[P], QuizzesGroupByOutputType[P]>
        }
      >
    >


  export type quizzesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    class_id?: boolean
    title?: boolean
    created_at?: boolean
    quiz_attempts?: boolean | quizzes$quiz_attemptsArgs<ExtArgs>
    _count?: boolean | QuizzesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizzes"]>

  export type quizzesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    class_id?: boolean
    title?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["quizzes"]>

  export type quizzesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    class_id?: boolean
    title?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["quizzes"]>

  export type quizzesSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    class_id?: boolean
    title?: boolean
    created_at?: boolean
  }

  export type quizzesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenant_id" | "class_id" | "title" | "created_at", ExtArgs["result"]["quizzes"]>
  export type quizzesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz_attempts?: boolean | quizzes$quiz_attemptsArgs<ExtArgs>
    _count?: boolean | QuizzesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type quizzesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type quizzesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $quizzesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "quizzes"
    objects: {
      quiz_attempts: Prisma.$quiz_attemptsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      class_id: string
      title: string
      created_at: Date | null
    }, ExtArgs["result"]["quizzes"]>
    composites: {}
  }

  type quizzesGetPayload<S extends boolean | null | undefined | quizzesDefaultArgs> = $Result.GetResult<Prisma.$quizzesPayload, S>

  type quizzesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<quizzesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizzesCountAggregateInputType | true
    }

  export interface quizzesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['quizzes'], meta: { name: 'quizzes' } }
    /**
     * Find zero or one Quizzes that matches the filter.
     * @param {quizzesFindUniqueArgs} args - Arguments to find a Quizzes
     * @example
     * // Get one Quizzes
     * const quizzes = await prisma.quizzes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends quizzesFindUniqueArgs>(args: SelectSubset<T, quizzesFindUniqueArgs<ExtArgs>>): Prisma__quizzesClient<$Result.GetResult<Prisma.$quizzesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quizzes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {quizzesFindUniqueOrThrowArgs} args - Arguments to find a Quizzes
     * @example
     * // Get one Quizzes
     * const quizzes = await prisma.quizzes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends quizzesFindUniqueOrThrowArgs>(args: SelectSubset<T, quizzesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__quizzesClient<$Result.GetResult<Prisma.$quizzesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quizzes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quizzesFindFirstArgs} args - Arguments to find a Quizzes
     * @example
     * // Get one Quizzes
     * const quizzes = await prisma.quizzes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends quizzesFindFirstArgs>(args?: SelectSubset<T, quizzesFindFirstArgs<ExtArgs>>): Prisma__quizzesClient<$Result.GetResult<Prisma.$quizzesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quizzes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quizzesFindFirstOrThrowArgs} args - Arguments to find a Quizzes
     * @example
     * // Get one Quizzes
     * const quizzes = await prisma.quizzes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends quizzesFindFirstOrThrowArgs>(args?: SelectSubset<T, quizzesFindFirstOrThrowArgs<ExtArgs>>): Prisma__quizzesClient<$Result.GetResult<Prisma.$quizzesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quizzes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quizzesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quizzes
     * const quizzes = await prisma.quizzes.findMany()
     * 
     * // Get first 10 Quizzes
     * const quizzes = await prisma.quizzes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizzesWithIdOnly = await prisma.quizzes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends quizzesFindManyArgs>(args?: SelectSubset<T, quizzesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$quizzesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quizzes.
     * @param {quizzesCreateArgs} args - Arguments to create a Quizzes.
     * @example
     * // Create one Quizzes
     * const Quizzes = await prisma.quizzes.create({
     *   data: {
     *     // ... data to create a Quizzes
     *   }
     * })
     * 
     */
    create<T extends quizzesCreateArgs>(args: SelectSubset<T, quizzesCreateArgs<ExtArgs>>): Prisma__quizzesClient<$Result.GetResult<Prisma.$quizzesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quizzes.
     * @param {quizzesCreateManyArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quizzes = await prisma.quizzes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends quizzesCreateManyArgs>(args?: SelectSubset<T, quizzesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Quizzes and returns the data saved in the database.
     * @param {quizzesCreateManyAndReturnArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quizzes = await prisma.quizzes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Quizzes and only return the `id`
     * const quizzesWithIdOnly = await prisma.quizzes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends quizzesCreateManyAndReturnArgs>(args?: SelectSubset<T, quizzesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$quizzesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Quizzes.
     * @param {quizzesDeleteArgs} args - Arguments to delete one Quizzes.
     * @example
     * // Delete one Quizzes
     * const Quizzes = await prisma.quizzes.delete({
     *   where: {
     *     // ... filter to delete one Quizzes
     *   }
     * })
     * 
     */
    delete<T extends quizzesDeleteArgs>(args: SelectSubset<T, quizzesDeleteArgs<ExtArgs>>): Prisma__quizzesClient<$Result.GetResult<Prisma.$quizzesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quizzes.
     * @param {quizzesUpdateArgs} args - Arguments to update one Quizzes.
     * @example
     * // Update one Quizzes
     * const quizzes = await prisma.quizzes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends quizzesUpdateArgs>(args: SelectSubset<T, quizzesUpdateArgs<ExtArgs>>): Prisma__quizzesClient<$Result.GetResult<Prisma.$quizzesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quizzes.
     * @param {quizzesDeleteManyArgs} args - Arguments to filter Quizzes to delete.
     * @example
     * // Delete a few Quizzes
     * const { count } = await prisma.quizzes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends quizzesDeleteManyArgs>(args?: SelectSubset<T, quizzesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quizzesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quizzes
     * const quizzes = await prisma.quizzes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends quizzesUpdateManyArgs>(args: SelectSubset<T, quizzesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes and returns the data updated in the database.
     * @param {quizzesUpdateManyAndReturnArgs} args - Arguments to update many Quizzes.
     * @example
     * // Update many Quizzes
     * const quizzes = await prisma.quizzes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Quizzes and only return the `id`
     * const quizzesWithIdOnly = await prisma.quizzes.updateManyAndReturn({
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
    updateManyAndReturn<T extends quizzesUpdateManyAndReturnArgs>(args: SelectSubset<T, quizzesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$quizzesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Quizzes.
     * @param {quizzesUpsertArgs} args - Arguments to update or create a Quizzes.
     * @example
     * // Update or create a Quizzes
     * const quizzes = await prisma.quizzes.upsert({
     *   create: {
     *     // ... data to create a Quizzes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quizzes we want to update
     *   }
     * })
     */
    upsert<T extends quizzesUpsertArgs>(args: SelectSubset<T, quizzesUpsertArgs<ExtArgs>>): Prisma__quizzesClient<$Result.GetResult<Prisma.$quizzesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quizzesCountArgs} args - Arguments to filter Quizzes to count.
     * @example
     * // Count the number of Quizzes
     * const count = await prisma.quizzes.count({
     *   where: {
     *     // ... the filter for the Quizzes we want to count
     *   }
     * })
    **/
    count<T extends quizzesCountArgs>(
      args?: Subset<T, quizzesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizzesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizzesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizzesAggregateArgs>(args: Subset<T, QuizzesAggregateArgs>): Prisma.PrismaPromise<GetQuizzesAggregateType<T>>

    /**
     * Group by Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quizzesGroupByArgs} args - Group by arguments.
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
      T extends quizzesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: quizzesGroupByArgs['orderBy'] }
        : { orderBy?: quizzesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, quizzesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizzesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the quizzes model
   */
  readonly fields: quizzesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for quizzes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__quizzesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quiz_attempts<T extends quizzes$quiz_attemptsArgs<ExtArgs> = {}>(args?: Subset<T, quizzes$quiz_attemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$quiz_attemptsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the quizzes model
   */
  interface quizzesFieldRefs {
    readonly id: FieldRef<"quizzes", 'String'>
    readonly tenant_id: FieldRef<"quizzes", 'String'>
    readonly class_id: FieldRef<"quizzes", 'String'>
    readonly title: FieldRef<"quizzes", 'String'>
    readonly created_at: FieldRef<"quizzes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * quizzes findUnique
   */
  export type quizzesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quizzes
     */
    select?: quizzesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quizzes
     */
    omit?: quizzesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quizzesInclude<ExtArgs> | null
    /**
     * Filter, which quizzes to fetch.
     */
    where: quizzesWhereUniqueInput
  }

  /**
   * quizzes findUniqueOrThrow
   */
  export type quizzesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quizzes
     */
    select?: quizzesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quizzes
     */
    omit?: quizzesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quizzesInclude<ExtArgs> | null
    /**
     * Filter, which quizzes to fetch.
     */
    where: quizzesWhereUniqueInput
  }

  /**
   * quizzes findFirst
   */
  export type quizzesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quizzes
     */
    select?: quizzesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quizzes
     */
    omit?: quizzesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quizzesInclude<ExtArgs> | null
    /**
     * Filter, which quizzes to fetch.
     */
    where?: quizzesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quizzes to fetch.
     */
    orderBy?: quizzesOrderByWithRelationInput | quizzesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for quizzes.
     */
    cursor?: quizzesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of quizzes.
     */
    distinct?: QuizzesScalarFieldEnum | QuizzesScalarFieldEnum[]
  }

  /**
   * quizzes findFirstOrThrow
   */
  export type quizzesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quizzes
     */
    select?: quizzesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quizzes
     */
    omit?: quizzesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quizzesInclude<ExtArgs> | null
    /**
     * Filter, which quizzes to fetch.
     */
    where?: quizzesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quizzes to fetch.
     */
    orderBy?: quizzesOrderByWithRelationInput | quizzesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for quizzes.
     */
    cursor?: quizzesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of quizzes.
     */
    distinct?: QuizzesScalarFieldEnum | QuizzesScalarFieldEnum[]
  }

  /**
   * quizzes findMany
   */
  export type quizzesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quizzes
     */
    select?: quizzesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quizzes
     */
    omit?: quizzesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quizzesInclude<ExtArgs> | null
    /**
     * Filter, which quizzes to fetch.
     */
    where?: quizzesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quizzes to fetch.
     */
    orderBy?: quizzesOrderByWithRelationInput | quizzesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing quizzes.
     */
    cursor?: quizzesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quizzes.
     */
    skip?: number
    distinct?: QuizzesScalarFieldEnum | QuizzesScalarFieldEnum[]
  }

  /**
   * quizzes create
   */
  export type quizzesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quizzes
     */
    select?: quizzesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quizzes
     */
    omit?: quizzesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quizzesInclude<ExtArgs> | null
    /**
     * The data needed to create a quizzes.
     */
    data: XOR<quizzesCreateInput, quizzesUncheckedCreateInput>
  }

  /**
   * quizzes createMany
   */
  export type quizzesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many quizzes.
     */
    data: quizzesCreateManyInput | quizzesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * quizzes createManyAndReturn
   */
  export type quizzesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quizzes
     */
    select?: quizzesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the quizzes
     */
    omit?: quizzesOmit<ExtArgs> | null
    /**
     * The data used to create many quizzes.
     */
    data: quizzesCreateManyInput | quizzesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * quizzes update
   */
  export type quizzesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quizzes
     */
    select?: quizzesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quizzes
     */
    omit?: quizzesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quizzesInclude<ExtArgs> | null
    /**
     * The data needed to update a quizzes.
     */
    data: XOR<quizzesUpdateInput, quizzesUncheckedUpdateInput>
    /**
     * Choose, which quizzes to update.
     */
    where: quizzesWhereUniqueInput
  }

  /**
   * quizzes updateMany
   */
  export type quizzesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update quizzes.
     */
    data: XOR<quizzesUpdateManyMutationInput, quizzesUncheckedUpdateManyInput>
    /**
     * Filter which quizzes to update
     */
    where?: quizzesWhereInput
    /**
     * Limit how many quizzes to update.
     */
    limit?: number
  }

  /**
   * quizzes updateManyAndReturn
   */
  export type quizzesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quizzes
     */
    select?: quizzesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the quizzes
     */
    omit?: quizzesOmit<ExtArgs> | null
    /**
     * The data used to update quizzes.
     */
    data: XOR<quizzesUpdateManyMutationInput, quizzesUncheckedUpdateManyInput>
    /**
     * Filter which quizzes to update
     */
    where?: quizzesWhereInput
    /**
     * Limit how many quizzes to update.
     */
    limit?: number
  }

  /**
   * quizzes upsert
   */
  export type quizzesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quizzes
     */
    select?: quizzesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quizzes
     */
    omit?: quizzesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quizzesInclude<ExtArgs> | null
    /**
     * The filter to search for the quizzes to update in case it exists.
     */
    where: quizzesWhereUniqueInput
    /**
     * In case the quizzes found by the `where` argument doesn't exist, create a new quizzes with this data.
     */
    create: XOR<quizzesCreateInput, quizzesUncheckedCreateInput>
    /**
     * In case the quizzes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<quizzesUpdateInput, quizzesUncheckedUpdateInput>
  }

  /**
   * quizzes delete
   */
  export type quizzesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quizzes
     */
    select?: quizzesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quizzes
     */
    omit?: quizzesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quizzesInclude<ExtArgs> | null
    /**
     * Filter which quizzes to delete.
     */
    where: quizzesWhereUniqueInput
  }

  /**
   * quizzes deleteMany
   */
  export type quizzesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which quizzes to delete
     */
    where?: quizzesWhereInput
    /**
     * Limit how many quizzes to delete.
     */
    limit?: number
  }

  /**
   * quizzes.quiz_attempts
   */
  export type quizzes$quiz_attemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quiz_attempts
     */
    select?: quiz_attemptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quiz_attempts
     */
    omit?: quiz_attemptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quiz_attemptsInclude<ExtArgs> | null
    where?: quiz_attemptsWhereInput
    orderBy?: quiz_attemptsOrderByWithRelationInput | quiz_attemptsOrderByWithRelationInput[]
    cursor?: quiz_attemptsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Quiz_attemptsScalarFieldEnum | Quiz_attemptsScalarFieldEnum[]
  }

  /**
   * quizzes without action
   */
  export type quizzesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quizzes
     */
    select?: quizzesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quizzes
     */
    omit?: quizzesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quizzesInclude<ExtArgs> | null
  }


  /**
   * Model submissions
   */

  export type AggregateSubmissions = {
    _count: SubmissionsCountAggregateOutputType | null
    _avg: SubmissionsAvgAggregateOutputType | null
    _sum: SubmissionsSumAggregateOutputType | null
    _min: SubmissionsMinAggregateOutputType | null
    _max: SubmissionsMaxAggregateOutputType | null
  }

  export type SubmissionsAvgAggregateOutputType = {
    score: number | null
  }

  export type SubmissionsSumAggregateOutputType = {
    score: number | null
  }

  export type SubmissionsMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    assignment_id: string | null
    student_id: string | null
    content: string | null
    submitted_at: Date | null
    score: number | null
    feedback: string | null
  }

  export type SubmissionsMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    assignment_id: string | null
    student_id: string | null
    content: string | null
    submitted_at: Date | null
    score: number | null
    feedback: string | null
  }

  export type SubmissionsCountAggregateOutputType = {
    id: number
    tenant_id: number
    assignment_id: number
    student_id: number
    content: number
    submitted_at: number
    score: number
    feedback: number
    _all: number
  }


  export type SubmissionsAvgAggregateInputType = {
    score?: true
  }

  export type SubmissionsSumAggregateInputType = {
    score?: true
  }

  export type SubmissionsMinAggregateInputType = {
    id?: true
    tenant_id?: true
    assignment_id?: true
    student_id?: true
    content?: true
    submitted_at?: true
    score?: true
    feedback?: true
  }

  export type SubmissionsMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    assignment_id?: true
    student_id?: true
    content?: true
    submitted_at?: true
    score?: true
    feedback?: true
  }

  export type SubmissionsCountAggregateInputType = {
    id?: true
    tenant_id?: true
    assignment_id?: true
    student_id?: true
    content?: true
    submitted_at?: true
    score?: true
    feedback?: true
    _all?: true
  }

  export type SubmissionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which submissions to aggregate.
     */
    where?: submissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of submissions to fetch.
     */
    orderBy?: submissionsOrderByWithRelationInput | submissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: submissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned submissions
    **/
    _count?: true | SubmissionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubmissionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubmissionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionsMaxAggregateInputType
  }

  export type GetSubmissionsAggregateType<T extends SubmissionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmissions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmissions[P]>
      : GetScalarType<T[P], AggregateSubmissions[P]>
  }




  export type submissionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: submissionsWhereInput
    orderBy?: submissionsOrderByWithAggregationInput | submissionsOrderByWithAggregationInput[]
    by: SubmissionsScalarFieldEnum[] | SubmissionsScalarFieldEnum
    having?: submissionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionsCountAggregateInputType | true
    _avg?: SubmissionsAvgAggregateInputType
    _sum?: SubmissionsSumAggregateInputType
    _min?: SubmissionsMinAggregateInputType
    _max?: SubmissionsMaxAggregateInputType
  }

  export type SubmissionsGroupByOutputType = {
    id: string
    tenant_id: string
    assignment_id: string
    student_id: string
    content: string | null
    submitted_at: Date | null
    score: number | null
    feedback: string | null
    _count: SubmissionsCountAggregateOutputType | null
    _avg: SubmissionsAvgAggregateOutputType | null
    _sum: SubmissionsSumAggregateOutputType | null
    _min: SubmissionsMinAggregateOutputType | null
    _max: SubmissionsMaxAggregateOutputType | null
  }

  type GetSubmissionsGroupByPayload<T extends submissionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionsGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionsGroupByOutputType[P]>
        }
      >
    >


  export type submissionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    assignment_id?: boolean
    student_id?: boolean
    content?: boolean
    submitted_at?: boolean
    score?: boolean
    feedback?: boolean
    assignments?: boolean | assignmentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submissions"]>

  export type submissionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    assignment_id?: boolean
    student_id?: boolean
    content?: boolean
    submitted_at?: boolean
    score?: boolean
    feedback?: boolean
    assignments?: boolean | assignmentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submissions"]>

  export type submissionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    assignment_id?: boolean
    student_id?: boolean
    content?: boolean
    submitted_at?: boolean
    score?: boolean
    feedback?: boolean
    assignments?: boolean | assignmentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submissions"]>

  export type submissionsSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    assignment_id?: boolean
    student_id?: boolean
    content?: boolean
    submitted_at?: boolean
    score?: boolean
    feedback?: boolean
  }

  export type submissionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenant_id" | "assignment_id" | "student_id" | "content" | "submitted_at" | "score" | "feedback", ExtArgs["result"]["submissions"]>
  export type submissionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | assignmentsDefaultArgs<ExtArgs>
  }
  export type submissionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | assignmentsDefaultArgs<ExtArgs>
  }
  export type submissionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | assignmentsDefaultArgs<ExtArgs>
  }

  export type $submissionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "submissions"
    objects: {
      assignments: Prisma.$assignmentsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      assignment_id: string
      student_id: string
      content: string | null
      submitted_at: Date | null
      score: number | null
      feedback: string | null
    }, ExtArgs["result"]["submissions"]>
    composites: {}
  }

  type submissionsGetPayload<S extends boolean | null | undefined | submissionsDefaultArgs> = $Result.GetResult<Prisma.$submissionsPayload, S>

  type submissionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<submissionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubmissionsCountAggregateInputType | true
    }

  export interface submissionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['submissions'], meta: { name: 'submissions' } }
    /**
     * Find zero or one Submissions that matches the filter.
     * @param {submissionsFindUniqueArgs} args - Arguments to find a Submissions
     * @example
     * // Get one Submissions
     * const submissions = await prisma.submissions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends submissionsFindUniqueArgs>(args: SelectSubset<T, submissionsFindUniqueArgs<ExtArgs>>): Prisma__submissionsClient<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Submissions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {submissionsFindUniqueOrThrowArgs} args - Arguments to find a Submissions
     * @example
     * // Get one Submissions
     * const submissions = await prisma.submissions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends submissionsFindUniqueOrThrowArgs>(args: SelectSubset<T, submissionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__submissionsClient<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionsFindFirstArgs} args - Arguments to find a Submissions
     * @example
     * // Get one Submissions
     * const submissions = await prisma.submissions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends submissionsFindFirstArgs>(args?: SelectSubset<T, submissionsFindFirstArgs<ExtArgs>>): Prisma__submissionsClient<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submissions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionsFindFirstOrThrowArgs} args - Arguments to find a Submissions
     * @example
     * // Get one Submissions
     * const submissions = await prisma.submissions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends submissionsFindFirstOrThrowArgs>(args?: SelectSubset<T, submissionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__submissionsClient<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissions
     * const submissions = await prisma.submissions.findMany()
     * 
     * // Get first 10 Submissions
     * const submissions = await prisma.submissions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submissionsWithIdOnly = await prisma.submissions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends submissionsFindManyArgs>(args?: SelectSubset<T, submissionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Submissions.
     * @param {submissionsCreateArgs} args - Arguments to create a Submissions.
     * @example
     * // Create one Submissions
     * const Submissions = await prisma.submissions.create({
     *   data: {
     *     // ... data to create a Submissions
     *   }
     * })
     * 
     */
    create<T extends submissionsCreateArgs>(args: SelectSubset<T, submissionsCreateArgs<ExtArgs>>): Prisma__submissionsClient<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Submissions.
     * @param {submissionsCreateManyArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submissions = await prisma.submissions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends submissionsCreateManyArgs>(args?: SelectSubset<T, submissionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Submissions and returns the data saved in the database.
     * @param {submissionsCreateManyAndReturnArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submissions = await prisma.submissions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Submissions and only return the `id`
     * const submissionsWithIdOnly = await prisma.submissions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends submissionsCreateManyAndReturnArgs>(args?: SelectSubset<T, submissionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Submissions.
     * @param {submissionsDeleteArgs} args - Arguments to delete one Submissions.
     * @example
     * // Delete one Submissions
     * const Submissions = await prisma.submissions.delete({
     *   where: {
     *     // ... filter to delete one Submissions
     *   }
     * })
     * 
     */
    delete<T extends submissionsDeleteArgs>(args: SelectSubset<T, submissionsDeleteArgs<ExtArgs>>): Prisma__submissionsClient<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Submissions.
     * @param {submissionsUpdateArgs} args - Arguments to update one Submissions.
     * @example
     * // Update one Submissions
     * const submissions = await prisma.submissions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends submissionsUpdateArgs>(args: SelectSubset<T, submissionsUpdateArgs<ExtArgs>>): Prisma__submissionsClient<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Submissions.
     * @param {submissionsDeleteManyArgs} args - Arguments to filter Submissions to delete.
     * @example
     * // Delete a few Submissions
     * const { count } = await prisma.submissions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends submissionsDeleteManyArgs>(args?: SelectSubset<T, submissionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissions
     * const submissions = await prisma.submissions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends submissionsUpdateManyArgs>(args: SelectSubset<T, submissionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions and returns the data updated in the database.
     * @param {submissionsUpdateManyAndReturnArgs} args - Arguments to update many Submissions.
     * @example
     * // Update many Submissions
     * const submissions = await prisma.submissions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Submissions and only return the `id`
     * const submissionsWithIdOnly = await prisma.submissions.updateManyAndReturn({
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
    updateManyAndReturn<T extends submissionsUpdateManyAndReturnArgs>(args: SelectSubset<T, submissionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Submissions.
     * @param {submissionsUpsertArgs} args - Arguments to update or create a Submissions.
     * @example
     * // Update or create a Submissions
     * const submissions = await prisma.submissions.upsert({
     *   create: {
     *     // ... data to create a Submissions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submissions we want to update
     *   }
     * })
     */
    upsert<T extends submissionsUpsertArgs>(args: SelectSubset<T, submissionsUpsertArgs<ExtArgs>>): Prisma__submissionsClient<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionsCountArgs} args - Arguments to filter Submissions to count.
     * @example
     * // Count the number of Submissions
     * const count = await prisma.submissions.count({
     *   where: {
     *     // ... the filter for the Submissions we want to count
     *   }
     * })
    **/
    count<T extends submissionsCountArgs>(
      args?: Subset<T, submissionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubmissionsAggregateArgs>(args: Subset<T, SubmissionsAggregateArgs>): Prisma.PrismaPromise<GetSubmissionsAggregateType<T>>

    /**
     * Group by Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionsGroupByArgs} args - Group by arguments.
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
      T extends submissionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: submissionsGroupByArgs['orderBy'] }
        : { orderBy?: submissionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, submissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the submissions model
   */
  readonly fields: submissionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for submissions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__submissionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignments<T extends assignmentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, assignmentsDefaultArgs<ExtArgs>>): Prisma__assignmentsClient<$Result.GetResult<Prisma.$assignmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the submissions model
   */
  interface submissionsFieldRefs {
    readonly id: FieldRef<"submissions", 'String'>
    readonly tenant_id: FieldRef<"submissions", 'String'>
    readonly assignment_id: FieldRef<"submissions", 'String'>
    readonly student_id: FieldRef<"submissions", 'String'>
    readonly content: FieldRef<"submissions", 'String'>
    readonly submitted_at: FieldRef<"submissions", 'DateTime'>
    readonly score: FieldRef<"submissions", 'Float'>
    readonly feedback: FieldRef<"submissions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * submissions findUnique
   */
  export type submissionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
    /**
     * Filter, which submissions to fetch.
     */
    where: submissionsWhereUniqueInput
  }

  /**
   * submissions findUniqueOrThrow
   */
  export type submissionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
    /**
     * Filter, which submissions to fetch.
     */
    where: submissionsWhereUniqueInput
  }

  /**
   * submissions findFirst
   */
  export type submissionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
    /**
     * Filter, which submissions to fetch.
     */
    where?: submissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of submissions to fetch.
     */
    orderBy?: submissionsOrderByWithRelationInput | submissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for submissions.
     */
    cursor?: submissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of submissions.
     */
    distinct?: SubmissionsScalarFieldEnum | SubmissionsScalarFieldEnum[]
  }

  /**
   * submissions findFirstOrThrow
   */
  export type submissionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
    /**
     * Filter, which submissions to fetch.
     */
    where?: submissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of submissions to fetch.
     */
    orderBy?: submissionsOrderByWithRelationInput | submissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for submissions.
     */
    cursor?: submissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of submissions.
     */
    distinct?: SubmissionsScalarFieldEnum | SubmissionsScalarFieldEnum[]
  }

  /**
   * submissions findMany
   */
  export type submissionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
    /**
     * Filter, which submissions to fetch.
     */
    where?: submissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of submissions to fetch.
     */
    orderBy?: submissionsOrderByWithRelationInput | submissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing submissions.
     */
    cursor?: submissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` submissions.
     */
    skip?: number
    distinct?: SubmissionsScalarFieldEnum | SubmissionsScalarFieldEnum[]
  }

  /**
   * submissions create
   */
  export type submissionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
    /**
     * The data needed to create a submissions.
     */
    data: XOR<submissionsCreateInput, submissionsUncheckedCreateInput>
  }

  /**
   * submissions createMany
   */
  export type submissionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many submissions.
     */
    data: submissionsCreateManyInput | submissionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * submissions createManyAndReturn
   */
  export type submissionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * The data used to create many submissions.
     */
    data: submissionsCreateManyInput | submissionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * submissions update
   */
  export type submissionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
    /**
     * The data needed to update a submissions.
     */
    data: XOR<submissionsUpdateInput, submissionsUncheckedUpdateInput>
    /**
     * Choose, which submissions to update.
     */
    where: submissionsWhereUniqueInput
  }

  /**
   * submissions updateMany
   */
  export type submissionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update submissions.
     */
    data: XOR<submissionsUpdateManyMutationInput, submissionsUncheckedUpdateManyInput>
    /**
     * Filter which submissions to update
     */
    where?: submissionsWhereInput
    /**
     * Limit how many submissions to update.
     */
    limit?: number
  }

  /**
   * submissions updateManyAndReturn
   */
  export type submissionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * The data used to update submissions.
     */
    data: XOR<submissionsUpdateManyMutationInput, submissionsUncheckedUpdateManyInput>
    /**
     * Filter which submissions to update
     */
    where?: submissionsWhereInput
    /**
     * Limit how many submissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * submissions upsert
   */
  export type submissionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
    /**
     * The filter to search for the submissions to update in case it exists.
     */
    where: submissionsWhereUniqueInput
    /**
     * In case the submissions found by the `where` argument doesn't exist, create a new submissions with this data.
     */
    create: XOR<submissionsCreateInput, submissionsUncheckedCreateInput>
    /**
     * In case the submissions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<submissionsUpdateInput, submissionsUncheckedUpdateInput>
  }

  /**
   * submissions delete
   */
  export type submissionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
    /**
     * Filter which submissions to delete.
     */
    where: submissionsWhereUniqueInput
  }

  /**
   * submissions deleteMany
   */
  export type submissionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which submissions to delete
     */
    where?: submissionsWhereInput
    /**
     * Limit how many submissions to delete.
     */
    limit?: number
  }

  /**
   * submissions without action
   */
  export type submissionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
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


  export const AssignmentsScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    class_id: 'class_id',
    title: 'title',
    description: 'description',
    deadline: 'deadline',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AssignmentsScalarFieldEnum = (typeof AssignmentsScalarFieldEnum)[keyof typeof AssignmentsScalarFieldEnum]


  export const DiscussionsScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    class_id: 'class_id',
    user_id: 'user_id',
    user_email: 'user_email',
    content: 'content',
    created_at: 'created_at'
  };

  export type DiscussionsScalarFieldEnum = (typeof DiscussionsScalarFieldEnum)[keyof typeof DiscussionsScalarFieldEnum]


  export const MaterialsScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    class_id: 'class_id',
    title: 'title',
    content: 'content',
    type: 'type',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type MaterialsScalarFieldEnum = (typeof MaterialsScalarFieldEnum)[keyof typeof MaterialsScalarFieldEnum]


  export const MessagesScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    sender_id: 'sender_id',
    sender_email: 'sender_email',
    receiver_id: 'receiver_id',
    content: 'content',
    is_read: 'is_read',
    created_at: 'created_at'
  };

  export type MessagesScalarFieldEnum = (typeof MessagesScalarFieldEnum)[keyof typeof MessagesScalarFieldEnum]


  export const NotificationsScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    user_id: 'user_id',
    type: 'type',
    title: 'title',
    message: 'message',
    link: 'link',
    is_read: 'is_read',
    created_at: 'created_at'
  };

  export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum]


  export const Quiz_attemptsScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    quiz_id: 'quiz_id',
    student_id: 'student_id',
    score: 'score',
    started_at: 'started_at',
    finished_at: 'finished_at'
  };

  export type Quiz_attemptsScalarFieldEnum = (typeof Quiz_attemptsScalarFieldEnum)[keyof typeof Quiz_attemptsScalarFieldEnum]


  export const QuizzesScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    class_id: 'class_id',
    title: 'title',
    created_at: 'created_at'
  };

  export type QuizzesScalarFieldEnum = (typeof QuizzesScalarFieldEnum)[keyof typeof QuizzesScalarFieldEnum]


  export const SubmissionsScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    assignment_id: 'assignment_id',
    student_id: 'student_id',
    content: 'content',
    submitted_at: 'submitted_at',
    score: 'score',
    feedback: 'feedback'
  };

  export type SubmissionsScalarFieldEnum = (typeof SubmissionsScalarFieldEnum)[keyof typeof SubmissionsScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


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


  export type assignmentsWhereInput = {
    AND?: assignmentsWhereInput | assignmentsWhereInput[]
    OR?: assignmentsWhereInput[]
    NOT?: assignmentsWhereInput | assignmentsWhereInput[]
    id?: UuidFilter<"assignments"> | string
    tenant_id?: UuidFilter<"assignments"> | string
    class_id?: UuidFilter<"assignments"> | string
    title?: StringFilter<"assignments"> | string
    description?: StringNullableFilter<"assignments"> | string | null
    deadline?: DateTimeNullableFilter<"assignments"> | Date | string | null
    created_at?: DateTimeNullableFilter<"assignments"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"assignments"> | Date | string | null
    submissions?: SubmissionsListRelationFilter
  }

  export type assignmentsOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    class_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    deadline?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    submissions?: submissionsOrderByRelationAggregateInput
  }

  export type assignmentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: assignmentsWhereInput | assignmentsWhereInput[]
    OR?: assignmentsWhereInput[]
    NOT?: assignmentsWhereInput | assignmentsWhereInput[]
    tenant_id?: UuidFilter<"assignments"> | string
    class_id?: UuidFilter<"assignments"> | string
    title?: StringFilter<"assignments"> | string
    description?: StringNullableFilter<"assignments"> | string | null
    deadline?: DateTimeNullableFilter<"assignments"> | Date | string | null
    created_at?: DateTimeNullableFilter<"assignments"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"assignments"> | Date | string | null
    submissions?: SubmissionsListRelationFilter
  }, "id">

  export type assignmentsOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    class_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    deadline?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: assignmentsCountOrderByAggregateInput
    _max?: assignmentsMaxOrderByAggregateInput
    _min?: assignmentsMinOrderByAggregateInput
  }

  export type assignmentsScalarWhereWithAggregatesInput = {
    AND?: assignmentsScalarWhereWithAggregatesInput | assignmentsScalarWhereWithAggregatesInput[]
    OR?: assignmentsScalarWhereWithAggregatesInput[]
    NOT?: assignmentsScalarWhereWithAggregatesInput | assignmentsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"assignments"> | string
    tenant_id?: UuidWithAggregatesFilter<"assignments"> | string
    class_id?: UuidWithAggregatesFilter<"assignments"> | string
    title?: StringWithAggregatesFilter<"assignments"> | string
    description?: StringNullableWithAggregatesFilter<"assignments"> | string | null
    deadline?: DateTimeNullableWithAggregatesFilter<"assignments"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"assignments"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"assignments"> | Date | string | null
  }

  export type discussionsWhereInput = {
    AND?: discussionsWhereInput | discussionsWhereInput[]
    OR?: discussionsWhereInput[]
    NOT?: discussionsWhereInput | discussionsWhereInput[]
    id?: UuidFilter<"discussions"> | string
    tenant_id?: UuidFilter<"discussions"> | string
    class_id?: UuidFilter<"discussions"> | string
    user_id?: UuidFilter<"discussions"> | string
    user_email?: StringNullableFilter<"discussions"> | string | null
    content?: StringFilter<"discussions"> | string
    created_at?: DateTimeNullableFilter<"discussions"> | Date | string | null
  }

  export type discussionsOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    class_id?: SortOrder
    user_id?: SortOrder
    user_email?: SortOrderInput | SortOrder
    content?: SortOrder
    created_at?: SortOrderInput | SortOrder
  }

  export type discussionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: discussionsWhereInput | discussionsWhereInput[]
    OR?: discussionsWhereInput[]
    NOT?: discussionsWhereInput | discussionsWhereInput[]
    tenant_id?: UuidFilter<"discussions"> | string
    class_id?: UuidFilter<"discussions"> | string
    user_id?: UuidFilter<"discussions"> | string
    user_email?: StringNullableFilter<"discussions"> | string | null
    content?: StringFilter<"discussions"> | string
    created_at?: DateTimeNullableFilter<"discussions"> | Date | string | null
  }, "id">

  export type discussionsOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    class_id?: SortOrder
    user_id?: SortOrder
    user_email?: SortOrderInput | SortOrder
    content?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: discussionsCountOrderByAggregateInput
    _max?: discussionsMaxOrderByAggregateInput
    _min?: discussionsMinOrderByAggregateInput
  }

  export type discussionsScalarWhereWithAggregatesInput = {
    AND?: discussionsScalarWhereWithAggregatesInput | discussionsScalarWhereWithAggregatesInput[]
    OR?: discussionsScalarWhereWithAggregatesInput[]
    NOT?: discussionsScalarWhereWithAggregatesInput | discussionsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"discussions"> | string
    tenant_id?: UuidWithAggregatesFilter<"discussions"> | string
    class_id?: UuidWithAggregatesFilter<"discussions"> | string
    user_id?: UuidWithAggregatesFilter<"discussions"> | string
    user_email?: StringNullableWithAggregatesFilter<"discussions"> | string | null
    content?: StringWithAggregatesFilter<"discussions"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"discussions"> | Date | string | null
  }

  export type materialsWhereInput = {
    AND?: materialsWhereInput | materialsWhereInput[]
    OR?: materialsWhereInput[]
    NOT?: materialsWhereInput | materialsWhereInput[]
    id?: UuidFilter<"materials"> | string
    tenant_id?: UuidFilter<"materials"> | string
    class_id?: UuidFilter<"materials"> | string
    title?: StringFilter<"materials"> | string
    content?: StringNullableFilter<"materials"> | string | null
    type?: StringNullableFilter<"materials"> | string | null
    created_at?: DateTimeNullableFilter<"materials"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"materials"> | Date | string | null
  }

  export type materialsOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    class_id?: SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
  }

  export type materialsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: materialsWhereInput | materialsWhereInput[]
    OR?: materialsWhereInput[]
    NOT?: materialsWhereInput | materialsWhereInput[]
    tenant_id?: UuidFilter<"materials"> | string
    class_id?: UuidFilter<"materials"> | string
    title?: StringFilter<"materials"> | string
    content?: StringNullableFilter<"materials"> | string | null
    type?: StringNullableFilter<"materials"> | string | null
    created_at?: DateTimeNullableFilter<"materials"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"materials"> | Date | string | null
  }, "id">

  export type materialsOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    class_id?: SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: materialsCountOrderByAggregateInput
    _max?: materialsMaxOrderByAggregateInput
    _min?: materialsMinOrderByAggregateInput
  }

  export type materialsScalarWhereWithAggregatesInput = {
    AND?: materialsScalarWhereWithAggregatesInput | materialsScalarWhereWithAggregatesInput[]
    OR?: materialsScalarWhereWithAggregatesInput[]
    NOT?: materialsScalarWhereWithAggregatesInput | materialsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"materials"> | string
    tenant_id?: UuidWithAggregatesFilter<"materials"> | string
    class_id?: UuidWithAggregatesFilter<"materials"> | string
    title?: StringWithAggregatesFilter<"materials"> | string
    content?: StringNullableWithAggregatesFilter<"materials"> | string | null
    type?: StringNullableWithAggregatesFilter<"materials"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"materials"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"materials"> | Date | string | null
  }

  export type messagesWhereInput = {
    AND?: messagesWhereInput | messagesWhereInput[]
    OR?: messagesWhereInput[]
    NOT?: messagesWhereInput | messagesWhereInput[]
    id?: UuidFilter<"messages"> | string
    tenant_id?: UuidFilter<"messages"> | string
    sender_id?: UuidFilter<"messages"> | string
    sender_email?: StringNullableFilter<"messages"> | string | null
    receiver_id?: UuidFilter<"messages"> | string
    content?: StringFilter<"messages"> | string
    is_read?: BoolNullableFilter<"messages"> | boolean | null
    created_at?: DateTimeNullableFilter<"messages"> | Date | string | null
  }

  export type messagesOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    sender_id?: SortOrder
    sender_email?: SortOrderInput | SortOrder
    receiver_id?: SortOrder
    content?: SortOrder
    is_read?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
  }

  export type messagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: messagesWhereInput | messagesWhereInput[]
    OR?: messagesWhereInput[]
    NOT?: messagesWhereInput | messagesWhereInput[]
    tenant_id?: UuidFilter<"messages"> | string
    sender_id?: UuidFilter<"messages"> | string
    sender_email?: StringNullableFilter<"messages"> | string | null
    receiver_id?: UuidFilter<"messages"> | string
    content?: StringFilter<"messages"> | string
    is_read?: BoolNullableFilter<"messages"> | boolean | null
    created_at?: DateTimeNullableFilter<"messages"> | Date | string | null
  }, "id">

  export type messagesOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    sender_id?: SortOrder
    sender_email?: SortOrderInput | SortOrder
    receiver_id?: SortOrder
    content?: SortOrder
    is_read?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: messagesCountOrderByAggregateInput
    _max?: messagesMaxOrderByAggregateInput
    _min?: messagesMinOrderByAggregateInput
  }

  export type messagesScalarWhereWithAggregatesInput = {
    AND?: messagesScalarWhereWithAggregatesInput | messagesScalarWhereWithAggregatesInput[]
    OR?: messagesScalarWhereWithAggregatesInput[]
    NOT?: messagesScalarWhereWithAggregatesInput | messagesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"messages"> | string
    tenant_id?: UuidWithAggregatesFilter<"messages"> | string
    sender_id?: UuidWithAggregatesFilter<"messages"> | string
    sender_email?: StringNullableWithAggregatesFilter<"messages"> | string | null
    receiver_id?: UuidWithAggregatesFilter<"messages"> | string
    content?: StringWithAggregatesFilter<"messages"> | string
    is_read?: BoolNullableWithAggregatesFilter<"messages"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"messages"> | Date | string | null
  }

  export type notificationsWhereInput = {
    AND?: notificationsWhereInput | notificationsWhereInput[]
    OR?: notificationsWhereInput[]
    NOT?: notificationsWhereInput | notificationsWhereInput[]
    id?: UuidFilter<"notifications"> | string
    tenant_id?: UuidFilter<"notifications"> | string
    user_id?: UuidFilter<"notifications"> | string
    type?: StringFilter<"notifications"> | string
    title?: StringFilter<"notifications"> | string
    message?: StringNullableFilter<"notifications"> | string | null
    link?: StringNullableFilter<"notifications"> | string | null
    is_read?: BoolNullableFilter<"notifications"> | boolean | null
    created_at?: DateTimeNullableFilter<"notifications"> | Date | string | null
  }

  export type notificationsOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    is_read?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
  }

  export type notificationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: notificationsWhereInput | notificationsWhereInput[]
    OR?: notificationsWhereInput[]
    NOT?: notificationsWhereInput | notificationsWhereInput[]
    tenant_id?: UuidFilter<"notifications"> | string
    user_id?: UuidFilter<"notifications"> | string
    type?: StringFilter<"notifications"> | string
    title?: StringFilter<"notifications"> | string
    message?: StringNullableFilter<"notifications"> | string | null
    link?: StringNullableFilter<"notifications"> | string | null
    is_read?: BoolNullableFilter<"notifications"> | boolean | null
    created_at?: DateTimeNullableFilter<"notifications"> | Date | string | null
  }, "id">

  export type notificationsOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    is_read?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: notificationsCountOrderByAggregateInput
    _max?: notificationsMaxOrderByAggregateInput
    _min?: notificationsMinOrderByAggregateInput
  }

  export type notificationsScalarWhereWithAggregatesInput = {
    AND?: notificationsScalarWhereWithAggregatesInput | notificationsScalarWhereWithAggregatesInput[]
    OR?: notificationsScalarWhereWithAggregatesInput[]
    NOT?: notificationsScalarWhereWithAggregatesInput | notificationsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"notifications"> | string
    tenant_id?: UuidWithAggregatesFilter<"notifications"> | string
    user_id?: UuidWithAggregatesFilter<"notifications"> | string
    type?: StringWithAggregatesFilter<"notifications"> | string
    title?: StringWithAggregatesFilter<"notifications"> | string
    message?: StringNullableWithAggregatesFilter<"notifications"> | string | null
    link?: StringNullableWithAggregatesFilter<"notifications"> | string | null
    is_read?: BoolNullableWithAggregatesFilter<"notifications"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"notifications"> | Date | string | null
  }

  export type quiz_attemptsWhereInput = {
    AND?: quiz_attemptsWhereInput | quiz_attemptsWhereInput[]
    OR?: quiz_attemptsWhereInput[]
    NOT?: quiz_attemptsWhereInput | quiz_attemptsWhereInput[]
    id?: UuidFilter<"quiz_attempts"> | string
    tenant_id?: UuidFilter<"quiz_attempts"> | string
    quiz_id?: UuidFilter<"quiz_attempts"> | string
    student_id?: UuidFilter<"quiz_attempts"> | string
    score?: FloatNullableFilter<"quiz_attempts"> | number | null
    started_at?: DateTimeNullableFilter<"quiz_attempts"> | Date | string | null
    finished_at?: DateTimeNullableFilter<"quiz_attempts"> | Date | string | null
    quizzes?: XOR<QuizzesScalarRelationFilter, quizzesWhereInput>
  }

  export type quiz_attemptsOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    quiz_id?: SortOrder
    student_id?: SortOrder
    score?: SortOrderInput | SortOrder
    started_at?: SortOrderInput | SortOrder
    finished_at?: SortOrderInput | SortOrder
    quizzes?: quizzesOrderByWithRelationInput
  }

  export type quiz_attemptsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: quiz_attemptsWhereInput | quiz_attemptsWhereInput[]
    OR?: quiz_attemptsWhereInput[]
    NOT?: quiz_attemptsWhereInput | quiz_attemptsWhereInput[]
    tenant_id?: UuidFilter<"quiz_attempts"> | string
    quiz_id?: UuidFilter<"quiz_attempts"> | string
    student_id?: UuidFilter<"quiz_attempts"> | string
    score?: FloatNullableFilter<"quiz_attempts"> | number | null
    started_at?: DateTimeNullableFilter<"quiz_attempts"> | Date | string | null
    finished_at?: DateTimeNullableFilter<"quiz_attempts"> | Date | string | null
    quizzes?: XOR<QuizzesScalarRelationFilter, quizzesWhereInput>
  }, "id">

  export type quiz_attemptsOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    quiz_id?: SortOrder
    student_id?: SortOrder
    score?: SortOrderInput | SortOrder
    started_at?: SortOrderInput | SortOrder
    finished_at?: SortOrderInput | SortOrder
    _count?: quiz_attemptsCountOrderByAggregateInput
    _avg?: quiz_attemptsAvgOrderByAggregateInput
    _max?: quiz_attemptsMaxOrderByAggregateInput
    _min?: quiz_attemptsMinOrderByAggregateInput
    _sum?: quiz_attemptsSumOrderByAggregateInput
  }

  export type quiz_attemptsScalarWhereWithAggregatesInput = {
    AND?: quiz_attemptsScalarWhereWithAggregatesInput | quiz_attemptsScalarWhereWithAggregatesInput[]
    OR?: quiz_attemptsScalarWhereWithAggregatesInput[]
    NOT?: quiz_attemptsScalarWhereWithAggregatesInput | quiz_attemptsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"quiz_attempts"> | string
    tenant_id?: UuidWithAggregatesFilter<"quiz_attempts"> | string
    quiz_id?: UuidWithAggregatesFilter<"quiz_attempts"> | string
    student_id?: UuidWithAggregatesFilter<"quiz_attempts"> | string
    score?: FloatNullableWithAggregatesFilter<"quiz_attempts"> | number | null
    started_at?: DateTimeNullableWithAggregatesFilter<"quiz_attempts"> | Date | string | null
    finished_at?: DateTimeNullableWithAggregatesFilter<"quiz_attempts"> | Date | string | null
  }

  export type quizzesWhereInput = {
    AND?: quizzesWhereInput | quizzesWhereInput[]
    OR?: quizzesWhereInput[]
    NOT?: quizzesWhereInput | quizzesWhereInput[]
    id?: UuidFilter<"quizzes"> | string
    tenant_id?: UuidFilter<"quizzes"> | string
    class_id?: UuidFilter<"quizzes"> | string
    title?: StringFilter<"quizzes"> | string
    created_at?: DateTimeNullableFilter<"quizzes"> | Date | string | null
    quiz_attempts?: Quiz_attemptsListRelationFilter
  }

  export type quizzesOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    class_id?: SortOrder
    title?: SortOrder
    created_at?: SortOrderInput | SortOrder
    quiz_attempts?: quiz_attemptsOrderByRelationAggregateInput
  }

  export type quizzesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: quizzesWhereInput | quizzesWhereInput[]
    OR?: quizzesWhereInput[]
    NOT?: quizzesWhereInput | quizzesWhereInput[]
    tenant_id?: UuidFilter<"quizzes"> | string
    class_id?: UuidFilter<"quizzes"> | string
    title?: StringFilter<"quizzes"> | string
    created_at?: DateTimeNullableFilter<"quizzes"> | Date | string | null
    quiz_attempts?: Quiz_attemptsListRelationFilter
  }, "id">

  export type quizzesOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    class_id?: SortOrder
    title?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: quizzesCountOrderByAggregateInput
    _max?: quizzesMaxOrderByAggregateInput
    _min?: quizzesMinOrderByAggregateInput
  }

  export type quizzesScalarWhereWithAggregatesInput = {
    AND?: quizzesScalarWhereWithAggregatesInput | quizzesScalarWhereWithAggregatesInput[]
    OR?: quizzesScalarWhereWithAggregatesInput[]
    NOT?: quizzesScalarWhereWithAggregatesInput | quizzesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"quizzes"> | string
    tenant_id?: UuidWithAggregatesFilter<"quizzes"> | string
    class_id?: UuidWithAggregatesFilter<"quizzes"> | string
    title?: StringWithAggregatesFilter<"quizzes"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"quizzes"> | Date | string | null
  }

  export type submissionsWhereInput = {
    AND?: submissionsWhereInput | submissionsWhereInput[]
    OR?: submissionsWhereInput[]
    NOT?: submissionsWhereInput | submissionsWhereInput[]
    id?: UuidFilter<"submissions"> | string
    tenant_id?: UuidFilter<"submissions"> | string
    assignment_id?: UuidFilter<"submissions"> | string
    student_id?: UuidFilter<"submissions"> | string
    content?: StringNullableFilter<"submissions"> | string | null
    submitted_at?: DateTimeNullableFilter<"submissions"> | Date | string | null
    score?: FloatNullableFilter<"submissions"> | number | null
    feedback?: StringNullableFilter<"submissions"> | string | null
    assignments?: XOR<AssignmentsScalarRelationFilter, assignmentsWhereInput>
  }

  export type submissionsOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    assignment_id?: SortOrder
    student_id?: SortOrder
    content?: SortOrderInput | SortOrder
    submitted_at?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    assignments?: assignmentsOrderByWithRelationInput
  }

  export type submissionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    assignment_id_student_id?: submissionsAssignment_idStudent_idCompoundUniqueInput
    AND?: submissionsWhereInput | submissionsWhereInput[]
    OR?: submissionsWhereInput[]
    NOT?: submissionsWhereInput | submissionsWhereInput[]
    tenant_id?: UuidFilter<"submissions"> | string
    assignment_id?: UuidFilter<"submissions"> | string
    student_id?: UuidFilter<"submissions"> | string
    content?: StringNullableFilter<"submissions"> | string | null
    submitted_at?: DateTimeNullableFilter<"submissions"> | Date | string | null
    score?: FloatNullableFilter<"submissions"> | number | null
    feedback?: StringNullableFilter<"submissions"> | string | null
    assignments?: XOR<AssignmentsScalarRelationFilter, assignmentsWhereInput>
  }, "id" | "assignment_id_student_id">

  export type submissionsOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    assignment_id?: SortOrder
    student_id?: SortOrder
    content?: SortOrderInput | SortOrder
    submitted_at?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    _count?: submissionsCountOrderByAggregateInput
    _avg?: submissionsAvgOrderByAggregateInput
    _max?: submissionsMaxOrderByAggregateInput
    _min?: submissionsMinOrderByAggregateInput
    _sum?: submissionsSumOrderByAggregateInput
  }

  export type submissionsScalarWhereWithAggregatesInput = {
    AND?: submissionsScalarWhereWithAggregatesInput | submissionsScalarWhereWithAggregatesInput[]
    OR?: submissionsScalarWhereWithAggregatesInput[]
    NOT?: submissionsScalarWhereWithAggregatesInput | submissionsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"submissions"> | string
    tenant_id?: UuidWithAggregatesFilter<"submissions"> | string
    assignment_id?: UuidWithAggregatesFilter<"submissions"> | string
    student_id?: UuidWithAggregatesFilter<"submissions"> | string
    content?: StringNullableWithAggregatesFilter<"submissions"> | string | null
    submitted_at?: DateTimeNullableWithAggregatesFilter<"submissions"> | Date | string | null
    score?: FloatNullableWithAggregatesFilter<"submissions"> | number | null
    feedback?: StringNullableWithAggregatesFilter<"submissions"> | string | null
  }

  export type assignmentsCreateInput = {
    id?: string
    tenant_id: string
    class_id: string
    title: string
    description?: string | null
    deadline?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    submissions?: submissionsCreateNestedManyWithoutAssignmentsInput
  }

  export type assignmentsUncheckedCreateInput = {
    id?: string
    tenant_id: string
    class_id: string
    title: string
    description?: string | null
    deadline?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    submissions?: submissionsUncheckedCreateNestedManyWithoutAssignmentsInput
  }

  export type assignmentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submissions?: submissionsUpdateManyWithoutAssignmentsNestedInput
  }

  export type assignmentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submissions?: submissionsUncheckedUpdateManyWithoutAssignmentsNestedInput
  }

  export type assignmentsCreateManyInput = {
    id?: string
    tenant_id: string
    class_id: string
    title: string
    description?: string | null
    deadline?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type assignmentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type assignmentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type discussionsCreateInput = {
    id?: string
    tenant_id: string
    class_id: string
    user_id: string
    user_email?: string | null
    content: string
    created_at?: Date | string | null
  }

  export type discussionsUncheckedCreateInput = {
    id?: string
    tenant_id: string
    class_id: string
    user_id: string
    user_email?: string | null
    content: string
    created_at?: Date | string | null
  }

  export type discussionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type discussionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type discussionsCreateManyInput = {
    id?: string
    tenant_id: string
    class_id: string
    user_id: string
    user_email?: string | null
    content: string
    created_at?: Date | string | null
  }

  export type discussionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type discussionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type materialsCreateInput = {
    id?: string
    tenant_id: string
    class_id: string
    title: string
    content?: string | null
    type?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type materialsUncheckedCreateInput = {
    id?: string
    tenant_id: string
    class_id: string
    title: string
    content?: string | null
    type?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type materialsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type materialsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type materialsCreateManyInput = {
    id?: string
    tenant_id: string
    class_id: string
    title: string
    content?: string | null
    type?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type materialsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type materialsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type messagesCreateInput = {
    id?: string
    tenant_id: string
    sender_id: string
    sender_email?: string | null
    receiver_id: string
    content: string
    is_read?: boolean | null
    created_at?: Date | string | null
  }

  export type messagesUncheckedCreateInput = {
    id?: string
    tenant_id: string
    sender_id: string
    sender_email?: string | null
    receiver_id: string
    content: string
    is_read?: boolean | null
    created_at?: Date | string | null
  }

  export type messagesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    sender_email?: NullableStringFieldUpdateOperationsInput | string | null
    receiver_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type messagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    sender_email?: NullableStringFieldUpdateOperationsInput | string | null
    receiver_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type messagesCreateManyInput = {
    id?: string
    tenant_id: string
    sender_id: string
    sender_email?: string | null
    receiver_id: string
    content: string
    is_read?: boolean | null
    created_at?: Date | string | null
  }

  export type messagesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    sender_email?: NullableStringFieldUpdateOperationsInput | string | null
    receiver_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type messagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    sender_email?: NullableStringFieldUpdateOperationsInput | string | null
    receiver_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsCreateInput = {
    id?: string
    tenant_id: string
    user_id: string
    type: string
    title: string
    message?: string | null
    link?: string | null
    is_read?: boolean | null
    created_at?: Date | string | null
  }

  export type notificationsUncheckedCreateInput = {
    id?: string
    tenant_id: string
    user_id: string
    type: string
    title: string
    message?: string | null
    link?: string | null
    is_read?: boolean | null
    created_at?: Date | string | null
  }

  export type notificationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsCreateManyInput = {
    id?: string
    tenant_id: string
    user_id: string
    type: string
    title: string
    message?: string | null
    link?: string | null
    is_read?: boolean | null
    created_at?: Date | string | null
  }

  export type notificationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type quiz_attemptsCreateInput = {
    id?: string
    tenant_id: string
    student_id: string
    score?: number | null
    started_at?: Date | string | null
    finished_at?: Date | string | null
    quizzes: quizzesCreateNestedOneWithoutQuiz_attemptsInput
  }

  export type quiz_attemptsUncheckedCreateInput = {
    id?: string
    tenant_id: string
    quiz_id: string
    student_id: string
    score?: number | null
    started_at?: Date | string | null
    finished_at?: Date | string | null
  }

  export type quiz_attemptsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quizzes?: quizzesUpdateOneRequiredWithoutQuiz_attemptsNestedInput
  }

  export type quiz_attemptsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    quiz_id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type quiz_attemptsCreateManyInput = {
    id?: string
    tenant_id: string
    quiz_id: string
    student_id: string
    score?: number | null
    started_at?: Date | string | null
    finished_at?: Date | string | null
  }

  export type quiz_attemptsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type quiz_attemptsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    quiz_id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type quizzesCreateInput = {
    id?: string
    tenant_id: string
    class_id: string
    title: string
    created_at?: Date | string | null
    quiz_attempts?: quiz_attemptsCreateNestedManyWithoutQuizzesInput
  }

  export type quizzesUncheckedCreateInput = {
    id?: string
    tenant_id: string
    class_id: string
    title: string
    created_at?: Date | string | null
    quiz_attempts?: quiz_attemptsUncheckedCreateNestedManyWithoutQuizzesInput
  }

  export type quizzesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quiz_attempts?: quiz_attemptsUpdateManyWithoutQuizzesNestedInput
  }

  export type quizzesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quiz_attempts?: quiz_attemptsUncheckedUpdateManyWithoutQuizzesNestedInput
  }

  export type quizzesCreateManyInput = {
    id?: string
    tenant_id: string
    class_id: string
    title: string
    created_at?: Date | string | null
  }

  export type quizzesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type quizzesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type submissionsCreateInput = {
    id?: string
    tenant_id: string
    student_id: string
    content?: string | null
    submitted_at?: Date | string | null
    score?: number | null
    feedback?: string | null
    assignments: assignmentsCreateNestedOneWithoutSubmissionsInput
  }

  export type submissionsUncheckedCreateInput = {
    id?: string
    tenant_id: string
    assignment_id: string
    student_id: string
    content?: string | null
    submitted_at?: Date | string | null
    score?: number | null
    feedback?: string | null
  }

  export type submissionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    assignments?: assignmentsUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type submissionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    assignment_id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type submissionsCreateManyInput = {
    id?: string
    tenant_id: string
    assignment_id: string
    student_id: string
    content?: string | null
    submitted_at?: Date | string | null
    score?: number | null
    feedback?: string | null
  }

  export type submissionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type submissionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    assignment_id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type SubmissionsListRelationFilter = {
    every?: submissionsWhereInput
    some?: submissionsWhereInput
    none?: submissionsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type submissionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type assignmentsCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    class_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type assignmentsMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    class_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type assignmentsMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    class_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
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

  export type discussionsCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    class_id?: SortOrder
    user_id?: SortOrder
    user_email?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
  }

  export type discussionsMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    class_id?: SortOrder
    user_id?: SortOrder
    user_email?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
  }

  export type discussionsMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    class_id?: SortOrder
    user_id?: SortOrder
    user_email?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
  }

  export type materialsCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    class_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type materialsMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    class_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type materialsMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    class_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type messagesCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    sender_id?: SortOrder
    sender_email?: SortOrder
    receiver_id?: SortOrder
    content?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
  }

  export type messagesMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    sender_id?: SortOrder
    sender_email?: SortOrder
    receiver_id?: SortOrder
    content?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
  }

  export type messagesMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    sender_id?: SortOrder
    sender_email?: SortOrder
    receiver_id?: SortOrder
    content?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type notificationsCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    link?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
  }

  export type notificationsMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    link?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
  }

  export type notificationsMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    link?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type QuizzesScalarRelationFilter = {
    is?: quizzesWhereInput
    isNot?: quizzesWhereInput
  }

  export type quiz_attemptsCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    quiz_id?: SortOrder
    student_id?: SortOrder
    score?: SortOrder
    started_at?: SortOrder
    finished_at?: SortOrder
  }

  export type quiz_attemptsAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type quiz_attemptsMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    quiz_id?: SortOrder
    student_id?: SortOrder
    score?: SortOrder
    started_at?: SortOrder
    finished_at?: SortOrder
  }

  export type quiz_attemptsMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    quiz_id?: SortOrder
    student_id?: SortOrder
    score?: SortOrder
    started_at?: SortOrder
    finished_at?: SortOrder
  }

  export type quiz_attemptsSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type Quiz_attemptsListRelationFilter = {
    every?: quiz_attemptsWhereInput
    some?: quiz_attemptsWhereInput
    none?: quiz_attemptsWhereInput
  }

  export type quiz_attemptsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type quizzesCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    class_id?: SortOrder
    title?: SortOrder
    created_at?: SortOrder
  }

  export type quizzesMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    class_id?: SortOrder
    title?: SortOrder
    created_at?: SortOrder
  }

  export type quizzesMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    class_id?: SortOrder
    title?: SortOrder
    created_at?: SortOrder
  }

  export type AssignmentsScalarRelationFilter = {
    is?: assignmentsWhereInput
    isNot?: assignmentsWhereInput
  }

  export type submissionsAssignment_idStudent_idCompoundUniqueInput = {
    assignment_id: string
    student_id: string
  }

  export type submissionsCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    assignment_id?: SortOrder
    student_id?: SortOrder
    content?: SortOrder
    submitted_at?: SortOrder
    score?: SortOrder
    feedback?: SortOrder
  }

  export type submissionsAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type submissionsMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    assignment_id?: SortOrder
    student_id?: SortOrder
    content?: SortOrder
    submitted_at?: SortOrder
    score?: SortOrder
    feedback?: SortOrder
  }

  export type submissionsMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    assignment_id?: SortOrder
    student_id?: SortOrder
    content?: SortOrder
    submitted_at?: SortOrder
    score?: SortOrder
    feedback?: SortOrder
  }

  export type submissionsSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type submissionsCreateNestedManyWithoutAssignmentsInput = {
    create?: XOR<submissionsCreateWithoutAssignmentsInput, submissionsUncheckedCreateWithoutAssignmentsInput> | submissionsCreateWithoutAssignmentsInput[] | submissionsUncheckedCreateWithoutAssignmentsInput[]
    connectOrCreate?: submissionsCreateOrConnectWithoutAssignmentsInput | submissionsCreateOrConnectWithoutAssignmentsInput[]
    createMany?: submissionsCreateManyAssignmentsInputEnvelope
    connect?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
  }

  export type submissionsUncheckedCreateNestedManyWithoutAssignmentsInput = {
    create?: XOR<submissionsCreateWithoutAssignmentsInput, submissionsUncheckedCreateWithoutAssignmentsInput> | submissionsCreateWithoutAssignmentsInput[] | submissionsUncheckedCreateWithoutAssignmentsInput[]
    connectOrCreate?: submissionsCreateOrConnectWithoutAssignmentsInput | submissionsCreateOrConnectWithoutAssignmentsInput[]
    createMany?: submissionsCreateManyAssignmentsInputEnvelope
    connect?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
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

  export type submissionsUpdateManyWithoutAssignmentsNestedInput = {
    create?: XOR<submissionsCreateWithoutAssignmentsInput, submissionsUncheckedCreateWithoutAssignmentsInput> | submissionsCreateWithoutAssignmentsInput[] | submissionsUncheckedCreateWithoutAssignmentsInput[]
    connectOrCreate?: submissionsCreateOrConnectWithoutAssignmentsInput | submissionsCreateOrConnectWithoutAssignmentsInput[]
    upsert?: submissionsUpsertWithWhereUniqueWithoutAssignmentsInput | submissionsUpsertWithWhereUniqueWithoutAssignmentsInput[]
    createMany?: submissionsCreateManyAssignmentsInputEnvelope
    set?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    disconnect?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    delete?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    connect?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    update?: submissionsUpdateWithWhereUniqueWithoutAssignmentsInput | submissionsUpdateWithWhereUniqueWithoutAssignmentsInput[]
    updateMany?: submissionsUpdateManyWithWhereWithoutAssignmentsInput | submissionsUpdateManyWithWhereWithoutAssignmentsInput[]
    deleteMany?: submissionsScalarWhereInput | submissionsScalarWhereInput[]
  }

  export type submissionsUncheckedUpdateManyWithoutAssignmentsNestedInput = {
    create?: XOR<submissionsCreateWithoutAssignmentsInput, submissionsUncheckedCreateWithoutAssignmentsInput> | submissionsCreateWithoutAssignmentsInput[] | submissionsUncheckedCreateWithoutAssignmentsInput[]
    connectOrCreate?: submissionsCreateOrConnectWithoutAssignmentsInput | submissionsCreateOrConnectWithoutAssignmentsInput[]
    upsert?: submissionsUpsertWithWhereUniqueWithoutAssignmentsInput | submissionsUpsertWithWhereUniqueWithoutAssignmentsInput[]
    createMany?: submissionsCreateManyAssignmentsInputEnvelope
    set?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    disconnect?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    delete?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    connect?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    update?: submissionsUpdateWithWhereUniqueWithoutAssignmentsInput | submissionsUpdateWithWhereUniqueWithoutAssignmentsInput[]
    updateMany?: submissionsUpdateManyWithWhereWithoutAssignmentsInput | submissionsUpdateManyWithWhereWithoutAssignmentsInput[]
    deleteMany?: submissionsScalarWhereInput | submissionsScalarWhereInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type quizzesCreateNestedOneWithoutQuiz_attemptsInput = {
    create?: XOR<quizzesCreateWithoutQuiz_attemptsInput, quizzesUncheckedCreateWithoutQuiz_attemptsInput>
    connectOrCreate?: quizzesCreateOrConnectWithoutQuiz_attemptsInput
    connect?: quizzesWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type quizzesUpdateOneRequiredWithoutQuiz_attemptsNestedInput = {
    create?: XOR<quizzesCreateWithoutQuiz_attemptsInput, quizzesUncheckedCreateWithoutQuiz_attemptsInput>
    connectOrCreate?: quizzesCreateOrConnectWithoutQuiz_attemptsInput
    upsert?: quizzesUpsertWithoutQuiz_attemptsInput
    connect?: quizzesWhereUniqueInput
    update?: XOR<XOR<quizzesUpdateToOneWithWhereWithoutQuiz_attemptsInput, quizzesUpdateWithoutQuiz_attemptsInput>, quizzesUncheckedUpdateWithoutQuiz_attemptsInput>
  }

  export type quiz_attemptsCreateNestedManyWithoutQuizzesInput = {
    create?: XOR<quiz_attemptsCreateWithoutQuizzesInput, quiz_attemptsUncheckedCreateWithoutQuizzesInput> | quiz_attemptsCreateWithoutQuizzesInput[] | quiz_attemptsUncheckedCreateWithoutQuizzesInput[]
    connectOrCreate?: quiz_attemptsCreateOrConnectWithoutQuizzesInput | quiz_attemptsCreateOrConnectWithoutQuizzesInput[]
    createMany?: quiz_attemptsCreateManyQuizzesInputEnvelope
    connect?: quiz_attemptsWhereUniqueInput | quiz_attemptsWhereUniqueInput[]
  }

  export type quiz_attemptsUncheckedCreateNestedManyWithoutQuizzesInput = {
    create?: XOR<quiz_attemptsCreateWithoutQuizzesInput, quiz_attemptsUncheckedCreateWithoutQuizzesInput> | quiz_attemptsCreateWithoutQuizzesInput[] | quiz_attemptsUncheckedCreateWithoutQuizzesInput[]
    connectOrCreate?: quiz_attemptsCreateOrConnectWithoutQuizzesInput | quiz_attemptsCreateOrConnectWithoutQuizzesInput[]
    createMany?: quiz_attemptsCreateManyQuizzesInputEnvelope
    connect?: quiz_attemptsWhereUniqueInput | quiz_attemptsWhereUniqueInput[]
  }

  export type quiz_attemptsUpdateManyWithoutQuizzesNestedInput = {
    create?: XOR<quiz_attemptsCreateWithoutQuizzesInput, quiz_attemptsUncheckedCreateWithoutQuizzesInput> | quiz_attemptsCreateWithoutQuizzesInput[] | quiz_attemptsUncheckedCreateWithoutQuizzesInput[]
    connectOrCreate?: quiz_attemptsCreateOrConnectWithoutQuizzesInput | quiz_attemptsCreateOrConnectWithoutQuizzesInput[]
    upsert?: quiz_attemptsUpsertWithWhereUniqueWithoutQuizzesInput | quiz_attemptsUpsertWithWhereUniqueWithoutQuizzesInput[]
    createMany?: quiz_attemptsCreateManyQuizzesInputEnvelope
    set?: quiz_attemptsWhereUniqueInput | quiz_attemptsWhereUniqueInput[]
    disconnect?: quiz_attemptsWhereUniqueInput | quiz_attemptsWhereUniqueInput[]
    delete?: quiz_attemptsWhereUniqueInput | quiz_attemptsWhereUniqueInput[]
    connect?: quiz_attemptsWhereUniqueInput | quiz_attemptsWhereUniqueInput[]
    update?: quiz_attemptsUpdateWithWhereUniqueWithoutQuizzesInput | quiz_attemptsUpdateWithWhereUniqueWithoutQuizzesInput[]
    updateMany?: quiz_attemptsUpdateManyWithWhereWithoutQuizzesInput | quiz_attemptsUpdateManyWithWhereWithoutQuizzesInput[]
    deleteMany?: quiz_attemptsScalarWhereInput | quiz_attemptsScalarWhereInput[]
  }

  export type quiz_attemptsUncheckedUpdateManyWithoutQuizzesNestedInput = {
    create?: XOR<quiz_attemptsCreateWithoutQuizzesInput, quiz_attemptsUncheckedCreateWithoutQuizzesInput> | quiz_attemptsCreateWithoutQuizzesInput[] | quiz_attemptsUncheckedCreateWithoutQuizzesInput[]
    connectOrCreate?: quiz_attemptsCreateOrConnectWithoutQuizzesInput | quiz_attemptsCreateOrConnectWithoutQuizzesInput[]
    upsert?: quiz_attemptsUpsertWithWhereUniqueWithoutQuizzesInput | quiz_attemptsUpsertWithWhereUniqueWithoutQuizzesInput[]
    createMany?: quiz_attemptsCreateManyQuizzesInputEnvelope
    set?: quiz_attemptsWhereUniqueInput | quiz_attemptsWhereUniqueInput[]
    disconnect?: quiz_attemptsWhereUniqueInput | quiz_attemptsWhereUniqueInput[]
    delete?: quiz_attemptsWhereUniqueInput | quiz_attemptsWhereUniqueInput[]
    connect?: quiz_attemptsWhereUniqueInput | quiz_attemptsWhereUniqueInput[]
    update?: quiz_attemptsUpdateWithWhereUniqueWithoutQuizzesInput | quiz_attemptsUpdateWithWhereUniqueWithoutQuizzesInput[]
    updateMany?: quiz_attemptsUpdateManyWithWhereWithoutQuizzesInput | quiz_attemptsUpdateManyWithWhereWithoutQuizzesInput[]
    deleteMany?: quiz_attemptsScalarWhereInput | quiz_attemptsScalarWhereInput[]
  }

  export type assignmentsCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<assignmentsCreateWithoutSubmissionsInput, assignmentsUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: assignmentsCreateOrConnectWithoutSubmissionsInput
    connect?: assignmentsWhereUniqueInput
  }

  export type assignmentsUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<assignmentsCreateWithoutSubmissionsInput, assignmentsUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: assignmentsCreateOrConnectWithoutSubmissionsInput
    upsert?: assignmentsUpsertWithoutSubmissionsInput
    connect?: assignmentsWhereUniqueInput
    update?: XOR<XOR<assignmentsUpdateToOneWithWhereWithoutSubmissionsInput, assignmentsUpdateWithoutSubmissionsInput>, assignmentsUncheckedUpdateWithoutSubmissionsInput>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type submissionsCreateWithoutAssignmentsInput = {
    id?: string
    tenant_id: string
    student_id: string
    content?: string | null
    submitted_at?: Date | string | null
    score?: number | null
    feedback?: string | null
  }

  export type submissionsUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    tenant_id: string
    student_id: string
    content?: string | null
    submitted_at?: Date | string | null
    score?: number | null
    feedback?: string | null
  }

  export type submissionsCreateOrConnectWithoutAssignmentsInput = {
    where: submissionsWhereUniqueInput
    create: XOR<submissionsCreateWithoutAssignmentsInput, submissionsUncheckedCreateWithoutAssignmentsInput>
  }

  export type submissionsCreateManyAssignmentsInputEnvelope = {
    data: submissionsCreateManyAssignmentsInput | submissionsCreateManyAssignmentsInput[]
    skipDuplicates?: boolean
  }

  export type submissionsUpsertWithWhereUniqueWithoutAssignmentsInput = {
    where: submissionsWhereUniqueInput
    update: XOR<submissionsUpdateWithoutAssignmentsInput, submissionsUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<submissionsCreateWithoutAssignmentsInput, submissionsUncheckedCreateWithoutAssignmentsInput>
  }

  export type submissionsUpdateWithWhereUniqueWithoutAssignmentsInput = {
    where: submissionsWhereUniqueInput
    data: XOR<submissionsUpdateWithoutAssignmentsInput, submissionsUncheckedUpdateWithoutAssignmentsInput>
  }

  export type submissionsUpdateManyWithWhereWithoutAssignmentsInput = {
    where: submissionsScalarWhereInput
    data: XOR<submissionsUpdateManyMutationInput, submissionsUncheckedUpdateManyWithoutAssignmentsInput>
  }

  export type submissionsScalarWhereInput = {
    AND?: submissionsScalarWhereInput | submissionsScalarWhereInput[]
    OR?: submissionsScalarWhereInput[]
    NOT?: submissionsScalarWhereInput | submissionsScalarWhereInput[]
    id?: UuidFilter<"submissions"> | string
    tenant_id?: UuidFilter<"submissions"> | string
    assignment_id?: UuidFilter<"submissions"> | string
    student_id?: UuidFilter<"submissions"> | string
    content?: StringNullableFilter<"submissions"> | string | null
    submitted_at?: DateTimeNullableFilter<"submissions"> | Date | string | null
    score?: FloatNullableFilter<"submissions"> | number | null
    feedback?: StringNullableFilter<"submissions"> | string | null
  }

  export type quizzesCreateWithoutQuiz_attemptsInput = {
    id?: string
    tenant_id: string
    class_id: string
    title: string
    created_at?: Date | string | null
  }

  export type quizzesUncheckedCreateWithoutQuiz_attemptsInput = {
    id?: string
    tenant_id: string
    class_id: string
    title: string
    created_at?: Date | string | null
  }

  export type quizzesCreateOrConnectWithoutQuiz_attemptsInput = {
    where: quizzesWhereUniqueInput
    create: XOR<quizzesCreateWithoutQuiz_attemptsInput, quizzesUncheckedCreateWithoutQuiz_attemptsInput>
  }

  export type quizzesUpsertWithoutQuiz_attemptsInput = {
    update: XOR<quizzesUpdateWithoutQuiz_attemptsInput, quizzesUncheckedUpdateWithoutQuiz_attemptsInput>
    create: XOR<quizzesCreateWithoutQuiz_attemptsInput, quizzesUncheckedCreateWithoutQuiz_attemptsInput>
    where?: quizzesWhereInput
  }

  export type quizzesUpdateToOneWithWhereWithoutQuiz_attemptsInput = {
    where?: quizzesWhereInput
    data: XOR<quizzesUpdateWithoutQuiz_attemptsInput, quizzesUncheckedUpdateWithoutQuiz_attemptsInput>
  }

  export type quizzesUpdateWithoutQuiz_attemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type quizzesUncheckedUpdateWithoutQuiz_attemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type quiz_attemptsCreateWithoutQuizzesInput = {
    id?: string
    tenant_id: string
    student_id: string
    score?: number | null
    started_at?: Date | string | null
    finished_at?: Date | string | null
  }

  export type quiz_attemptsUncheckedCreateWithoutQuizzesInput = {
    id?: string
    tenant_id: string
    student_id: string
    score?: number | null
    started_at?: Date | string | null
    finished_at?: Date | string | null
  }

  export type quiz_attemptsCreateOrConnectWithoutQuizzesInput = {
    where: quiz_attemptsWhereUniqueInput
    create: XOR<quiz_attemptsCreateWithoutQuizzesInput, quiz_attemptsUncheckedCreateWithoutQuizzesInput>
  }

  export type quiz_attemptsCreateManyQuizzesInputEnvelope = {
    data: quiz_attemptsCreateManyQuizzesInput | quiz_attemptsCreateManyQuizzesInput[]
    skipDuplicates?: boolean
  }

  export type quiz_attemptsUpsertWithWhereUniqueWithoutQuizzesInput = {
    where: quiz_attemptsWhereUniqueInput
    update: XOR<quiz_attemptsUpdateWithoutQuizzesInput, quiz_attemptsUncheckedUpdateWithoutQuizzesInput>
    create: XOR<quiz_attemptsCreateWithoutQuizzesInput, quiz_attemptsUncheckedCreateWithoutQuizzesInput>
  }

  export type quiz_attemptsUpdateWithWhereUniqueWithoutQuizzesInput = {
    where: quiz_attemptsWhereUniqueInput
    data: XOR<quiz_attemptsUpdateWithoutQuizzesInput, quiz_attemptsUncheckedUpdateWithoutQuizzesInput>
  }

  export type quiz_attemptsUpdateManyWithWhereWithoutQuizzesInput = {
    where: quiz_attemptsScalarWhereInput
    data: XOR<quiz_attemptsUpdateManyMutationInput, quiz_attemptsUncheckedUpdateManyWithoutQuizzesInput>
  }

  export type quiz_attemptsScalarWhereInput = {
    AND?: quiz_attemptsScalarWhereInput | quiz_attemptsScalarWhereInput[]
    OR?: quiz_attemptsScalarWhereInput[]
    NOT?: quiz_attemptsScalarWhereInput | quiz_attemptsScalarWhereInput[]
    id?: UuidFilter<"quiz_attempts"> | string
    tenant_id?: UuidFilter<"quiz_attempts"> | string
    quiz_id?: UuidFilter<"quiz_attempts"> | string
    student_id?: UuidFilter<"quiz_attempts"> | string
    score?: FloatNullableFilter<"quiz_attempts"> | number | null
    started_at?: DateTimeNullableFilter<"quiz_attempts"> | Date | string | null
    finished_at?: DateTimeNullableFilter<"quiz_attempts"> | Date | string | null
  }

  export type assignmentsCreateWithoutSubmissionsInput = {
    id?: string
    tenant_id: string
    class_id: string
    title: string
    description?: string | null
    deadline?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type assignmentsUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    tenant_id: string
    class_id: string
    title: string
    description?: string | null
    deadline?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type assignmentsCreateOrConnectWithoutSubmissionsInput = {
    where: assignmentsWhereUniqueInput
    create: XOR<assignmentsCreateWithoutSubmissionsInput, assignmentsUncheckedCreateWithoutSubmissionsInput>
  }

  export type assignmentsUpsertWithoutSubmissionsInput = {
    update: XOR<assignmentsUpdateWithoutSubmissionsInput, assignmentsUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<assignmentsCreateWithoutSubmissionsInput, assignmentsUncheckedCreateWithoutSubmissionsInput>
    where?: assignmentsWhereInput
  }

  export type assignmentsUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: assignmentsWhereInput
    data: XOR<assignmentsUpdateWithoutSubmissionsInput, assignmentsUncheckedUpdateWithoutSubmissionsInput>
  }

  export type assignmentsUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type assignmentsUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type submissionsCreateManyAssignmentsInput = {
    id?: string
    tenant_id: string
    student_id: string
    content?: string | null
    submitted_at?: Date | string | null
    score?: number | null
    feedback?: string | null
  }

  export type submissionsUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type submissionsUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type submissionsUncheckedUpdateManyWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type quiz_attemptsCreateManyQuizzesInput = {
    id?: string
    tenant_id: string
    student_id: string
    score?: number | null
    started_at?: Date | string | null
    finished_at?: Date | string | null
  }

  export type quiz_attemptsUpdateWithoutQuizzesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type quiz_attemptsUncheckedUpdateWithoutQuizzesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type quiz_attemptsUncheckedUpdateManyWithoutQuizzesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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