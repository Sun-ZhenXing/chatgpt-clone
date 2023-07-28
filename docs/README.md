# 项目文档

## 1. 用户模块

用户模块的基本功能如下：

```mermaid
graph LR
    User(["用户"])
        RegLogin(["注册登录"])
            Reg(["用户注册"])
            Login(["用户登录"])
            ChangePwd(["修改密码"])
        Personal(["个人中心"])
            History(["历史记录"])
            NewDialog(["新建对话"])

    User --> RegLogin & Personal
    RegLogin --> Reg & Login & ChangePwd
    Personal --> History & NewDialog
```

管理员模块的基本功能如下：

```mermaid
graph LR
    Admin(["管理员"])
        Personal(["个人中心"])
            ChangeInfo(["修改信息"])
            ChangePwd(["修改密码"])
        UserManage(["用户管理"])
            NewUser(["新建用户"])
            DelUser(["删除用户"])
            ModifyUser(["修改用户"])
            QueryUser(["查询用户"])
        SystemManage(["系统管理"])
            AboutUs(["关于我们"])
            Introduction(["系统介绍"])

    Admin --> Personal & UserManage & SystemManage
    Personal --> ChangeInfo & ChangePwd
    UserManage --> NewUser & DelUser & ModifyUser & QueryUser
    SystemManage --> AboutUs & Introduction
```

## 2. 实体关系

E-R 图如图所示，包含一定的冗余设计：

```mermaid
erDiagram
    User ||--o{ Dialog : "创建对话"
    User ||--o{ Message : "发送消息"
    Dialog ||--o{ Message : "包含消息"
    Answer ||--o{ Message : "答案对应消息"
```

## 3. 接口设计

### 3.1 用户模块

- `POST /users/register`：用户注册
- `POST /users/login`：用户登录
- `POST /users/logout`：用户登出
- `POST /users/change_password`：修改密码
- `POST /users/change_info`：修改个人信息
- `GET /users/{user_id}/dialogs`：获取用户对话列表

### 3.2 对话

- `GET /dialogs/{dialog_id}`：获取对话详情
- `POST /dialogs/create`：新建对话
- `POST /dialogs/{dialog_id}/send_message`：发送消息
