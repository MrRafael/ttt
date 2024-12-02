"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProjectFileDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_project_file_dto_1 = require("./create-project-file.dto");
class UpdateProjectFileDto extends (0, mapped_types_1.PartialType)(create_project_file_dto_1.CreateProjectFileDto) {
}
exports.UpdateProjectFileDto = UpdateProjectFileDto;
//# sourceMappingURL=update-project-file.dto.js.map