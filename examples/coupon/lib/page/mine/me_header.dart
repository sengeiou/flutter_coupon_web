import 'package:flutter_web/material.dart';
import 'package:hkbook/ThridLib/flutter_screenutil-0.7.0/lib/flutter_screenutil.dart';

import '../../public.dart';

class MeHeader extends StatelessWidget {

  // @override
  // void initState() { 
  //   super.initState();
  //   print("initState 3");
  // }

  @override
  Widget build(BuildContext context) {
    print("build 3");
    return GestureDetector(
      onTap: () {
        
      },
      child: Container(
        color: SQColor.primary,
        padding: EdgeInsets.fromLTRB(20, 30, 15, 15),
        child: Row(
          children: <Widget>[
            Container(
              width: ScreenUtil().setWidth(140),
              child: CircleAvatar(
                radius: ScreenUtil().setWidth(140)/2,
                backgroundImage:  AssetImage('login_logo.png'),
              ),
            ),
            SizedBox(width: 25),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Text(
                    '淘宝优惠券',
                    style: TextStyle(fontSize: 18,color: Colors.white),
                  ),
                  SizedBox(height: 10),
                ],
              ),
            )
          ],
        ),
      ),
    );
  }

}
