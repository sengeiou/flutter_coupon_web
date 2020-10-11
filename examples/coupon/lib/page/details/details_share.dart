import 'dart:async';
import 'package:flutter_web/material.dart';
import 'package:flutter_web/services.dart';
import 'package:hkbook/ThridLib/flutter_screenutil-0.7.0/lib/flutter_screenutil.dart';
import 'package:hkbook/widget/toast.dart';

import '../../public.dart';

class DetailsShare extends StatefulWidget {

  final VoidCallback onTap;
  final String model;

  DetailsShare({this.onTap, this.model});


  @override
  _DetailsShareState createState() => _DetailsShareState();
  
}

class _DetailsShareState extends State<DetailsShare> with SingleTickerProviderStateMixin{
  
  AnimationController animationController;
  Animation<double> animation;

  @override
  initState() {
    super.initState();
    animationController = AnimationController(duration: const Duration(milliseconds: 200), vsync: this);
    animation = Tween(begin: 0.0, end: 1.0).animate(animationController);
    animation.addListener(() {
      setState(() {});
    });
    animationController.forward();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Stack(
        children: <Widget>[
          GestureDetector(
              onTapDown: (_) {
                _hide();
              },
              child: Container(color: Colors.transparent),
            ),
          _buildBottomView(),
        ],
      ),
    );
  }

  @override
  void dispose() {
    animationController.dispose();
    super.dispose();
  }

  _hide() {
    animationController.reverse();
    Timer(Duration(milliseconds: 200), () {
      this.widget.onTap();
    });
  }

  _buildBottomView() {
    return Positioned(
      bottom: -(Screen.bottomSafeHeight + ScreenUtil().setHeight(450)) * (1 - animation.value),
      left: 0,
      right: 0,
      child: Container(
        height: ScreenUtil().setHeight(450),
        width: Screen.width,
        color: Colors.white,
        padding: EdgeInsets.all(ScreenUtil().setHeight(15)),
        child: Column(
          children: <Widget>[
            Container(
              height: ScreenUtil().setHeight(300),
              //has decoration color in decoration
              decoration: BoxDecoration(
                color: Color(0xFFF3F3F3),
                borderRadius: BorderRadius.circular(4),   
                border: Border.all(width: 1,color: Colors.black12)
              ),
              child: ListView(
                children: <Widget>[
                 Container(
                   padding: EdgeInsets.all(5),
                   child:  Text(this.widget.model),
                 )
                ],
              ),
            ),
            InkWell(
              onTap: (){
                    print('i am hank test');
                    print(this.widget.model);
                    ToastHelper.showToast(context, "复制成功,转发给好友吧!");
                    _hide();
              },
              child: Container(
                margin: EdgeInsets.all(ScreenUtil().setHeight(15)),
                height: ScreenUtil().setHeight(80),
                decoration: BoxDecoration(
                    color: SQColor.primary,
                    borderRadius: BorderRadius.circular(ScreenUtil().setHeight(80)/2),   
                  ),
                alignment: Alignment.center,
                child: InkWell(
                  child: Text('复制文案',style: TextStyle(
                      color: Colors.white,
                      fontSize: ScreenUtil().setSp(30)
                    ),textAlign:TextAlign.center,),
                    
                )
              ),
            )
            
          ],
        ),
      )
    );
  }

}