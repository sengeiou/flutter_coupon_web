import 'dart:convert';

class CategoryModel {
  String statusCode;
  String message;
  List<Data> data;

  CategoryModel({this.statusCode, this.message, this.data});

  CategoryModel.fromJson(Map<String, dynamic> json) {
    statusCode = json['status_code'];
    message = json['message'];
    if (json['data'] != null) {
      data = new List<Data>();
      json['data'].forEach((v) {
        data.add(new Data.fromJson(v));
      });
    }
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['status_code'] = this.statusCode;
    data['message'] = this.message;
    if (this.data != null) {
      data['data'] = this.data.map((v) => v.toJson()).toList();
    }
    return data;
  }
}

class Data {
  int id;
  String iconUrl;
  String name;
  int order;
  int status;
  String itemsCount;
  String createdAt;
  String updatedAt;
  String deletedAt;
  List<Subcategories> subcategories;

  Data(
      {this.id,
      this.iconUrl,
      this.name,
      this.order,
      this.status,
      this.itemsCount,
      this.createdAt,
      this.updatedAt,
      this.deletedAt,
      this.subcategories});

  Data.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    iconUrl = json['icon_url'];
    name = json['name'];
    order = json['order'];
    status = json['status'];
    itemsCount = json['items_count'];
    createdAt = json['created_at'];
    updatedAt = json['updated_at'];
    deletedAt = json['deleted_at'];
    if (json['subcategories'] != null) {
      subcategories = new List<Subcategories>();
      json['subcategories'].forEach((v) {
        subcategories.add(new Subcategories.fromJson(v));
      });
    }
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['id'] = this.id;
    data['icon_url'] = this.iconUrl;
    data['name'] = this.name;
    data['order'] = this.order;
    data['status'] = this.status;
    data['items_count'] = this.itemsCount;
    data['created_at'] = this.createdAt;
    data['updated_at'] = this.updatedAt;
    data['deleted_at'] = this.deletedAt;
    if (this.subcategories != null) {
      data['subcategories'] =
          this.subcategories.map((v) => v.toJson()).toList();
    }
    return data;
  }
}

class Subcategories {
  int id;
  int parentId;
  String iconUrl;
  String name;
  int order;
  int status;
  int itemsCount;
  String createdAt;
  String updatedAt;
  String deletedAt;

  Subcategories(
      {this.id,
      this.parentId,
      this.iconUrl,
      this.name,
      this.order,
      this.status,
      this.itemsCount,
      this.createdAt,
      this.updatedAt,
      this.deletedAt});

  Subcategories.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    parentId = json['parent_id'];
    iconUrl = json['icon_url'];
    name = json['name'];
    order = json['order'];
    status = json['status'];
    itemsCount = json['items_count'];
    createdAt = json['created_at'];
    updatedAt = json['updated_at'];
    deletedAt = json['deleted_at'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['id'] = this.id;
    data['parent_id'] = this.parentId;
    data['icon_url'] = this.iconUrl;
    data['name'] = this.name;
    data['order'] = this.order;
    data['status'] = this.status;
    data['items_count'] = this.itemsCount;
    data['created_at'] = this.createdAt;
    data['updated_at'] = this.updatedAt;
    data['deleted_at'] = this.deletedAt;
    return data;
  }
}

