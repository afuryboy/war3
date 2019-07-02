<template>
    <div>
        <div class="container">
            <nav>
                <ul>
                    <li><router-link to="/alert">alert</router-link></li>
                    <li><router-link to="/icon">icon</router-link></li>
                    <li><router-link to="/row">row</router-link></li>
                    <li><router-link to="/message">message</router-link></li>
                </ul>
            </nav>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {}
  },
}
</script>