<template>
  <div class="lang-switcher">
    <!-- Using USelect for better stability as suggested -->
    <USelect
      v-model="selectedLocale"
      :items="items"
      :ui="{
        base: 'select-base',
        content: 'select-content',
        item: 'select-item',
        itemLabel: 'select-item-label',
      }"
      class="custom-select"
    >
      <template #default="{ open }">
        <button class="switcher-trigger" :class="{ 'is-open': open }">
          <div class="current-flag">
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
          <div v-if="locale === item.value" class="active-indicator">
            <Icon name="lucide:check" />
          </div>
        </div>
      </template>
    </USelect>
  </div>
</template>

<script setup>
const { locale, locales, setLocale } = useI18n();

const flagMap = {
  "en-US": "circle-flags:uk",
  "zh-CN": "circle-flags:cn",
  "de-DE": "circle-flags:de",
  "km-KH": "circle-flags:kh",
  "th-TH": "circle-flags:th",
  "vi-VN": "circle-flags:vn",
  "ja-JP": "circle-flags:jp",
};

const getFlag = (code) => flagMap[code] || "ri:global-line";

const getLocaleName = (code) => {
  const loc = locales.value.find((l) => l.code === code);
  return loc ? loc.name : code === "en-US" ? "English" : code;
};

const items = computed(() => {
  return (locales.value || []).map((l) => ({
    label: l.name,
    value: l.code,
    flag: flagMap[l.code] || "ri:global-line",
  }));
});

const selectedLocale = computed({
  get: () => locale.value,
  set: (val) => {
    if (val) setLocale(val);
  },
});
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
  padding: 0.4rem 0.8rem;
  background: #000000 !important;
  border: 1px solid rgba(255, 255, 255, 0.15) !important;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #ffffff !important;
  backdrop-filter: blur(12px);
}

.light-mode .switcher-trigger {
  background: #ffffff !important;
  border: 1px solid rgba(0, 0, 0, 0.1) !important;
  color: #000000 !important;
}

.switcher-trigger:hover,
.switcher-trigger.is-open {
  border-color: var(--primary) !important;
}

.current-flag {
  display: flex;
  align-items: center;
  font-size: 1.25rem;
}

.current-label {
  font-size: 0.85rem;
  font-weight: 600;
  /* Hide on small devices */
  display: none;
}

@media (min-width: 640px) {
  .current-label {
    display: inline;
  }
}

.chevron {
  font-size: 1rem;
  opacity: 0.6;
  transition: transform 0.4s ease;
}

.switcher-trigger.is-open .chevron {
  transform: rotate(180deg);
}

.item-inner {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  width: 100%;
}

.item-flag {
  display: flex;
  align-items: center;
  font-size: 1.3rem;
}

.item-name {
  font-size: 0.9rem;
  font-weight: 500;
  /* Hide on small devices */
  display: none;
}

@media (min-width: 640px) {
  .item-name {
    display: inline;
  }
}

.active-indicator {
  margin-left: auto;
  color: var(--primary);
  font-size: 1.1rem;
  display: flex;
  align-items: center;
}
</style>

<style>
/* Global overrides to kill all white artifacts and scrollbars */
.dark-mode .select-content {
  background: #000000 !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  border-radius: 12px !important;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.9) !important;
  padding: 0.6rem !important;
  max-height: none !important;
  overflow: hidden !important;
  width: max-content !important;
  min-width: 160px !important;
}

.dark-mode .select-item {
  margin: 0.15rem 0 !important;
  border-radius: 6px !important;
  padding: 0.55rem 0.85rem !important;
  background: transparent !important;
  color: rgba(255, 255, 255, 0.8) !important;
  transition: all 0.2s ease !important;
  border: none !important;
  white-space: nowrap !important;
}

.dark-mode .select-item[data-state="checked"],
.dark-mode .select-item[data-highlighted],
.dark-mode .select-item:hover {
  background: hsla(
    var(--h-primary),
    var(--s-primary),
    var(--l-primary),
    0.1
  ) !important;
  color: var(--primary) !important;
}

.light-mode .select-content {
  background: #ffffff !important;
  border: 1px solid rgba(0, 0, 0, 0.1) !important;
  border-radius: 12px !important;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08) !important;
  padding: 0.6rem !important;
  max-height: none !important;
  overflow: hidden !important;
  width: max-content !important;
  min-width: 160px !important;
}

.light-mode .select-item {
  margin: 0.15rem 0 !important;
  border-radius: 6px !important;
  padding: 0.55rem 0.85rem !important;
  background: transparent !important;
  color: rgba(0, 0, 0, 0.8) !important;
  transition: all 0.2s ease !important;
  border: none !important;
  white-space: nowrap !important;
}

.light-mode .select-item[data-state="checked"],
.light-mode .select-item[data-highlighted],
.light-mode .select-item:hover {
  background: hsla(
    var(--h-primary),
    var(--s-primary),
    var(--l-primary),
    0.1
  ) !important;
  color: var(--primary) !important;
}

/* Force hide scrollbars and prevent overflow on all inner containers */
.select-content,
.select-content *,
.select-content [data-radix-scroll-area-viewport],
.select-content [data-radix-scroll-area-content] {
  overflow: hidden !important;
  scrollbar-width: none !important;
  -ms-overflow-style: none !important;
}

.select-content [data-radix-scroll-area-viewport]::-webkit-scrollbar,
.select-content ::-webkit-scrollbar {
  display: none !important;
  width: 0 !important;
  height: 0 !important;
}

/* Neutralize the default USelect base button artifacts */
.select-base {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  padding: 0 !important;
  height: auto !important;
  width: auto !important;
  gap: 0 !important;
  --tw-ring-width: 0px !important;
  --tw-ring-offset-width: 0px !important;
  --tw-ring-offset-shadow: none !important;
  --tw-ring-shadow: none !important;
}

.dark-mode .select-base,
.light-mode .select-base {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
}

/* Hide duplicate chevron */
.select-base [data-slot="trailing"] {
  display: none !important;
}

/* Compact styles for smaller screens */
@media (max-width: 640px) {
  .dark-mode .select-content {
    padding: 0.35rem !important;
    min-width: 80px !important;
  }

  .dark-mode .select-item {
    margin: 0.08rem 0 !important;
    padding: 0.4rem 0.55rem !important;
    font-size: 0.85rem !important;
  }

  .light-mode .select-content {
    padding: 0.35rem !important;
    min-width: 80px !important;
  }

  .light-mode .select-item {
    margin: 0.08rem 0 !important;
    padding: 0.4rem 0.55rem !important;
    font-size: 0.85rem !important;
  }
}
</style>
