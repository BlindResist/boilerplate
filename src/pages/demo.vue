<script setup lang="ts">
import { ref } from 'vue';
import {
  AppAccordion,
  AppAccordionItem,
  AppButton,
  AppCheckbox,
  AppDatePicker,
  AppDivider,
  AppInput,
  AppInputFile,
  AppKeyIndicator,
  AppLink,
  AppList,
  AppRadio,
  type AppRadioOption,
  AppSelect,
  type AppSelectOption,
  AppSpinner,
  AppTabs,
  type AppTabsItem,
  AppTextarea,
  AppTitle,
  type AppTitleTags,
  AppTooltip,
} from '@/common';
import { AppPage } from '@/app/layouts';

const tags = ref<AppTitleTags[]>([
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
]);

const options = ref<(AppRadioOption | AppSelectOption)[]>([
  {
    id: '1',
    text: 'Radio 1',
    selected: true,
    disabled: false,
  },
  {
    id: '2',
    text: 'Radio 2',
    selected: false,
    disabled: false,
  },
  {
    id: '3',
    text: 'Radio 3',
    selected: false,
    disabled: false,
  },
  {
    id: '4',
    text: 'Radio 4',
    selected: false,
    disabled: true,
  },
]);

const tabs = ref<AppTabsItem[]>([
  {
    id: '1',
    active: true,
    label: 'Tab 1',
  },
  {
    id: '2',
    active: false,
    label: 'Tab 2',
  },
  {
    id: '3',
    active: false,
    label: 'Tab 3',
  },
  {
    id: '4',
    active: false,
    disabled: true,
    label: 'Tab 4',
  },
]);

const radio = ref<string>('');
const select = ref<string>('');
const textarea = ref<string>('');
const spinner = ref<boolean>(true);
const inputValue = ref<string>('');
const checkbox = ref<boolean>(false);
</script>

