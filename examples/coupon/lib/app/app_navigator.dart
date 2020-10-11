import 'package:flutter_web/material.dart';
import 'package:hkbook/model/coupon_model.dart';
import 'package:hkbook/page/Cricle/circel_more_page.dart';
import 'package:hkbook/page/category/search_goods_page.dart';
import 'package:hkbook/page/category/search_mater_page.dart';
import 'package:hkbook/page/category/search_result.dart';
import 'package:hkbook/page/details/details_page.dart';
import 'package:hkbook/page/mine/aboutWe_page.dart';
import 'package:hkbook/page/mine/clearCache_page.dart';
import 'package:hkbook/page/mine/help_page.dart';
import 'package:hkbook/public.dart';
import 'package:hkbook/widget/browser/browser.dart';
// import 'package:hkbook/widget/photoView/photo_gallery.dart';


class AppNavigator {
  static push(BuildContext context, Widget scene) {
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (BuildContext context) => scene,
      ),
    );
  }

  static pushNovelDetail(BuildContext context, MapData model) {
    AppNavigator.push(context, DetailsPage(model));
  }

  static pushCricelMorePage(BuildContext context) {
    AppNavigator.push(context, CricelMorePage());
  }
  static pushMaterPage(BuildContext context,String key,String t) {
    AppNavigator.push(context, SearchMaterResult(key,t));
  }


  


 static pushPhoto(BuildContext context,int index,List list) {
    // AppNavigator.push(context, PhotpGalleryPage( index: index, photoList: list,));
  }

  static pushSearch(BuildContext context) {
    AppNavigator.push(context, SearchGoodsPage());
  }

   static pushClearCPage(BuildContext context) {
    AppNavigator.push(context, ClearCPage());
  }

  static pushAboutWePage(BuildContext context) {
    AppNavigator.push(context, AboutWePage());
  }

   static pushBrowser(BuildContext context,url,title) {
    AppNavigator.push(context, Browser(url:url,title:title));
  }
   static pushHelp(BuildContext context) {
    AppNavigator.push(context, HelpPage());
  }

 static pushSearchResult(BuildContext context, String key) {
    AppNavigator.push(context, SearchResult(key));
  }

  


/*
  static pushNovelDetail(BuildContext context, Novel novel) {
    AppNavigator.push(context, NovelDetailScene(novel.id));
  }

  static pushLogin(BuildContext context) {
    Navigator.push(context, MaterialPageRoute(builder: (context) {
      return LoginScene();
    }));
  }

  static pushWeb(BuildContext context, String url, String title) {
    Navigator.push(context, MaterialPageRoute(builder: (context) {
      return WebScene(url: url, title: title);
    }));
  }

  static pushReader(BuildContext context, int articleId) {
    Navigator.push(context, MaterialPageRoute(builder: (context) {
      return ReaderScene(articleId: articleId);
    }));
  }*/
}
