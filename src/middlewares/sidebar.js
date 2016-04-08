var Advanced = require(__ROOT + '/node_modules/advanced/lib/index');

module.exports = Advanced.Controller.extend({

    getNavData: function() {

        if (this.req.xhr) return this.next();

        var navData = require('../data/nav.json');

        if(Advanced.Utils.isDev()){
            navData = [
                {
                    "title": "计算资源",
                    "icon": "compute",
                    'href': '/console/vm/instance/list',
                    "subNav": [
                        {
                            "title": "云服务器",
                            "href": "/console/vm/instance/list",
                            "index": "kvm"
                        },
                        {
                            "title": "镜像",
                            "href": "/console/snapshot/list",
                            "index": "image"
                        },
                        {
                            "title": "防火墙",
                            "href": "/console/firewall/list",
                            "index": "firewall"
                        }
                    ]
                },
                {
                    "title": "网络资源",
                    "icon": "network",
                    'href': '/console/eip/list',
                    "subNav": [
                        {
                            "title": "弹性IP",
                            "href": "/console/eip/list",
                            "index": "eip"
                        },
                        {
                            "title": "负载均衡",
                            "href": "/console/lb/instance/list",
                            "index": "lbs"
                        },
                        {
                            "title": "VPC",
                            "href": "/console/vpc/list",
                            "index":"vpc"
                        },
                        {
                            "title": "共享带宽",
                            "href": "/console/bandwidth/list",
                            "index":"bandwidth"
                        }
                    ]
                },
                {
                    "title": "数据库",
                    "icon": "rds",
                    'href': '/console/rds/instances/list',
                    "subNav": [
                        {
                            "title": "关系型数据库",
                            "href": "/console/rds/instances/list",
                            "index": "rds"
                        },
                        {
                            "title": "缓存",
                            "href": "/console/kcs/list",
                            "index": "kcs"
                        }
                    ]
                },
                {
                    "title": "云安全",
                    "icon": "safe",
                    'href': '/console/security/basic',
                    "subNav": [
                        {
                            "title": "基础防护",
                            "href": "/console/security/basic",
                            "index": "security-basic"
                        },
                        {
                            "title": "高防IP",
                            "href": "/console/security/kad",
                            "index": "security-kad"
                        }
                    ]
                },
                {
                    "title": "CDN",
                    "icon": "cdn",
                    "href": "/console/cdn/domain/list",
                    "subNav": [
                        {
                            "title": "加速管理",
                            "href": "/console/cdn/domain/list",
                            "index": "domain"
                        },
                        {
                            "title": "日志下载",
                            "href": "/console/cdn/flow/getLogs",
                            "index": "log"
                        }
                    ]
                },
                {
                    "title": "云硬盘",
                    "icon": "ebs",
                    "href": "/console/ebs/instances/list",
                    "subNav": [
                        {
                            "title": "数据盘",
                            "href": "/console/ebs/instances/list",
                            "index": "disk"
                        },
                        {
                            "title": "快照",
                            "href": "/console/ebs/instances/snapshots",
                            "index": "snapshots"
                        }
                    ]
                },
                {
                    "title": "云监控",
                    "icon": "monitor",
                    "href": "/console/kingeyes",
                    "subNav": [
                        {
                            "title": "云服务器",
                            "href": "#/",
                            "index": "kec"
                        },
                        {
                            "title": "联系人管理",
                            "href": "#/linkman",
                            "index": "linkman"
                        }
                    ]
                },
                {
                    "title": "数据分析",
                    "icon": "analytics",
                    "href": "/console/kmr#/clusters",
                    "subNav": [
                        {
                            "title": "KMR",
                            "href": "#/clusters",
                            "index": "kmr"
                        }
                    ]
                }
            ];
        }

        this.res.locals.navData = navData;
        this.next();

        /*this.request({
            navData: ''
        }).then(function(){
            this.res.locals.navData = navData;
            this.next();
        }.bind(this));*/



    }

});