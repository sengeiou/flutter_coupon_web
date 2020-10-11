import 'package:flutter_web/material.dart';

class SearchCardWidget extends StatefulWidget {
  final FocusNode focusNode;
  TextEditingController textEditingController;
  final VoidCallback onTap;
  final bool isShowLeading;
  final String hintText;
  final ValueChanged<String> onSubmitted;
  final ValueChanged<String> onChanged;
  final bool autofocus;
  final bool isShowSuffixIcon;
  final double elevation;
   Widget rightWidget;

  SearchCardWidget({
    Key key,
    this.focusNode,
    this.textEditingController,
    this.onTap,
    this.isShowLeading = true,
    this.onSubmitted,
    this.onChanged,
    this.autofocus = false,
    this.isShowSuffixIcon = true,
    this.hintText,
    this.elevation = 2.0,
    this.rightWidget,
  }) : super(key: key);

  @override
  _SearchCardWidgetState createState() => _SearchCardWidgetState();
}

class _SearchCardWidgetState extends State<SearchCardWidget> {
//  TextEditingController textEditingController;
  String _hintText;
  Widget _rightWidget;

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    _rightWidget = widget.rightWidget;
    _hintText = widget.hintText;
    if (widget.textEditingController == null) {
      widget.textEditingController = TextEditingController();
    }

    return searchCard();
  }

  Widget searchCard() => Padding(
        padding: const EdgeInsets.only(top: 0, right: 0),
        //设置阴影
        child: Card(
          elevation: widget.elevation,
          shape: const RoundedRectangleBorder(borderRadius: BorderRadius.all(Radius.circular(20.0))), //设置圆角
          child: Padding(
            padding: const EdgeInsets.only(top: 0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: <Widget>[
                widget.isShowLeading
                    ? Padding(
                        padding: EdgeInsets.only(right: 5, top: 0, left: 5),
                        child: Icon(
                          Icons.search,
                          color: Colors.grey,
                          size: 20,
                        ),
                      )
                    : SizedBox(
                        width: 10,
                      ),
                Expanded(
                  child: Container(
                      height: 34,
                      child: TextField(
                        // autofocus: widget.autofocus,
                        // keyboardType: TextInputType.numberWithOptions(decimal: true),//设置键盘为可录入小数的数字

                        onTap: widget.onTap,
                        // focusNode: widget.focusNode,
                        style: TextStyle(fontSize: 13),
                        controller: widget.textEditingController,
                        decoration: InputDecoration(
                          icon: Icon(Icons.search,color: Colors.grey,size: 28,),
                          // contentPadding: const EdgeInsets.only(top: 8),
                          border: InputBorder.none,
                          hintText: _hintText,
                          suffixIcon: widget.textEditingController.text.length == 0 || !widget.isShowSuffixIcon
                              ? SizedBox()
                              : Container(
                                  width: 20.0,
                                  height: 20.0,
                                  alignment: Alignment.centerRight,
                                  child: new IconButton(
                                    alignment: Alignment.centerRight,
                                    padding: const EdgeInsets.only(right: 6),
                                    iconSize: 18.0,
                                    icon: Icon(
                                      Icons.cancel,
                                      color: Colors.grey[500],
                                      size: 16,
                                    ),
                                    onPressed: () {
                                      setState(() {
                                        widget.textEditingController.text = '';
                                        widget.onChanged('');
                                      });
                                    },
                                  ),
                                ),
                        ),
                        onSubmitted: widget.onSubmitted,
                        onChanged: widget.onChanged,
                      )),
                ),

                widget.textEditingController.text.length == 0 || !widget.isShowSuffixIcon
                    ? Padding(padding: EdgeInsets.only(right: 5), child: _rightWidget)
                    : SizedBox(),
              ],
            ),
          ),
        ),
      );
}
