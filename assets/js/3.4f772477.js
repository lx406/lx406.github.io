(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{356:function(t,a,e){t.exports=e.p+"assets/img/example.4af47a73.png"},357:function(t,a,e){t.exports=e.p+"assets/img/example_answer.dce6ef51.png"},358:function(t,a,e){t.exports=e.p+"assets/img/coverage.c55915e4.png"},359:function(t,a,e){t.exports=e.p+"assets/img/coverage_report.335043d9.png"},378:function(t,a,e){"use strict";e.r(a);var s=e(45),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"单元测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单元测试"}},[t._v("#")]),t._v(" 单元测试")]),t._v(" "),s("h3",{attrs:{id:"是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#是什么"}},[t._v("#")]),t._v(" 是什么")]),t._v(" "),s("ol",[s("li",[t._v("单元测试应该只测试一个独立单元的工作")]),t._v(" "),s("li",[t._v("前端单元测试，往往是以组件、util（test-suit）为粒度，很少有以整个页面为粒度的")])]),t._v(" "),s("h3",{attrs:{id:"为什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么"}},[t._v("#")]),t._v(" 为什么")]),t._v(" "),s("p",[t._v("提升软件质量，保证代码重构质量")]),t._v(" "),s("h2",{attrs:{id:"测试框架"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试框架"}},[t._v("#")]),t._v(" 测试框架")]),t._v(" "),s("p",[t._v("推荐使用Jest")]),t._v(" "),s("h3",{attrs:{id:"jest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jest"}},[t._v("#")]),t._v(" Jest")]),t._v(" "),s("ol",[s("li",[t._v("开箱即用：基本不需要额外的配置即可使用")]),t._v(" "),s("li",[t._v("自带断言、测试覆盖率工具，支持Mock、Snapshot、异步测试等")]),t._v(" "),s("li",[t._v("应用广泛：已经成为了vue-cli和create-react-app默认集成的测试框架")]),t._v(" "),s("li",[t._v("文档丰富")])]),t._v(" "),s("h2",{attrs:{id:"test-suit-test-case"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#test-suit-test-case"}},[t._v("#")]),t._v(" test suit/test case")]),t._v(" "),s("h3",{attrs:{id:"test-case"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#test-case"}},[t._v("#")]),t._v(" test case")]),t._v(" "),s("p",[t._v("测试用例，表示对一个功能点的测试\n在Jest中一个test即为一个test，第一个参数为case名称，第二个是要执行的函数")]),t._v(" "),s("h3",{attrs:{id:"test-suit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#test-suit"}},[t._v("#")]),t._v(" test suit")]),t._v(" "),s("p",[t._v("测试套件，表示一组相关用例的分组\ndescribe表示一个test suit，第一个参数为suit名称，第二个是执行的函数")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("const a = {\n    name: 'lx',\n    age: 18\n}\n\n// test suit\ndescribe('a',()=>{\n    // test case\n    test('name',()=>{\n        expect(a.name).toBe('lx');\n    });\n    test('age',()=>{\n        expect(a.age).toBe(18);\n    })\n})\n")])])]),s("h2",{attrs:{id:"断言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#断言"}},[t._v("#")]),t._v(" 断言")]),t._v(" "),s("h3",{attrs:{id:"断言是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#断言是什么"}},[t._v("#")]),t._v(" 断言是什么")]),t._v(" "),s("ol",[s("li",[t._v("在程序设计中，断言是一种一阶逻辑，目的是表示与验证开发者预期的结果。")]),t._v(" "),s("li",[t._v("当程序运行到断言的位置时，对应的断言应该为真。若断言为假时，程序会中止并给出错误信息。")])]),t._v(" "),s("h3",{attrs:{id:"jest中的断言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jest中的断言"}},[t._v("#")]),t._v(" Jest中的断言")]),t._v(" "),s("p",[t._v("Jest中内置了很多断言方法，称作为“Matcher”")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// Matcher的使用\ntest('Object assign',()=>{\n    const data = {one:1};\n    data['two'] = 2;\n    expect(data).toEqual({one:1,two:2});\n})\n// Matcher其实就是expect(something).toBe(something)\n")])])]),s("p",[t._v("Jest中的Matchers,包含各种数据类型的各种判断方法")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("test('Null',()=>{\n    const n = null;\n    expect(n).toBeNull();\n    expect(n).toBeDefined();\n    expect(n),not.toBeUndefined();\n    expect(n).not.toBeTruthy();\n    expect(n).toBeFalsy();\n});\n\ntest('two plus two', ()=>{\n    const value = 2 + 2;\n    expect(value).toBeGreaterThan(3);\n    expect(value).toBeGreaterThanOrEqual(3.5);\n    expect(value).toBeLessThan(5);\n    expect(value).toBeLessThanOrEqual(4.5);\n    expect(value).toEqual(4); // '=='\n    expect(value).toBe(4); // '==='\n})\n")])])]),s("h2",{attrs:{id:"异步测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异步测试"}},[t._v("#")]),t._v(" 异步测试")]),t._v(" "),s("p",[t._v("测试中难免遇到异步逻辑，Jest也提供了异步测试支持")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// 这个例子是错误的，因为Jest会认为是同步调用,在回调之前用例就结束了\n\ntest('the data is xxx', ()=>{\n    function callback(data){\n        expect(data).toBe('xxx');\n    }\n    fetchData(callback);\n})\n")])])]),s("h3",{attrs:{id:"done"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#done"}},[t._v("#")]),t._v(" done")]),t._v(" "),s("p",[t._v("Jest中提供done方法来支持异步测试")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("test('the data is xxx', (done)=>{\n    function callback(data){\n        try{\n            expect(data).toBe('xxx');\n            done();\n        } catch (error){\n            done(error);\n        }\n    }\n    fetchData(callback);\n})\n")])])]),s("p",[t._v("Jest也提供了promise和async/await场景下的异步测试支持")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// promise\ntest('the data is peanut butter', ()=>{\n    return fetchData().then(data=>{\n        expect(data).toBe('peanut butter');\n    })\n})\n// async/await\ntest('the data is xxx', ()=>{\n    await expect(fetchData()).resolves.toBe('xxx');\n})\n")])])]),s("h2",{attrs:{id:"环境准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[t._v("#")]),t._v(" 环境准备")]),t._v(" "),s("p",[t._v("Jest提供了钩子函数：beforeEach、afterEach、beforeAll、afterAll")]),t._v(" "),s("ol",[s("li",[t._v("beforeEach：某些用例执行前")]),t._v(" "),s("li",[t._v("afterEach：某些用例执行后")]),t._v(" "),s("li",[t._v("beforeAll：所有用例执行前")]),t._v(" "),s("li",[t._v("afterAll：所有用例执行后")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// 在该文件中的所有test运行之前，都会执行\nbeforeEach(()=>{\n    return initData();\n});\ntest('my name is lx',()=>{\n    expect(name).toBe('lx');\n})\ndescribe('lxs feature',()=>{\n    // 只会在这个test suit的每个test前运行\n    beforEach(()=>{\n        return initData();\n    })\n    test('age',()=>{\n        expect(age).toBe(18);\n    })\n})\n")])])]),s("h2",{attrs:{id:"mock"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mock"}},[t._v("#")]),t._v(" Mock")]),t._v(" "),s("p",[t._v("Mock是一种覆盖原有函数、类的实际实现，来检测其调用情况的一种测试方法。‘\n在Jest中可以通过Mock函数的.mock属性，拿到Mock函数调用的各种信息")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("const mockCallback = jest.fn(x=>42+x);\nforEach([0,1], mockCallback);\n\n// mockCallback被调用两次\nexpect(mockCallback.mock.calls.length).toBe(2);\n// mockCallback的第一次调用的第一个参数应该是0\nexpect(mockCallback.mock.calls[0][0]).toBe(0);\n// mockCallback的第二次调用的第一个参数应该是1\nexpect(mockCallback.mock.calls[1][0]).toBe(1);\n// mockCallback的第一次调用的结果应该是42\nexpect(mockCallback.mock.results[0].value).toBe(42);\n")])])]),s("h3",{attrs:{id:"mock一个第三方模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mock一个第三方模块"}},[t._v("#")]),t._v(" Mock一个第三方模块")]),t._v(" "),s("p",[s("img",{attrs:{src:e(356),alt:"截屏2020-09-13 下午2.33.29.png"}}),t._v(" "),s("img",{attrs:{src:e(357),alt:"截屏2020-09-13 下午2.33.46.png"}})]),t._v(" "),s("h2",{attrs:{id:"snapshot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#snapshot"}},[t._v("#")]),t._v(" Snapshot")]),t._v(" "),s("p",[t._v("快照是一种非常强大的测试工具，一般用于UI组件的测试")]),t._v(" "),s("h2",{attrs:{id:"测试覆盖率"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试覆盖率"}},[t._v("#")]),t._v(" 测试覆盖率")]),t._v(" "),s("p",[t._v("我们用测试覆盖率衡量一个工程的测试代码的完整程度\nJest内置了Istanbul模块，可以从以下4个维度统计测试覆盖率：")]),t._v(" "),s("ol",[s("li",[t._v("Statements：语句覆盖率 所有语句的执行率")]),t._v(" "),s("li",[t._v("Branches：分支覆盖率 所有代码分支如if、三目运算的执行率")]),t._v(" "),s("li",[t._v("Functions：函数覆盖率 所有函数的被调用率")]),t._v(" "),s("li",[t._v("Lines：行覆盖率 所有有效代码行的执行率，和语句类似，但是计算方式略有差别\n"),s("img",{attrs:{src:e(358),alt:"截屏2020-09-13 下午2.44.45.png"}})])]),t._v(" "),s("h3",{attrs:{id:"istanbul的原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#istanbul的原理"}},[t._v("#")]),t._v(" Istanbul的原理")]),t._v(" "),s("p",[t._v("Istanbul在代码被执行之前，拦截了模块加载器，为其中的每一个逻辑分支、函数等添加了计数器，从而得到覆盖率结果。")]),t._v(" "),s("h2",{attrs:{id:"测试报告"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试报告"}},[t._v("#")]),t._v(" 测试报告")]),t._v(" "),s("p",[t._v("一次自动化测试的详情和最终结果，应该由一张测试报告描述")]),t._v(" "),s("p",[s("img",{attrs:{src:e(359),alt:"截屏2020-09-13 下午2.57.34.png"}})]),t._v(" "),s("h2",{attrs:{id:"e2e测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#e2e测试"}},[t._v("#")]),t._v(" E2E测试")]),t._v(" "),s("h3",{attrs:{id:"是什么-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#是什么-2"}},[t._v("#")]),t._v(" 是什么")]),t._v(" "),s("ol",[s("li",[t._v("End to End，即“端到端”")]),t._v(" "),s("li",[t._v("模仿用户，从某个入口开始，逐步执行操作，直到完成某项工作")]),t._v(" "),s("li",[t._v("关注一个完整的操作链是否能够完成")])]),t._v(" "),s("h3",{attrs:{id:"为什么-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么-2"}},[t._v("#")]),t._v(" 为什么")]),t._v(" "),s("p",[t._v("在单元测试的基础上，在更真实的场景下，测试软件质量。")])])}),[],!1,null,null,null);a.default=n.exports}}]);