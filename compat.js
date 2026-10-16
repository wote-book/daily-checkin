/* 兼容旧版 JSON 备份中不存在的新增界面设置。 */
function ensureNewSettings(){state.summaryFilter=state.summaryFilter||{mode:'all',year:new Date().getFullYear(),month:new Date().getMonth()+1};state.sortMode=state.sortMode||'custom';state.pinnedTypes=state.pinnedTypes||[]}
const renderWithNewSettings=render;
render=function(){ensureNewSettings();renderWithNewSettings()};
ensureNewSettings();
const universeDrawWithAllRecords=universeDraw;
universeDraw=function(){const allRecords=state.records;state.records=analyticsRecords();try{universeDrawWithAllRecords()}finally{state.records=allRecords}};
