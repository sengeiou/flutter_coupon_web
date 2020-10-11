import 'package:flutter_web/material.dart';
import 'package:hkbook/page/mine/mine_page.dart';
import 'package:hkbook/public.dart';
import 'package:hkbook/app/root_scene.dart';

final RouteObserver<PageRoute> routeObserver = RouteObserver<PageRoute>();

class AppScene extends StatelessWidget {
  @override
  Widget build(BuildContext context) {

    // final router = Router();
    // //注入
    // Routes.configureRouter(router);
    // //静态化
    // Application.router = router;    
    return MaterialApp(
      //引入
      // onGenerateRoute: Application.router.generator,
      title: '淘优惠券',
      navigatorObservers: [routeObserver],
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primaryColor: Colors.white,
        dividerColor: Color(0xffeeeeee),
        scaffoldBackgroundColor: SQColor.paper,
        textTheme: TextTheme(body1: TextStyle(color: SQColor.darkGray)),
      ),
      home: RootScene(),
    );
  }
}
