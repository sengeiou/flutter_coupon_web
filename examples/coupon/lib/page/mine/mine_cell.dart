import 'package:flutter_web/material.dart';
import 'package:hkbook/ThridLib/flutter_screenutil-0.7.0/lib/flutter_screenutil.dart';

import '../../public.dart';

class MeCell extends StatelessWidget {
  final VoidCallback onPressed;
  final String iconName;
  final String title;

  MeCell({this.title, this.iconName, this.onPressed});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onPressed,
      child: Container(
        color: Colors.white,
        child: Column(
          children: <Widget>[
            Container(
              color: SQColor.white,
              height: ScreenUtil().setHeight(100),
              padding: EdgeInsets.symmetric(horizontal: ScreenUtil().setWidth(20)),
              child: Row(
                children: <Widget>[
                  Container(
                    width: ScreenUtil().setHeight(45),
                    child: Image.asset(iconName),
                  ),
                  SizedBox(width: 20),
                  Text(title, style: TextStyle(fontSize: ScreenUtil().setSp(28))),
                  Expanded(child: Container()),
                  // Image.asset('arrow_right.png'),
                ],
              ),
            ),
            Container(
              height: 1,
              color: SQColor.lightGray,
              margin: EdgeInsets.only(left: 60),
            ),
          ],
        ),
      ),
    );
  }
}
