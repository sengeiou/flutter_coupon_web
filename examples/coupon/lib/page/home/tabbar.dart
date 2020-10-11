import 'package:flutter_web/material.dart';
import 'package:hkbook/ThridLib/flutter_screenutil-0.7.0/lib/flutter_screenutil.dart';

class TabModel {
  String title;
  String subtitle;
  String keyId;
  TabModel({this.title, this.subtitle,this.keyId});
}


class GZXTabBarWidget extends StatefulWidget implements PreferredSizeWidget {
  final List<TabModel> tabModels;
  final TabController tabController;
  final int currentIndex;
  const GZXTabBarWidget({Key key, this.tabModels, this.tabController, this.currentIndex}) : super(key: key);

  @override
  _GZXTabBarWidgetState createState() => _GZXTabBarWidgetState();
  @override
  // TODO: implement preferredSize
  Size get preferredSize => Size.fromHeight(30);
}

class _GZXTabBarWidgetState extends State<GZXTabBarWidget> {
  int _selectedIndex = 0;

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.white,
      child: TabBar(
          controller: widget.tabController,
          indicatorColor: Colors.transparent,
          indicatorSize: TabBarIndicatorSize.label,
          isScrollable: true,
          labelColor: Color(0xFFfe5100),
          unselectedLabelColor: Colors.black,
          labelPadding: EdgeInsets.only(right: 10.0, left: 10.0),
          onTap: (i) {
            _selectedIndex = i;
            setState(() {});
          },
          tabs: widget.tabModels
              .map((i) => Container(
                    padding: const EdgeInsets.all(0),
                    height: ScreenUtil().setHeight(88),
                    child: new Tab(
                        child: Row(
                      children: <Widget>[
                        Column(
                          children: <Widget>[
                            SizedBox(
                              height: ScreenUtil().setHeight(5),
                            ),
                            Text(i.title),
                            SizedBox(
                              height: ScreenUtil().setHeight(3),
                            ),
                            widget.tabModels.indexOf(i) == widget.currentIndex
                                ? ClipRRect(
                                    borderRadius: BorderRadius.circular(7),
                                    child: Container(
                                      padding: const EdgeInsets.all(2),
                                      color: Color(0xFFfe5100),
                                      alignment: Alignment.center,
                                      child: Container(
                                        child: Text(
                                        i.subtitle,
                                        textAlign: TextAlign.center,
                                        style: TextStyle(fontSize: 9, color: Colors.white),
                                       ),
                                      )
                                    ),
                                  )
                                : Expanded(
                                    child: Container(
                                      alignment: Alignment.center,
                                      child:Text(
                                      i.subtitle,
                                      textAlign: TextAlign.center,
                                      style: TextStyle(fontSize: 9, color: Color(0xFFb5b6b5)),
                                    ),
                                    )
                                  )
                          ],
                        ),
                        SizedBox(
                          width: ScreenUtil().setWidth(40),
                        ),
                        Container(
                          width: 1,
                          height: ScreenUtil().setHeight(30),
                          color: Color(0xFFc9c9ca),
                        )
                      ],
                    )),
                  ))
              .toList()),
    );
  }
}