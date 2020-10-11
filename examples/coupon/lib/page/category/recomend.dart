import 'package:flutter_web/material.dart';

class RecomendListWidget extends StatelessWidget {
  final List<String> items;
  final ValueChanged<String> onItemTap;

  RecomendListWidget(this.items, {this.onItemTap});

  @override
  Widget build(BuildContext context) {
    var listView = ListView.separated(
      padding: EdgeInsets.symmetric(horizontal: 6),
      itemCount: items.length,
      itemBuilder: (BuildContext context, int i) {
        return InkWell(
          onTap: () => onItemTap(items[i]),
          child: Container(
            height: 42,
            alignment: Alignment.centerLeft,
            child: Row(
              children: <Widget>[
                SizedBox(
                  width: 4,
                ),
                Expanded(
                  child: Text(
                    items[i],
                    style: TextStyle(fontSize: 12),
                  ),
                ),
                SizedBox(
                  width: 4,
                ),
              ],
            ),
          ),
        );
      },
      separatorBuilder: (BuildContext context, int i) {
        return Container(
          height: 1,
          color: Colors.grey[200],
        );
      },
    );

    return Container(
        decoration: BoxDecoration(
            borderRadius: BorderRadius.only(topLeft: Radius.circular(16), topRight: Radius.circular(16)),
            color: Colors.white),
        child: listView);
  }
}
