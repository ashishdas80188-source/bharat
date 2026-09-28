@REM ----------------------------------------------------------------------------
@REM Maven Start Up Batch script
@REM ----------------------------------------------------------------------------
@IF "%DEBUG%" == "" @ECHO OFF
@SETLOCAL ENABLEEXTENSIONS ENABLEDELAYEDEXPANSION

SET "DIR=%~dp0"
SET "WRAPPER_JAR=%DIR%.mvn\wrapper\maven-wrapper.jar"
SET "WRAPPER_LAUNCHER=org.apache.maven.wrapper.MavenWrapperMain"

IF NOT EXIST "%WRAPPER_JAR%" (
    echo Error: %WRAPPER_JAR% not found.
    exit /b 1
)

IF DEFINED JAVA_HOME (
    SET "JAVA_EXE=%JAVA_HOME%\bin\java.exe"
) ELSE (
    SET "JAVA_EXE=java.exe"
)

"%JAVA_EXE%" -cp "%WRAPPER_JAR%" "-Dmaven.home=%USERPROFILE%\.m2\wrapper\dists\apache-maven-3.9.6-bin\3.9.6" %WRAPPER_LAUNCHER% %*
