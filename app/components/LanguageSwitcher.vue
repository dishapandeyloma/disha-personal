<template>
  <div class="lang-switcher">
    <USelectMenu
      v-model="selected"
      :items="items"
      :content="{
        align: 'end',
        side: 'bottom',
        sideOffset: 12
      }"
      :ui="{
        content: 'menu-content',
        item: 'menu-item',
        itemLabel: 'menu-item-label',
        itemLeadingIcon: 'menu-item-icon'
      }"
      search
      :search-input-placeholder="t('search')"
    >
      <template #default="{ open }">
        <button class="switcher-trigger" :class="{ 'is-open': open }">
          <div class="current-flag-wrapper">
            <Icon :name="getFlag(locale)" />
          </div>
          <span class="current-label">{{ getLocaleName(locale) }}</span>
          <Icon name="ri:arrow-down-s-line" class="chevron" />
        </button>
      </template>

      <template #item="{ item }">
        <div class="item-inner">
          <div class="item-flag">
            <Icon :name="item.flag" />
          </div>
          <span class="item-name">{{ item.label }}</span>
          <div v-if="locale === item.value" class="active-check">
            <Icon name="ri:checkbox-circle-fill" />
          </div>
        </div>
      </template>
    </USelectMenu>
  </div>
</template>

<script setup>
const { locale, locales, setLocale, t } = useI18n()

const flagMap = {
  'en-US': 'circle-flags:uk',
  'zh-CN': 'circle-flags:cn',
  'de-DE': 'circle-flags:de',
  'km-KH': 'circle-flags:kh',
  'th-TH': 'circle-flags:th',
  'vi-VN': 'circle-flags:vn',
  'ja-JP': 'circle-flags:jp'
}

const getFlag = (code) => flagMap[code] || 'ri:global-line'

const getLocaleName = (code) => {
  const loc = locales.value.find(l => l.code === code)
  return loc ? loc.name : code
}

const items = computed(() => {
  return (locales.value || []).map(l => ({
    label: l.name,
    value: l.code,
    flag: flagMap[l.code] || 'ri:global-line'
  }))
})

const selected = computed({
  get: () => items.value.find(i => i.value === locale.value) || items.value[0],
  set: (val) => {
    if (val && val.value) {
      setLocale(val.value)
    }
  }
})
</script>

<style scoped>
.lang-switcher {
  position: relative;
  z-index: 1000;
}

.switcher-trigger {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.4rem 1rem;
  background: hsla(0, 0%, 100%, 0.03);
  border: 1px solid hsla(0, 0%, 100%, 0.1);
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  color: var(--text-primary);
}

.light-mode .switcher-trigger {
  background: hsla(240, 10%, 10%, 0.03);
  border: 1px solid hsla(240, 10%, 10%, 0.1);
}

.switcher-trigger:hover, .switcher-trigger.is-open {
  background: hsla(0, 0%, 100%, 0.08);
  border-color: var(--primary);
  transform: translateY(-1px);
}

.light-mode .switcher-trigger:hover, .light-mode .switcher-trigger.is-open {
  background: hsla(240, 10%, 10%, 0.06);
}

.current-flag-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.current-label {
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-primary);
}

.chevron {
  font-size: 1rem;
  opacity: 0.5;
  transition: transform 0.4s ease;
}

.switcher-trigger.is-open .chevron {
  transform: rotate(180deg);
}

.item-inner {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
}

.item-flag {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
}

.item-name {
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
}

.light-mode .item-name {
  color: #333;
}

.active-check {
  margin-left: auto;
  color: #10b981;
  font-size: 1.1rem;
}
</style>

<style>
/* Global styles for portal-rendered menu */
.dark-mode .menu-content {
  background: #000000 !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(24px) !important;
  border-radius: 1.25rem !important;
  box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.9) !important;
  padding: 0.6rem !important;
  min-width: 240px !important;
}

.light-mode .menu-content {
  background: #ffffff !important;
  border: 1px solid rgba(0, 0, 0, 0.1) !important;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08) !important;
  border-radius: 1.25rem !important;
  padding: 0.6rem !important;
  min-width: 240px !important;
}

.menu-content input {
  background: rgba(255, 255, 255, 0.05) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  color: white !important;
  border-radius: 0.75rem !important;
  margin-bottom: 0.5rem !important;
  font-size: 0.85rem !important;
  padding: 0.6rem 0.8rem !important;
}

.light-mode .menu-content input {
  background: rgba(0, 0, 0, 0.03) !important;
  border: 1px solid rgba(0, 0, 0, 0.1) !important;
  color: black !important;
}

.menu-item {
  display: flex !important;
  align-items: center !important;
  padding: 0.8rem 1rem !important;
  margin: 0.25rem 0 !important;
  border-radius: 0.8rem !important;
  cursor: pointer !important;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.menu-item:hover {
  background: rgba(255, 255, 255, 0.1) !important;
  transform: translateX(4px);
}

.light-mode .menu-item:hover {
  background: rgba(0, 0, 0, 0.05) !important;
}
</style>
