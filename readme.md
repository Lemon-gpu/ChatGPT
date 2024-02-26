这是一个electron项目，只需要初始化好项目后（npm install electron --save-dev），直接运行`npm start`即可启动项目。目的在于测试基于api2d的代理chatgptAPI的功能。我嫌弃Chat酱没有latex解析功能，看一些数学公式及其难受，于是自己写了一个。clone到本地之后记得要新建一个key.txt文件到根目录，里面填写好forward key，utf8格式保存。然后就可以直接运行了。

目前是相当简陋的，只有功能测试，我也不会electron，各种fancy的脚手架之类的，之后会慢慢完善。别说electron了，我连nodejs都不会，甚至还有git的各种merge，大概率只会跟着main开发。你甚至会看到为了在渲染器中使用require，直接关了上下文隔离的逆天操作。反正能用就行。

如果可以基于QT6或者WinUI3开发就好了，但我首先不会，也很懒，不想学

