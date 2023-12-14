loader.define(function (require, exports, module, global) {

    // 有 module.props.id 为编辑，没有则是新增。
    console.log("参数：", module.props)

    // 初始化数据行为存储
    var bs = bui.store({
        el: `#${module.id}`,
        scope: "addressedit",
        data: {
            info: {
                name: "",
                phone: "",
                area: "",
                address: "",
                postcode: "",
            },
            isEdit: module.props.id ? true : false,// 有传id，则为修改地址，没有则为新建
            defaultaddress: true,
        },
        methods: {
            levelarea(opt) {
                // 级联控件 js 初始化:
                var uiLevelSelect = bui.levelselect(opt)

                return uiLevelSelect;
            },
            create() {
                // 新建地址
                bui.hint("新建地址");
                bui.ajax({
                    url: "",
                    data: this.$data.info,
                    method: "POST"
                }).then((res) => {
                    // 新建成功
                }, (res) => {
                    // 新建失败

                });
            },
            save(opt) {
                bui.hint("更新地址");
                bui.ajax({
                    url: "",
                    data: this.$data.info,
                    method: "POST"
                }).then((res) => {
                    // 更新成功
                }, (res) => {
                    // 更新失败
                });;
            },
            remove(opt) {
                bui.hint("删除");
                bui.ajax({
                    url: "",
                    data: {
                        id: module.props.id
                    },
                    method: "POST"
                }).then((res) => {
                    // 删除成功
                }, (res) => {
                    // 删除失败

                });;
            }
        },
        watch: {},
        computed: {},
        templates: {},
        mounted: function () {
            // 数据解析后执行

            var levelarea = this.levelarea({
                data: [{
                    "n": "北京",
                    "c": [{ "a": ["城区", "城区以外"], "n": "密云区" }]
                }],
                title: "所在地区",
                trigger: "#chooseCity",
                field: {
                    name: "n",
                    data: ["c", "a"],
                },
                onChange: function (e) {
                    console.log(e)
                }
            })
        }
    })

    return bs;
})