# subscription-template

GKD 订阅模板, 此仓库方便您直接构建自己订阅, 点击右上角 [Use this template](https://github.com/new?template_name=subscription-template&template_owner=gkd-kit) 即可使用

## 配置环境

请安装最新版 nodejs 和 pnpm 运行, 以及使用 vscode 打开项目

- node>=20 <https://nodejs.org/en/download>
- pnpm>=8 <https://pnpm.io/zh/installation>
- vscode <https://code.visualstudio.com>

安装好后使用模板, 假设您创建的仓库是 `https://gihtub.com/lisonge/subscription`

接下来初始化环境

```shell
git clone https://gihtub.com/lisonge/subscription
cd subscription
pnpm install
```

至此环境已在 `subscription` 目录下初始化完毕, 使用 vscode 打开目录即可开始开发

如果您无法初始化 nodejs 环境, 那可以直接使用 github 网页编辑文件后在线提交

![image](https://github.com/gkd-kit/gkd/assets/38517192/6a724cd9-b2cd-429d-bf2e-87f2c8b3d566)

## 目录结构

- 订阅详情 [./src/subscription.ts](./src/subscription.ts)
- 全局规则 [./src/globalGroups.ts](./src/globalGroups.ts)
- 规则分类 [./src/categories.ts](./src/categories.ts)
- 应用规则 [./src/apps](./src/apps/)

在 vscode 内使用鼠标悬浮在任意字段上即可查看注释说明, 也可在 <https://gkd.li/api> 搜索查看

![image](https://github.com/gkd-kit/gkd/assets/38517192/35400b43-0d79-4a67-bd4c-6915613488db)

现在您可编辑 [./src](./src/) 下的文件来自定义您的订阅, 构建后的订阅文件处于 [./dist](./dist/) 目录下

另外您必须修改 订阅详情 [./src/subscription.ts](./src/subscription.ts) 下的 id 字段, 否则可能会和其它订阅冲突, 填一个较大的随机数字即可

## 格式修复

我们使用 [prettier](https://github.com/prettier/prettier) 来格式化代码 和 [eslint](https://github.com/eslint/eslint) 来检测并修复代码错误

同时使用 [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks) 在您提交代码时运行格式化和代码检测修复脚本

当您的代码存在错误时, 它会阻止您提交代码并输出具体错误以供您手动修复后再次提交

当提交代码到仓库时, 我们也需要使用 github actions 来帮助自动格式化并修复代码, 因此您需要开启仓库的此项权限

打开 <https://github.com/gkd-kit/subscription-template/settings/actions>

注: 将 gkd-kit/subscription-template 换成您的仓库

然后找到 Workflow permissions 点击 Read and write permissions 然后点击下方的 Save 即可

![image](https://github.com/gkd-kit/gkd/assets/38517192/e3bbefe3-7745-42c7-adc8-3cfe2757c9cf)

## 构建订阅

我们需要将 [./src](./src/) 分散的文件合并为一个 gkd.json5 的最终订阅文件并输出到 [./dist](./dist/) 目录下

推荐使用 github actions 进行构建, 在 [./.github/workflows](./.github/workflows) 下有 3 个工作流

我们使用其中的 `build_release.yml` 构建并发布

打开 <https://github.com/gkd-kit/subscription-template/actions/workflows/build_release.yml>

注: 将 gkd-kit/subscription-template 换成您的仓库

然后点击右侧的 `Run workflow` 即可运行并发布

![image](https://github.com/gkd-kit/gkd/assets/38517192/bbaf5113-8ab3-4be0-9a79-ee7a7389a58c)

构建后订阅将输出到 dist 目录下, gkd.json 的文件订阅地址如下, 复制后到 GKD 添加即可

```txt
https://raw.githubusercontent.com/gkd-kit/subscription-template/main/dist/gkd.json5
```

注: 将 gkd-kit/subscription-template 换成您的仓库

## 镜像加速

raw.githubusercontent.com 在大陆的访问常常无法访问

您可以换成 <https://fastly.jsdelivr.net/gh/gkd-kit/subscription-template@main/dist/gkd.json5> 加速访问

注: 将 gkd-kit/subscription-template 换成您的仓库

如果无法访问 raw.githubusercontent.com 和 fastly.jsdelivr.net

您可以将本仓库发布到 npm 上, 然后通过 registry.npmmirror.com 加速访问

要发布到 npm 上, 必须先将 [./package.json](./package.json) 的 name 字段改成未使用的包名, 否则无法发布

您可以改成 `gkd-subscription-xxxx` 其中 `xxxx` 是随机的 4 位字母数字, 总之不冲突就行

先注册 <https://www.npmjs.com>, 然后到 Access Tokens 界面点击 Generate New Token 选择 Classic Token 后随便输入 Name 选择 Publish 即可生成并复制

![image](https://github.com/gkd-kit/gkd/assets/38517192/ca5eaf26-3705-4dc7-9584-4a235bbefde2)

![image](https://github.com/gkd-kit/gkd/assets/38517192/6da188ab-e415-44de-b2f7-3f985ab4d401)

![image](https://github.com/gkd-kit/gkd/assets/38517192/55db57f6-1021-4d85-afd0-fe7df1f9bbcf)

复制后打开 <https://github.com/gkd-kit/subscription-template/settings/secrets/actions/new>

注: 将 gkd-kit/subscription-template 换成您的仓库

在 Name 输入 `NPM_TOKEN`, 在 Secret 输入刚刚复制的 token, 点击 Add secret 即可添加成功

![image](https://github.com/gkd-kit/gkd/assets/38517192/72b062d8-4540-4602-82fe-416ea5348014)

然后只需要重复上面的 构建订阅 步骤即可发布, 发布后得到的镜像加速链接如下

```txt
https://registry.npmmirror.com/gkd-subscription-xxxx/latest/files/dist/gkd.json5
```

注: 将 gkd-subscription-xxxx 换成您的包名
