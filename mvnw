#!/bin/sh
# ----------------------------------------------------------------------------
# Licensed to the Apache Software Foundation (ASF)
# Maven Wrapper startup script for POSIX systems
# ----------------------------------------------------------------------------

if [ -z "$JAVA_HOME" ]; then
  JAVA_CMD="java"
else
  JAVA_CMD="$JAVA_HOME/bin/java"
fi

MAVEN_PROJECTBASEDIR="${MAVEN_BASEDIR:-}"
if [ -z "$MAVEN_PROJECTBASEDIR" ]; then
  MAVEN_PROJECTBASEDIR="$(pwd)"
fi

MAVEN_WRAPPER_JAR="$MAVEN_PROJECTBASEDIR/.mvn/wrapper/maven-wrapper.jar"
MAVEN_WRAPPER_PROPERTIES="$MAVEN_PROJECTBASEDIR/.mvn/wrapper/maven-wrapper.properties"

WRAPPER_LAUNCHER="org.apache.maven.wrapper.MavenWrapperMain"

# Download the wrapper jar if missing
if [ ! -f "$MAVEN_WRAPPER_JAR" ]; then
  WRAPPER_URL=$(grep "wrapperUrl" "$MAVEN_WRAPPER_PROPERTIES" | cut -d= -f2)
  echo "Downloading Maven Wrapper from $WRAPPER_URL"
  if command -v curl > /dev/null; then
    curl -o "$MAVEN_WRAPPER_JAR" "$WRAPPER_URL" 2>/dev/null
  elif command -v wget > /dev/null; then
    wget -O "$MAVEN_WRAPPER_JAR" "$WRAPPER_URL" 2>/dev/null
  fi
fi

exec "$JAVA_CMD" \
  -classpath "$MAVEN_WRAPPER_JAR" \
  "-Dmaven.multiModuleProjectDirectory=$MAVEN_PROJECTBASEDIR" \
  "$WRAPPER_LAUNCHER" "$@"

