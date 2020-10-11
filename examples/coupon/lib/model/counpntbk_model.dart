class TpwdCreate {
  TbkTpwdCreateResponse tbkTpwdCreateResponse;

  TpwdCreate({this.tbkTpwdCreateResponse});

  TpwdCreate.fromJson(Map<String, dynamic> json) {
    tbkTpwdCreateResponse = json['tbk_tpwd_create_response'] != null
        ? new TbkTpwdCreateResponse.fromJson(json['tbk_tpwd_create_response'])
        : null;
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    if (this.tbkTpwdCreateResponse != null) {
      data['tbk_tpwd_create_response'] = this.tbkTpwdCreateResponse.toJson();
    }
    return data;
  }
}

class TbkTpwdCreateResponse {
  Data data;

  TbkTpwdCreateResponse({this.data});

  TbkTpwdCreateResponse.fromJson(Map<String, dynamic> json) {
    data = json['data'] != null ? new Data.fromJson(json['data']) : null;
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    if (this.data != null) {
      data['data'] = this.data.toJson();
    }
    return data;
  }
}

class Data {
  String model;

  Data({this.model});

  Data.fromJson(Map<String, dynamic> json) {
    model = json['model'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['model'] = this.model;
    return data;
  }
}