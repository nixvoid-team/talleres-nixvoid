<template>
    <div class="card">
        <div class="card-content">
            <slot/>
            <div class="media">
                <div class="media-content">
                    <p class="title is-4">{{activity.title}}</p>
                </div>
            </div>

            <div class="content">
                {{activity.description}}
                <br>
                <a href="#">#css</a> 
                <a href="#">#responsive</a>
                <br>
                <time datetime="2016-1-1">{{activity.time}} - {{activity.date}}</time>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'ActivityCard',
    props:{
        activity:{
            type: Object,
            default: ()=>({
                title: 'titulo por defecto',
                description:'defecto',
                date: '',
                time: '',
                categories:[]
            })
        }
    }
}
</script>

<style>

</style>