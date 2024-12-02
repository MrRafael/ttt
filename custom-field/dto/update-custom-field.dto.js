"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCustomFieldDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_custom_field_dto_1 = require("./create-custom-field.dto");
class UpdateCustomFieldDto extends (0, mapped_types_1.PartialType)(create_custom_field_dto_1.CreateCustomFieldDto) {
}
exports.UpdateCustomFieldDto = UpdateCustomFieldDto;
//# sourceMappingURL=update-custom-field.dto.js.map