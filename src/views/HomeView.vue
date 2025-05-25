<script setup>
import Hero from '@/components/Hero.vue';
import HomeCardsVue from '@/components/HomeCards.vue';
import JobListings from '@/components/JobListings.vue';
</script>

<template>
   <Hero></Hero>
   <HomeCardsVue></HomeCardsVue>
   <JobListings :limit="3" :showButton="true"</JobListings>
</template>