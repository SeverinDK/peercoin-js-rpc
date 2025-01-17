import { merge } from 'lodash';

export class PeercoinRPCError extends Error {
  /**
   * Whether the command executed. true is definiyely yes, false if definitely no, else null
   */
  public readonly executed: boolean | null;

  public data: any;

  constructor(inner: Error & { data?: any }, executed: boolean | null, data?: any) {
    super(inner.message);

    this.executed = executed;
    this.data = merge(
      {},
      inner.data,
      {
        PeercoinRPC: {
          executed,
        },
      },
      data
    );
  }
}
