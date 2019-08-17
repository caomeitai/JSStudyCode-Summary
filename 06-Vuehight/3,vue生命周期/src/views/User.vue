<template>
    <div>
        <div class="col-md-3">
            <div class="nav nav-stacked">
                <li><router-link :to="{name:'useradd'}">添加用户</router-link></li>
                <li><router-link :to="{name:'userlist'}">用户列表</router-link></li>
            </div>
        </div>
        <div class="col-md-9">
            <router-view></router-view>
        </div>
    </div>

</template>