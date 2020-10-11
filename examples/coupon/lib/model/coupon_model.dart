class CounponModel {
  TbkDgMaterialOptionalResponse tbkDgMaterialOptionalResponse;

  CounponModel({this.tbkDgMaterialOptionalResponse});

  CounponModel.fromJson(Map<String, dynamic> json) {
    tbkDgMaterialOptionalResponse =
        json['tbk_dg_material_optional_response'] != null
            ? new TbkDgMaterialOptionalResponse.fromJson(
                json['tbk_dg_material_optional_response'])
            : null;
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    if (this.tbkDgMaterialOptionalResponse != null) {
      data['tbk_dg_material_optional_response'] =
          this.tbkDgMaterialOptionalResponse.toJson();
    }
    return data;
  }
}

class TbkDgMaterialOptionalResponse {
  ResultList resultList;
  String requestId;

  TbkDgMaterialOptionalResponse({this.resultList, this.requestId});

  TbkDgMaterialOptionalResponse.fromJson(Map<String, dynamic> json) {
    resultList = json['result_list'] != null
        ? new ResultList.fromJson(json['result_list'])
        : null;
    requestId = json['request_id'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    if (this.resultList != null) {
      data['result_list'] = this.resultList.toJson();
    }
    data['request_id'] = this.requestId;
    return data;
  }
}

class ResultList {
  List<MapData> mapData;

  ResultList({this.mapData});

  ResultList.fromJson(Map<String, dynamic> json) {
    if (json['map_data'] != null) {
      mapData = new List<MapData>();
      json['map_data'].forEach((v) {
        mapData.add(new MapData.fromJson(v));
      });
    }
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    if (this.mapData != null) {
      data['map_data'] = this.mapData.map((v) => v.toJson()).toList();
    }
    return data;
  }
}

class MapData {
  int categoryId;
  String categoryName;
  String commissionRate;
  String couponAmount;
  String couponEndTime;
  String couponInfo;
  int couponRemainCount;
  String couponShareUrl;
  String couponStartTime;
  int couponTotalCount;
  String itemDescription;
  int itemId;
  String itemUrl;
  int numIid;
  String pictUrl;
  int sellerId;
  String shopTitle;
  SmallImages smallImages;
  String title;
  String url;
  int userType;
  int volume;
  String zkFinalPrice;
  bool isExpand = false;

  MapData(
      {this.categoryId,
      this.categoryName,
      this.commissionRate,
      this.couponAmount,
      this.couponEndTime,
      this.couponInfo,
      this.couponRemainCount,
      this.couponShareUrl,
      this.couponStartTime,
      this.couponTotalCount,
      this.itemDescription,
      this.itemId,
      this.itemUrl,
      this.numIid,
      this.pictUrl,
      this.sellerId,
      this.shopTitle,
      this.smallImages,
      this.title,
      this.url,
      this.userType,
      this.volume,
      this.zkFinalPrice});

  MapData.fromJson(Map<String, dynamic> json) {
    categoryId = json['category_id'];
    categoryName = json['category_name'];
    commissionRate = json['commission_rate'];
    couponAmount = json['coupon_amount'];
    couponEndTime = json['coupon_end_time'];
    couponInfo = json['coupon_info'];
    couponRemainCount = json['coupon_remain_count'];
    couponShareUrl = json['coupon_share_url'];
    couponStartTime = json['coupon_start_time'];
    couponTotalCount = json['coupon_total_count'];
    itemDescription = json['item_description'];
    itemId = json['item_id'];
    itemUrl = json['item_url'];
    numIid = json['num_iid'];
    pictUrl = json['pict_url'];
    sellerId = json['seller_id'];
    shopTitle = json['shop_title'];
    smallImages = json['small_images'] != null
        ? new SmallImages.fromJson(json['small_images'])
        : null;
    title = json['title'];
    url = json['url'];
    userType = json['user_type'];
    volume = json['volume'];
    zkFinalPrice = json['zk_final_price'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['category_id'] = this.categoryId;
    data['category_name'] = this.categoryName;
    data['commission_rate'] = this.commissionRate;
    data['coupon_amount'] = this.couponAmount;
    data['coupon_end_time'] = this.couponEndTime;
    data['coupon_info'] = this.couponInfo;
    data['coupon_remain_count'] = this.couponRemainCount;
    data['coupon_share_url'] = this.couponShareUrl;
    data['coupon_start_time'] = this.couponStartTime;
    data['coupon_total_count'] = this.couponTotalCount;
    data['item_description'] = this.itemDescription;
    data['item_id'] = this.itemId;
    data['item_url'] = this.itemUrl;
    data['num_iid'] = this.numIid;
    data['pict_url'] = this.pictUrl;
    data['seller_id'] = this.sellerId;
    data['shop_title'] = this.shopTitle;
    if (this.smallImages != null) {
      data['small_images'] = this.smallImages.toJson();
    }
    data['title'] = this.title;
    data['url'] = this.url;
    data['user_type'] = this.userType;
    data['volume'] = this.volume;
    data['zk_final_price'] = this.zkFinalPrice;
    return data;
  }
}

class SmallImages {
  List<String> string;

  SmallImages({this.string});

  SmallImages.fromJson(Map<String, dynamic> json) {
    if (json['string'] == null || json == null || json['string'] == ""){
      string = [];
    }else{
      string = json['string'].cast<String>();
    }
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    
    data['string'] = this.string;
    return data;
  }
}