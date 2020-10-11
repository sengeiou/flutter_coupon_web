import 'package:flutter_web/material.dart';

class CurrentIndexProvice with ChangeNotifier{
  int currentIndex = 0;
  changIdex(int nindex){
    currentIndex = nindex;
    notifyListeners();
  } 
}