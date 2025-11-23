import type { Schema, Struct } from '@strapi/strapi';

export interface SectionChiefConsultant extends Struct.ComponentSchema {
  collectionName: 'components_section_chief_consultants';
  info: {
    displayName: 'Chief Consultant';
    icon: 'briefcase';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images', true>;
    logos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'section.chief-consultant': SectionChiefConsultant;
    }
  }
}