<template>
  <AppPage title="Demo page">
    <template #content>
      <div class="row">
        <!--    AppAccordion    -->
        <div class="col-default-12">
          <AppDivider />
          <AppTitle
            tag="h4"
            text="AppAccordion"
            class="margin-bottom--s"
          />
          <br>
          <AppAccordion>
            <AppAccordionItem>
              <template #header>
                Accordion 1
              </template>
              <template #body>
                Whoa!
              </template>
            </AppAccordionItem>
            <AppAccordionItem>
              <template #header>
                Accordion 2
              </template>
              <template #body>
                Whoa!
              </template>
            </AppAccordionItem>
            <AppAccordionItem>
              <template #header>
                Accordion 3
              </template>
              <template #body>
                Whoa!
              </template>
            </AppAccordionItem>
          </AppAccordion>
        </div>

        <!--    AppKeyIndicator    -->
        <div class="col-default-12">
          <AppDivider />
          <AppTitle
            tag="h4"
            text="AppKeyIndicator"
            class="margin-bottom--s"
          />
          <br>
          <div class="row">
            <div class="col-default-3">
              <AppKeyIndicator
                label="Label"
                value="Value"
              />
            </div>
            <div class="col-default-3">
              <AppKeyIndicator
                label="Label"
                value="Value"
              />
            </div>
            <div class="col-default-3">
              <AppKeyIndicator
                label="Label"
                value="Value"
              />
            </div>
            <div class="col-default-3">
              <AppKeyIndicator
                label="Label"
                value="Value"
              />
            </div>
          </div>
        </div>

        <!--    AppLink    -->
        <div class="col-default-12">
          <AppDivider />
          <AppTitle
            tag="h4"
            text="AppLink"
            class="margin-bottom--s"
          />
          <div class="row">
            <div class="col-default-3">
              <AppLink
                text="Primary link"
              />
            </div>
            <div class="col-default-3">
              <AppLink
                text="Secondary link"
                theme="secondary"
              />
            </div>
          </div>
        </div>

        <!--    AppList    -->
        <div class="col-default-12">
          <AppDivider />
          <AppTitle
            tag="h4"
            text="AppList"
            class="margin-bottom--s"
          />
          <br>
          <AppList
            text="Link"
            :items="[
              {
                id: '1',
                label: 'Label 1',
              },
              {
                id: '2',
                label: 'Label 2',
              },
            ]"
          />
        </div>

        <!--    AppTitle    -->
        <div class="col-default-12">
          <AppDivider />
          <AppTitle
            v-for="item in tags"
            :key="item"
            :tag="item"
            :text="`AppTitle ${item}`"
            class="margin-bottom--s"
          />
        </div>

        <!--    AppButton    -->
        <div class="col-default-12">
          <AppDivider />
          <AppTitle
            tag="h4"
            text="AppButton"
            class="margin-bottom--s"
          />
          <div class="row">
            <div class="col-default-2">
              <AppButton text="Button" />
            </div>
            <div class="col-default-2">
              <AppButton
                text="Button"
                rounded
              />
            </div>
            <div class="col-default-2">
              <AppButton
                text="Button"
                auto-width
              />
            </div>
            <div class="col-default-2">
              <AppButton
                text="Button"
                size="s"
              />
            </div>
            <div class="col-default-2">
              <AppButton
                text="Button"
                size="l"
              />
            </div>
            <div class="col-default-2">
              <AppButton
                text="Button"
                disabled
              />
            </div>
          </div>
        </div>

        <!--    AppCheckbox    -->
        <div class="col-default-12">
          <AppDivider />
          <AppTitle
            tag="h4"
            text="AppCheckbox"
            class="margin-bottom--s"
          />
          <div class="row">
            <div class="col-default-2">
              <AppCheckbox
                v-model:checked="checkbox"
                text="Button"
              />
            </div>
            <div class="col-default-2">
              <AppCheckbox
                v-model:checked="checkbox"
                text="Button"
                disabled
              />
            </div>
          </div>
        </div>

        <!--    AppDatePicker    -->
        <div class="col-default-12">
          <AppDivider />
          <AppTitle
            tag="h4"
            text="AppDatePicker"
            class="margin-bottom--s"
          />
          <div class="row">
            <div class="col-default-2">
              <AppDatePicker placeholder="Select date" />
            </div>
          </div>
        </div>

        <!--    AppInput    -->
        <div class="col-default-12">
          <AppDivider />
          <AppTitle
            tag="h4"
            text="AppInput"
            class="margin-bottom--s"
          />
          <div class="row">
            <div class="col-default-3">
              <AppInput
                v-model:value="inputValue"
                placeholder="Type some"
              />
            </div>
            <div class="col-default-3">
              <AppInput
                v-model:value="inputValue"
                placeholder="Type some"
                disabled
              />
            </div>
          </div>
        </div>

        <!--    AppInputFile    -->
        <div class="col-default-12">
          <AppDivider />
          <AppTitle
            tag="h4"
            text="AppInputFile"
            class="margin-bottom--s"
          />
          <div class="row">
            <div class="col-default-3">
              <AppInputFile
                description="Description"
                button-text="Upload"
              />
            </div>
          </div>
        </div>

        <!--    AppRadio    -->
        <div class="col-default-12">
          <AppDivider />
          <AppTitle
            tag="h4"
            text="AppRadio"
            class="margin-bottom--s"
          />
          <div class="row">
            <div class="col-default-3">
              <AppRadio
                v-model:value="radio"
                :options="options"
              />
            </div>
            <div class="col-default-3">
              <AppRadio
                v-model:value="radio"
                :options="options"
                disabled
              />
            </div>
          </div>
        </div>

        <!--    AppSelect    -->
        <div class="col-default-12">
          <AppDivider />
          <AppTitle
            tag="h4"
            text="AppSelect"
            class="margin-bottom--s"
          />
          <div class="row">
            <div class="col-default-3">
              <AppSelect
                v-model:selected="select"
                :options="options"
                placeholder="Select"
              />
            </div>
            <div class="col-default-3">
              <AppSelect
                v-model:selected="select"
                :options="options"
                disabled
                placeholder="Select"
              />
            </div>
          </div>
        </div>

        <!--    AppSpinner    -->
        <div class="col-default-12">
          <AppDivider />
          <AppTitle
            tag="h4"
            text="AppSpinner"
            class="margin-bottom--s"
          />
          <div class="row">
            <div class="col-default-3 position-relative">
              <AppSpinner
                v-model:active="spinner"
              />
            </div>
          </div>
        </div>

        <!--    AppTabs    -->
        <div class="col-default-12">
          <AppDivider />
          <AppTitle
            tag="h4"
            text="AppTabs"
            class="margin-bottom--s"
          />
          <div class="row">
            <div class="col-default-6">
              <AppTabs
                v-model:items="tabs"
              />
            </div>
          </div>
        </div>

        <!--    AppTextarea    -->
        <div class="col-default-12">
          <AppDivider />
          <AppTitle
            tag="h4"
            text="AppTextarea"
            class="margin-bottom--s"
          />
          <div class="row">
            <div class="col-default-4">
              <AppTextarea
                v-model:value="textarea"
                placeholder="Type some"
              />
            </div>
            <div class="col-default-4">
              <AppTextarea
                v-model:value="textarea"
                placeholder="Type some"
                disabled
              />
            </div>
          </div>
        </div>

        <!--    AppTooltip    -->
        <div class="col-default-12">
          <AppDivider />
          <AppTitle
            tag="h4"
            text="AppTooltip"
            class="margin-bottom--s"
          />
          <div class="row">
            <div class="col-default-4">
              <AppTooltip>
                tooltip
              </AppTooltip>
            </div>
          </div>
        </div>
      </div>
    </template>
  </AppPage>
</template>
