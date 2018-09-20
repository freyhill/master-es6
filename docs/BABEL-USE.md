http://babeljs.io/docs/usage/cli/

> babel 可以将一个es6,7文件编译成一个es5文件，首先要使用导babel命令需要安装babel-cli
### babel-cli


#### 1. 安装两个包
```
npm install --save-dev babel-cli babel-preset-es2015
```

#### 2. 编译文件

```
babel src/let.js  //直接在控制台输出编译后的es5代码
```

#### 3.编译并输出编译后的文件使用 --out-file 或者 -o
```
babel src/let.js --out-file src/let_es5.js
//或者
babel src/let.js -o src/let_es52.js
```
#### 4.实时编译  --watch o或者 -w 参数
```
babel src/let.js --watch --out-file src/let_es5.js
//或者
babel src/let.js -w --out-file src/let_es5.js
```

#### 5. 编译生成soruce－maps
```
babel src/let.js -o src/let_es5.js --source-maps
```

#### 6.编译路径
> 把src路径下的js编译到dist目录下 使用--out-dir 或者 -d

```
babel src/ --out-dir dist
// 或者
babel src/ -d lib
```
> 会把src目录下的所有js文件编译到dist目录下

#### 7.把src目录下的所有文件编译到一个js文件里
```
babel src --out-file lib.js
//或者
babel src/ -o lib.js
```

#### 8.编译时忽略某个文件(let_es5.js,let_es52.js)
```
babel src --out-dir lib --ignore let_es5.js,let_es52.js
```

### babel-node
> babel-node 像node一样可以在控制台执行es6代码，在执行前会先编译成es5


### 注意：
* babel命令是编译一个文件（es6－>es5）

```
babel-node test.js //编译并执行这个文件
```
* babel-node是执行一个文件
