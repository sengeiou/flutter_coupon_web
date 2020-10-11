import 'package:flutter_web/material.dart';
import 'package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/flutter_spinkit.dart';

class LoadingPage {
  final BuildContext _context;

  LoadingPage(this._context);

  ///打开loading
  void show({Function onClosed}) {
    showDialog(
      context: _context,
      builder: (context) {
        return SpinKitFadingCircle(color: Colors.white);
      },
    );
  }

  ///关闭loading
  void close() {
    Navigator.of(_context).pop();
  }
}