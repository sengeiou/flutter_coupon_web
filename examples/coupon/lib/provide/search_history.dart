import 'dart:convert';
import 'package:flutter_web/material.dart';
import 'package:hkbook/ThridLib/shared_preferences-0.5.6/lib/shared_preferences.dart';

class HistoryProvide with ChangeNotifier{
  String historyString = '[]';
  List<String> historyList = [];

  save(history) async{
    SharedPreferences prefs = await SharedPreferences.getInstance();
    historyString =  prefs.getString("historyString");
    var t = historyString == null ?[]:json.decode(historyString.toString());
    List<String> tl = (t as List).cast();
    bool isHave = false;
    tl.forEach((item){
      if (item == history){
        isHave = true;
      }
    });
    if(!isHave){
      tl.add(history);
    }
    historyString = json.encode(tl).toString();
    print(historyString);
    prefs.setString("historyString", historyString);
    await getHistory();
  }

  remove() async{
    SharedPreferences prefs = await SharedPreferences.getInstance();
    prefs.remove('historyString');
    historyList = [];
    notifyListeners();
  }

  getHistory() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    historyString =  prefs.getString("historyString");
    print(historyString);
    historyList = [];
    if (historyString == null){
      historyList = [];  
      print('----');
    }else{
      var data = json.decode(historyString.toString());
      print(data);
      List <String> t = (data as List).cast();
      t.forEach((item){
        historyList.add(item);
      });
    }
    notifyListeners();
  }

}