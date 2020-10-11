import 'package:flutter_web/material.dart';
import 'package:hkbook/model/category_model.dart';


class ChildCategory with ChangeNotifier{
  List<Subcategories> cl = [];
  getChildCategory(List list){
    cl = list;
    notifyListeners();
  }

}
