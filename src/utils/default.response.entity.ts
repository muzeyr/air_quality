import { ApiProperty } from '@nestjs/swagger';

export class DefaultResponse<T> {
  @ApiProperty()
  offset: number;
  @ApiProperty()
  limit: number;
  @ApiProperty()
  count: number;
  @ApiProperty()
  total: number;

  @ApiProperty()
  items: T;

  static toResponse<T>(result: T): DefaultResponse<T> {
    const defaultResponse = new DefaultResponse<T>();
    defaultResponse.items = result;
    if (result instanceof Array) {
      defaultResponse.total = result.length;
    }
    return defaultResponse;
  }
}

export class DefaultArrayResponse<T> {
  @ApiProperty()
  statusCode: number;
  @ApiProperty()
  error: any;
  @ApiProperty()
  items?: T[];
  @ApiProperty()
  item?: T;

  static toResponse<T>(result: T): DefaultArrayResponse<T> {
    const defaultResponse = new DefaultArrayResponse<T>();
    defaultResponse.statusCode = 200;
    defaultResponse.error = {};
    defaultResponse.item = result;
    return defaultResponse;
  }

  static toArraySpecialResponse<T>(items: T[]) {
    const defaultResponse = new DefaultArrayResponse<T>();
    defaultResponse.statusCode = 200;
    defaultResponse.error = {};
    defaultResponse.items = items;
    return defaultResponse;
  }
}
