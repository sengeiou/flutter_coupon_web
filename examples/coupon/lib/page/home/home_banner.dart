import 'package:flutter_web/material.dart';
import 'package:hkbook/ThridLib/carousel_slider-1.4.1/lib/carousel_slider.dart';
import 'package:hkbook/ThridLib/flutter_screenutil-0.7.0/lib/flutter_screenutil.dart';
import 'package:hkbook/public.dart';

class HomeBanner extends StatelessWidget {
  final List<String> carouselInfos = ["http://hank.image.alimmdn.com/tbCoupon/dae.png","http://hank.image.alimmdn.com/tbCoupon/pp.png"];

  @override
  Widget build(BuildContext context) {
    if (carouselInfos.length == 0) {
      return SizedBox();
    }

    return Container(
      color: Colors.white,
      child: CarouselSlider(
        items: carouselInfos.map((info) {
          return Builder(
            builder: (BuildContext context) {
              return Container(
                width: ScreenUtil().setWidth(750),
                child: Image.network(
                  info ?? '',
                  fit: BoxFit.cover,
                ),
                // margin: EdgeInsets.symmetric(horizontal: 5.0),
                // child: Image(
                //       image: CachedNetworkImageProvider(info ?? ''),
                //       fit: BoxFit.cover,
                //       )
              );
            },
          );
        }).toList(),
        viewportFraction:1.0,
        aspectRatio: 2,
        autoPlay: true,
      ),
    );
  }
}
