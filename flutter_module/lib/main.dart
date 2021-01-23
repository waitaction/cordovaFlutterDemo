import 'package:flutter/material.dart';

import 'cordova.dart';

// import 'package:flutter_module/cordova.dart';
void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);
  final String title;
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;
  void _incrementCounter() async {
    // var result = await CordovaPlatform.invokeMethod("getDate", {"format": "yyyy年MM月dd日"});
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text(widget.title),
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              RaisedButton(
                onPressed: () async {
                  await CordovaPlatform.finish({"sourceType": 0});
                 print("abc");
                },
                child: Text("调用cordova-plugin-camera"),
              ),
              RaisedButton(
                onPressed: () {
                  CordovaPlatform.invokeMethod("openInappbrowser", {});
                },
                child: Text("调用cordova-plugin-inappbrowser"),
              )
            ],
          ),
        ));
  }
}
