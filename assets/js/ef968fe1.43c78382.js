"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[504],{1277:t=>{t.exports=JSON.parse('{"functions":[{"name":"Reverse","desc":"Attempts to return the constructed number converted into a regular number. If the constructed number is above 1e+308 it will instead return INF.\\n\\n```lua\\n\\tprint(InfiniteMath.new(\\"1, 3\\"):Reverse()) -- 1000\\n```","params":[],"returns":[{"desc":"","lua_type":"number"}],"function_type":"method","source":{"line":382,"path":"src/InfiniteMath/init.lua"}},{"name":"GetSuffix","desc":"Returns a string with the number and a suffix at the end, these suffixes will go up to 1e+12000. After, it will default to returning scientific notation.\\n\\nBy default, it will return an abbreviated suffix (1K). Using true will use the default behavior. Using false will return the full suffix (1 Thousand).\\n\\n```lua\\n\\tprint(InfiniteMath.new(1000):GetSuffix()) -- 1K\\n\\tprint(InfiniteMath.new(1000):GetSuffix(true)) -- 1K\\n\\tprint(InfiniteMath.new(1000):GetSuffix(false)) -- 1 Thousand\\n```","params":[{"name":"abbreviation","desc":"","lua_type":"boolean | nil"}],"returns":[{"desc":"","lua_type":"string"}],"function_type":"method","source":{"line":406,"path":"src/InfiniteMath/init.lua"}},{"name":"LogarithmNotation","desc":"Returns a string with the number formatted in scientific notation.\\n\\n```lua\\n\\tprint(InfiniteMath.new(1000):ScientificNotation()) -- 1e+3\\n```\\n\\nWhen a number reaches `1e+1000000` you can choose an abbreviation mode for the amount of zeros in the scientific notation. By default, it will use GetSuffix on the exponent `1e+1M`, but you can also choose to have it use scientific notation `1e+1e+6`.\\n\\n```lua\\n\\tprint(InfiniteMath.new(\\"1, 1e+6\\"):ScientificNotation()) -- 1e+1M\\n\\tprint(InfiniteMath.new(\\"1, 1e+6\\"):ScientificNotation(true)) -- 1e+1M\\n\\tprint(InfiniteMath.new(\\"1, 1e+6\\"):ScientificNotation(false)) -- 1e+1e+6\\n```\\n\\nYou can also use nil twice to stop the functionality and instead just display `1e+1000000`.\\n\\n```lua\\n\\tprint(InfiniteMath.new(\\"1, 1e+6\\"):ScientificNotation(nil, nil)) -- 1e+1000000\\n```","params":[],"returns":[{"desc":"","lua_type":"string"}],"function_type":"method","source":{"line":471,"path":"src/InfiniteMath/init.lua"}},{"name":"LogarithmNotation","desc":"Returns a string with the number formatted in logarithmic notation.\\n\\n```lua\\n\\tprint(InfiniteMath.new(1000):ScientificNotation()) -- e3.0\\n```","params":[],"returns":[{"desc":"","lua_type":"string"}],"function_type":"method","source":{"line":501,"path":"src/InfiniteMath/init.lua"}},{"name":"aaNotation","desc":"Returns a string with the number formatted in double letter notation.\\n\\n```lua\\n\\tprint(InfiniteMath.new(1e+15):aaNotation()) -- 1aa\\n```","params":[],"returns":[{"desc":"","lua_type":"string"}],"function_type":"method","source":{"line":539,"path":"src/InfiniteMath/init.lua"}},{"name":"ConvertForLeaderboards","desc":"Returns a number that you can use for OrderedDataStores in order to create global leaderboards that support InfiniteMath constructed numbers.\\n\\n```lua\\n\\tprint(InfiniteMath.new(1000):ConvertForLeaderboards()) -- 31000\\n```","params":[],"returns":[{"desc":"","lua_type":"number"}],"function_type":"method","source":{"line":580,"path":"src/InfiniteMath/init.lua"}}],"properties":[],"types":[],"name":"Number","desc":"An InfiniteMath constructed number that has a limit of -10^^308 to 10^^308.","source":{"line":16,"path":"src/InfiniteMath/init.lua"}}')}}]);