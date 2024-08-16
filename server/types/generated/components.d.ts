import type { Schema, Attribute } from '@strapi/strapi';

export interface MainVideoList extends Schema.Component {
  collectionName: 'components_main_video_lists';
  info: {
    displayName: 'video list';
    description: '';
  };
  attributes: {
    sectionId: Attribute.String;
    videoIds: Attribute.Component<'base.text', true>;
  };
}

export interface MainTabs extends Schema.Component {
  collectionName: 'components_main_tabs';
  info: {
    displayName: 'tabs';
  };
  attributes: {
    tabs: Attribute.Component<'base.tab', true>;
  };
}

export interface MainSingleSection extends Schema.Component {
  collectionName: 'components_main_single_sections';
  info: {
    displayName: 'single section';
    description: '';
  };
  attributes: {
    sectionId: Attribute.String;
    title: Attribute.String;
    image: Attribute.Media<'images'>;
    description: Attribute.Blocks;
  };
}

export interface MainMultiSection extends Schema.Component {
  collectionName: 'components_main_services';
  info: {
    displayName: 'multi section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    sectionId: Attribute.String;
    items: Attribute.Component<'base.image-tab-section', true>;
  };
}

export interface MainMenuItems extends Schema.Component {
  collectionName: 'components_main_menu_items';
  info: {
    displayName: 'menu items';
    description: '';
  };
  attributes: {
    item: Attribute.Component<'base.string', true>;
    logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface MainLogoList extends Schema.Component {
  collectionName: 'components_main_logo_lists';
  info: {
    displayName: 'logo list';
    description: '';
  };
  attributes: {
    images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    sectionId: Attribute.String;
    title: Attribute.String;
  };
}

export interface MainImageCarousel extends Schema.Component {
  collectionName: 'components_image_image_carousels';
  info: {
    displayName: 'image list';
    description: '';
  };
  attributes: {
    images: Attribute.Media<'images', true>;
    sectionId: Attribute.String;
  };
}

export interface BaseText extends Schema.Component {
  collectionName: 'components_base_texts';
  info: {
    displayName: 'text';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface BaseTab extends Schema.Component {
  collectionName: 'components_base_tabs';
  info: {
    displayName: 'tab';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Blocks;
  };
}

export interface BaseString extends Schema.Component {
  collectionName: 'components_base_strings';
  info: {
    displayName: 'menu item';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    sectionId: Attribute.String;
    dropdown: Attribute.Component<'base.dropdown', true>;
  };
}

export interface BaseImageTabSection extends Schema.Component {
  collectionName: 'components_base_image_tab_sections';
  info: {
    displayName: 'image tab section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    tabs: Attribute.Component<'base.tab', true>;
    sectionId: Attribute.String;
    description: Attribute.Blocks;
  };
}

export interface BaseDropdown extends Schema.Component {
  collectionName: 'components_base_dropdowns';
  info: {
    displayName: 'dropdown';
  };
  attributes: {
    subtitle: Attribute.String;
    sectionId: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'main.video-list': MainVideoList;
      'main.tabs': MainTabs;
      'main.single-section': MainSingleSection;
      'main.multi-section': MainMultiSection;
      'main.menu-items': MainMenuItems;
      'main.logo-list': MainLogoList;
      'main.image-carousel': MainImageCarousel;
      'base.text': BaseText;
      'base.tab': BaseTab;
      'base.string': BaseString;
      'base.image-tab-section': BaseImageTabSection;
      'base.dropdown': BaseDropdown;
    }
  }
}
