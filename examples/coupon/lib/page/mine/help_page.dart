import 'package:flutter_web/material.dart';
import 'package:hkbook/public.dart';

class HelpPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('帮助'),
        centerTitle: true,
      ),
      body: ListView(
      children: <Widget>[
        Container(
          child:Image.asset('couponhelp.png'),
          width: Screen.width,
          height: Screen.height,
        )
      ],
    ),
    ) ;
  }
}