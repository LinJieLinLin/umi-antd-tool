declare namespace API {
  type ContactDto = {
    _id: string;
    letter?: string;
    name: string;
    phone?: string;
    wechat?: string;
    status: number;
    create_time?: number;
    uid?: string;
  };

  type ContactRes = {
    code: number;
    data: { list: ContactDto[] };
    tk?: string;
  };

  type CreateRchyDto = {
    id: number;
    password: string;
    a: number;
  };

  type RchyControllerFindAllParams = {
    id: number;
    password: string;
    a: number;
  };

  type RchyControllerFindOneParams = {
    id: string;
  };

  type RchyControllerRemoveParams = {
    id: string;
  };

  type RchyControllerUpdateParams = {
    id: string;
  };

  type UpdateRchyDto = {};
}
